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
            <Card className="max-w-md mx-auto shadow-[var(--shadow-elegant)] border-border/50">
              <CardContent className="pt-8 pb-8">
                <div 
                  id="sp-form-250215" 
                  sp-id="250215" 
                  sp-hash="9abd7ad390058e59f3c605c951e41362808398ee3107e038d77a8de5cccb6126" 
                  sp-lang="pt-br" 
                  className="sp-form sp-form-regular sp-form-embed"
                  sp-show-options='{"satellite":false,"maDomain":"login.sendpulse.com","formsDomain":"forms.sendpulse.com","condition":"onEnter","scrollTo":25,"delay":10,"repeat":3,"background":"rgba(0, 0, 0, 0.5)","position":"bottom-right","animation":"","hideOnMobile":false,"submitRedirectUrl":"","urlFilter":false,"urlFilterConditions":[{"force":"hide","clause":"contains","token":""}],"analytics":{"ga":{"eventLabel":null,"send":false}},"utmEnable":false}'
                ></div>
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
