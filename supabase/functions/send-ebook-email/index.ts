import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface EmailRequest {
  name: string;
  email: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email }: EmailRequest = await req.json();
    console.log('Processing ebook request for:', { name, email });

    // Validate input
    if (!name || !email) {
      return new Response(
        JSON.stringify({ error: 'Nome e email são obrigatórios' }),
        { 
          status: 400, 
          headers: { 'Content-Type': 'application/json', ...corsHeaders }
        }
      );
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Email inválido' }),
        { 
          status: 400, 
          headers: { 'Content-Type': 'application/json', ...corsHeaders }
        }
      );
    }

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Store lead in database
    const { error: dbError } = await supabase
      .from('leads')
      .insert([{ name, email }]);

    if (dbError) {
      console.error('Database error:', dbError);
      // If it's a duplicate email error, continue to send email anyway
      if (!dbError.message.includes('duplicate') && !dbError.message.includes('unique')) {
        return new Response(
          JSON.stringify({ error: 'Erro ao salvar dados' }),
          { 
            status: 500, 
            headers: { 'Content-Type': 'application/json', ...corsHeaders }
          }
        );
      }
    }

    // Send email via Brevo
    const brevoApiKey = Deno.env.get('BREVO_API_KEY');
    if (!brevoApiKey) {
      console.error('BREVO_API_KEY not configured');
      return new Response(
        JSON.stringify({ error: 'Configuração de email não encontrada' }),
        { 
          status: 500, 
          headers: { 'Content-Type': 'application/json', ...corsHeaders }
        }
      );
    }

    const emailData = {
      sender: {
        name: "Pandas Academy",
        email: "noreply@pandas-academy.com"
      },
      to: [
        {
          email: email,
          name: name
        }
      ],
      subject: "Seu Ebook de Pandas está aqui! 🐼",
      htmlContent: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%); padding: 40px 40px 30px; text-align: center;">
                      <h1 style="color: #ffffff; margin: 0; font-size: 32px; font-weight: 700;">🐼 Pandas Academy</h1>
                    </td>
                  </tr>
                  
                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px;">
                      <h2 style="color: #1a1a1a; margin: 0 0 20px; font-size: 24px;">Olá, ${name}!</h2>
                      
                      <p style="color: #4a4a4a; font-size: 16px; line-height: 1.6; margin: 0 0 20px;">
                        Obrigado por se inscrever! Estamos muito felizes em compartilhar este ebook exclusivo sobre Pandas com você.
                      </p>
                      
                      <p style="color: #4a4a4a; font-size: 16px; line-height: 1.6; margin: 0 0 30px;">
                        Este guia completo vai te ajudar a dominar uma das bibliotecas mais importantes para análise de dados em Python.
                      </p>
                      
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td align="center" style="padding: 20px 0;">
                            <a href="#" style="display: inline-block; background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%); color: #ffffff; text-decoration: none; padding: 16px 40px; border-radius: 8px; font-weight: 600; font-size: 16px;">
                              📥 Baixar Ebook
                            </a>
                          </td>
                        </tr>
                      </table>
                      
                      <div style="background-color: #f8fdf9; border-left: 4px solid #22c55e; padding: 20px; margin: 30px 0;">
                        <h3 style="color: #16a34a; margin: 0 0 10px; font-size: 18px;">O que você vai aprender:</h3>
                        <ul style="color: #4a4a4a; margin: 0; padding-left: 20px;">
                          <li style="margin-bottom: 8px;">Fundamentos do Pandas</li>
                          <li style="margin-bottom: 8px;">Manipulação de DataFrames</li>
                          <li style="margin-bottom: 8px;">Análise exploratória de dados</li>
                          <li style="margin-bottom: 8px;">Visualização de dados</li>
                          <li style="margin-bottom: 8px;">Técnicas avançadas</li>
                        </ul>
                      </div>
                      
                      <p style="color: #4a4a4a; font-size: 16px; line-height: 1.6; margin: 0;">
                        Bons estudos!<br>
                        <strong>Equipe Pandas Academy</strong>
                      </p>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f8fdf9; padding: 30px; text-align: center; border-top: 1px solid #e5e5e5;">
                      <p style="color: #6b7280; font-size: 14px; margin: 0;">
                        © 2025 Pandas Academy. Todos os direitos reservados.
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `
    };

    console.log('Sending email via Brevo...');
    const brevoResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': brevoApiKey,
        'content-type': 'application/json',
      },
      body: JSON.stringify(emailData),
    });

    const brevoResult = await brevoResponse.json();
    console.log('Brevo response:', brevoResult);

    if (!brevoResponse.ok) {
      console.error('Brevo API error:', brevoResult);
      return new Response(
        JSON.stringify({ error: 'Erro ao enviar email', details: brevoResult }),
        { 
          status: 500, 
          headers: { 'Content-Type': 'application/json', ...corsHeaders }
        }
      );
    }

    console.log('Email sent successfully!');
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Email enviado com sucesso!',
        messageId: brevoResult.messageId 
      }),
      { 
        status: 200, 
        headers: { 'Content-Type': 'application/json', ...corsHeaders }
      }
    );

  } catch (error: any) {
    console.error('Error in send-ebook-email function:', error);
    return new Response(
      JSON.stringify({ error: error.message || 'Erro desconhecido' }),
      { 
        status: 500, 
        headers: { 'Content-Type': 'application/json', ...corsHeaders }
      }
    );
  }
};

serve(handler);
