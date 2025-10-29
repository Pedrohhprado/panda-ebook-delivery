import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, CheckCircle2, BookOpen, TrendingUp, BarChart3 } from "lucide-react";
import heroImage from "@/assets/hero-pandas.jpg";

const Index = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !email.trim()) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Email inválido",
        description: "Por favor, insira um email válido.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    console.log("Sending ebook request:", { name, email });

    try {
      const { data, error } = await supabase.functions.invoke('send-ebook-email', {
        body: { name, email }
      });

      if (error) {
        console.error("Error invoking function:", error);
        throw error;
      }

      console.log("Success response:", data);
      setIsSuccess(true);
      toast({
        title: "Sucesso! 🎉",
        description: "Verifique seu email para receber o ebook.",
      });
      
      // Reset form
      setName("");
      setEmail("");
      
    } catch (error: any) {
      console.error("Error:", error);
      toast({
        title: "Erro ao enviar",
        description: error.message || "Tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-accent/5 px-4">
        <Card className="max-w-md w-full shadow-[var(--shadow-card)] border-border/50">
          <CardContent className="pt-12 pb-12 text-center">
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-primary/10 p-4">
                <CheckCircle2 className="h-16 w-16 text-primary" />
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-foreground">Email Enviado!</h2>
            <p className="text-muted-foreground mb-6 text-lg">
              Verifique sua caixa de entrada. Em breve você receberá o ebook completo sobre Pandas! 🐼
            </p>
            <Button 
              onClick={() => setIsSuccess(false)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Enviar para outro email
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

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

            {/* Form Card */}
            <Card className="max-w-md mx-auto shadow-[var(--shadow-elegant)] border-border/50">
              <CardContent className="pt-8 pb-8">
                <h2 className="text-2xl font-bold mb-6 text-foreground">
                  Receba Gratuitamente
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2 text-left">
                    <Label htmlFor="name" className="text-foreground font-medium">
                      Seu Nome
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Digite seu nome completo"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="h-12 border-input focus:ring-ring"
                      required
                      disabled={isLoading}
                    />
                  </div>

                  <div className="space-y-2 text-left">
                    <Label htmlFor="email" className="text-foreground font-medium">
                      Melhor Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-12 border-input focus:ring-ring"
                      required
                      disabled={isLoading}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-card)] transition-all"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Receber Ebook Grátis 🎁
                      </>
                    )}
                  </Button>
                </form>

                <p className="text-xs text-muted-foreground mt-4">
                  Ao se inscrever, você concorda em receber emails sobre Pandas e análise de dados.
                </p>
              </CardContent>
            </Card>
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
