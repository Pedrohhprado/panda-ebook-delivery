import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, TrendingUp, BarChart3 } from "lucide-react";
import heroImage from "@/assets/hero-pandas.jpg";

const Index = () => {
  useEffect(() => {
    // Load SendPulse form script
    const script = document.createElement('script');
    script.src = '//web.webformscr.com/apps/fc3/build/loader.js';
    script.async = true;
    script.setAttribute('sp-form-id', '9abd7ad390058e59f3c605c951e41362808398ee3107e038d77a8de5cccb6126');
    document.body.appendChild(script);

    // Load SendPulse default handler
    const handlerScript = document.createElement('script');
    handlerScript.src = '//web.webformscr.com/apps/fc3/build/default-handler.js?1700557987608';
    handlerScript.async = true;
    document.body.appendChild(handlerScript);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      if (document.body.contains(handlerScript)) {
        document.body.removeChild(handlerScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
        
        {/* Content */}
        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-primary font-semibold">Ebook Gratuito</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
              Domine o <span className="text-primary">Pandas</span> em Tempo Recorde
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Guia completo com os fundamentos essenciais da biblioteca mais usada para análise de dados em Python
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="flex flex-col items-center p-6 bg-card rounded-xl shadow-[var(--shadow-card)] border border-border/50 hover:shadow-[var(--shadow-elegant)] transition-all">
                <BookOpen className="h-10 w-10 text-primary mb-3" />
                <h3 className="font-semibold text-lg mb-2 text-foreground">Conteúdo Prático</h3>
                <p className="text-sm text-muted-foreground">Exemplos reais e aplicáveis</p>
              </div>
              
              <div className="flex flex-col items-center p-6 bg-card rounded-xl shadow-[var(--shadow-card)] border border-border/50 hover:shadow-[var(--shadow-elegant)] transition-all">
                <TrendingUp className="h-10 w-10 text-primary mb-3" />
                <h3 className="font-semibold text-lg mb-2 text-foreground">Do Zero ao Avançado</h3>
                <p className="text-sm text-muted-foreground">Aprenda do básico ao expert</p>
              </div>
              
              <div className="flex flex-col items-center p-6 bg-card rounded-xl shadow-[var(--shadow-card)] border border-border/50 hover:shadow-[var(--shadow-elegant)] transition-all">
                <BarChart3 className="h-10 w-10 text-primary mb-3" />
                <h3 className="font-semibold text-lg mb-2 text-foreground">Análise de Dados</h3>
                <p className="text-sm text-muted-foreground">Técnicas profissionais</p>
              </div>
            </div>

            {/* SendPulse Form */}
            <div className="max-w-md mx-auto">
              <style dangerouslySetInnerHTML={{__html: `
                .sp-form[sp-id="250215"] { display: block; background: rgba(255, 255, 255, 1); padding: 15px; width: 450px; max-width: 100%; border-radius: 8px; border-color: #dddddd; border-style: solid; border-width: 1px; font-family: Arial, "Helvetica Neue", sans-serif; background-repeat: no-repeat; background-position: center; background-size: auto;}
                .sp-form[sp-id="250215"] input[type="checkbox"] { display: inline-block; opacity: 1; visibility: visible;}
                .sp-form[sp-id="250215"] .sp-form-fields-wrapper { margin: 0 auto; width: 420px;}
                .sp-form[sp-id="250215"] .sp-form-control { background: rgba(255, 255, 255, 1); border-color: #cccccc; border-style: solid; border-width: 1px; font-size: 15px; padding-left: 8.75px; padding-right: 8.75px; border-radius: 4px; height: 35px; width: 100%;}
                .sp-form[sp-id="250215"] .sp-field label { color: #444444; font-size: 13px; font-style: normal; font-weight: bold;}
                .sp-form[sp-id="250215"] .sp-button-messengers { border-radius: 4px;}
                .sp-form[sp-id="250215"] .sp-button { border-radius: 4px; background-color: #39b500; color: #ffffff; width: auto; font-weight: 700; font-style: normal; font-family: Arial, "Helvetica Neue", sans-serif; box-shadow: none; border-width: 1px; border-color: #ffffff; border-style: solid;}
                .sp-form[sp-id="250215"] .sp-button-container { text-align: left;}
              `}} />
              <div className="sp-form-outer">
                <div id="sp-form-250215" sp-id="250215" sp-hash="9abd7ad390058e59f3c605c951e41362808398ee3107e038d77a8de5cccb6126" sp-lang="pt-br" className="sp-form sp-form-regular sp-form-embed" sp-show-options='{"satellite":false,"maDomain":"login.sendpulse.com","formsDomain":"forms.sendpulse.com","condition":"onEnter","scrollTo":25,"delay":10,"repeat":3,"background":"rgba(0, 0, 0, 0.5)","position":"bottom-right","animation":"","hideOnMobile":false,"submitRedirectUrl":"","urlFilter":false,"urlFilterConditions":[{"force":"hide","clause":"contains","token":""}],"analytics":{"ga":{"eventLabel":null,"send":false}},"utmEnable":false}'>
                  <div className="sp-form-fields-wrapper">
                    <div className="sp-message"><div></div></div>
                    <form noValidate className="sp-element-container ">
                      <div className="sp-field " sp-id="sp-435fcdef-2a59-457a-aae9-794323637360">
                        <div style={{fontFamily: 'inherit', lineHeight: 1.2}}>
                          <p style={{textAlign: 'center'}}><span style={{fontSize: '20px'}}>Ebook Grátis: Pandas Rápido</span></p>
                        </div>
                      </div>
                      <div className="sp-field sp-field-full-width" sp-id="sp-9a324ceb-f26d-4e17-8fc1-85f4976f51fb">
                        <div style={{fontFamily: 'inherit', lineHeight: 1.2}}>
                          <p>Domine o essencial da biblioteca Pandas. Insira seus dados abaixo para receber seu guia gratuito agora mesmo e acelerar sua análise de dados!</p>
                        </div>
                      </div>
                      <div className="sp-field " sp-id="sp-7591bb9c-4a82-4cfb-975f-7068f9c8eed3">
                        <label className="sp-control-label"><span>Seu nome</span></label>
                        <input type="text" sp-type="name" name="sform[Tm9tZQ==]" className="sp-form-control " placeholder="Nome completo" sp-tips="{}" autoComplete="on" />
                      </div>
                      <div className="sp-field " sp-id="sp-1e0228ab-8834-46bf-a4de-4e5d61f406b7">
                        <label className="sp-control-label"><span>Email</span><strong>*</strong></label>
                        <input type="email" sp-type="email" name="sform[email]" className="sp-form-control " placeholder="nomedeusuário@gmail.com" sp-tips='{"required":"Campo obrigatório","wrong":"E-mail errado"}' autoComplete="on" required />
                      </div>
                      <div className="sp-field sp-button-container " sp-id="sp-447e2c74-6a61-4de1-b6b9-1e264e716d6e">
                        <button id="sp-447e2c74-6a61-4de1-b6b9-1e264e716d6e" className="sp-button">Baixar Ebook Agora!</button>
                      </div>
                    </form>
                    <div className="sp-link-wrapper sp-brandname__left">
                      <a className="sp-link " target="_blank" href="https://sendpulse.com/forms-powered-by-sendpulse?from=9263172" rel="noreferrer">
                        <span className="sp-link-img">&nbsp;</span>
                        <span>Desenvolvido por SendPulse</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-card/50 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Por que aprender Pandas?
            </h3>
            <p className="text-muted-foreground mb-8">
              Pandas é a biblioteca fundamental para qualquer profissional que trabalha com dados. 
              Com ela, você pode manipular, analisar e visualizar dados de forma eficiente e intuitiva.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-1">1M+</div>
                <div className="text-sm text-muted-foreground">Downloads diários</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Funções principais</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Open Source</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">#1</div>
                <div className="text-sm text-muted-foreground">Para análise de dados</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
