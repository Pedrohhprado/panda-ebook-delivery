import { useEffect } from "react";
import { BookOpen, TrendingUp, BarChart3 } from "lucide-react";
import heroImage from "@/assets/hero-pandas.jpg";

const Index = () => {
  useEffect(() => {
    // Carrega o script do SendPulse de forma correta
    const script = document.createElement("script");
    script.src = "https://web.webformscr.com/apps/fc3/build/loader.js";
    script.async = true;
    script.setAttribute(
      "sp-form-id",
      "9abd7ad390058e59f3c605c951e41362808398ee3107e038d77a8de5cccb6126"
    );

    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      
      {/* HERO */}
      <section className="relative overflow-hidden">
        
        {/* Imagem */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />

        {/* Conteúdo */}
        <div className="relative container mx-auto px-4 py-20 md:py-32 text-center">
          
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
            
            <div className="group flex flex-col items-center p-8 bg-gradient-to-br from-card to-primary/5 rounded-2xl shadow-[var(--shadow-card)] border border-primary/20 hover:shadow-[var(--shadow-elegant)] hover:scale-105 hover:-translate-y-2 transition-all duration-300">
              <div className="p-4 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                <BookOpen className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-2 text-foreground">Conteúdo Prático</h3>
              <p className="text-sm text-muted-foreground text-center">Exemplos reais e aplicáveis no seu dia a dia</p>
            </div>

            <div className="group flex flex-col items-center p-8 bg-gradient-to-br from-card to-primary/5 rounded-2xl shadow-[var(--shadow-card)] border border-primary/20 hover:shadow-[var(--shadow-elegant)] hover:scale-105 hover:-translate-y-2 transition-all duration-300">
              <div className="p-4 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                <TrendingUp className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-2 text-foreground">Do Zero ao Avançado</h3>
              <p className="text-sm text-muted-foreground text-center">Aprenda do básico ao expert passo a passo</p>
            </div>

            <div className="group flex flex-col items-center p-8 bg-gradient-to-br from-card to-primary/5 rounded-2xl shadow-[var(--shadow-card)] border border-primary/20 hover:shadow-[var(--shadow-elegant)] hover:scale-105 hover:-translate-y-2 transition-all duration-300">
              <div className="p-4 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                <BarChart3 className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-2 text-foreground">Análise de Dados</h3>
              <p className="text-sm text-muted-foreground text-center">Técnicas profissionais de análise</p>
            </div>

          </div>

          {/* FORMULÁRIO SENDPULSE */}
          <div className="max-w-md mx-auto mt-10">
            {/* LOCAL ONDE O FORMULÁRIO SERÁ INJETADO */}
            <div id="sp-form-9abd7ad390058e59f3c605c951e41362808398ee3107e038d77a8de5cccb6126"></div>
          </div>

        </div>

      </section>

      {/* TRUST SECTION */}
      <section className="py-16 bg-card/50 border-t border-border/50">
        <div className="container mx-auto px-4 text-center max-w-3xl">

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
      </section>

    </div>
  );
};

export default Index;
