import React from 'react';
import { Brain, ShieldAlert, Map, Handshake, Infinity } from 'lucide-react';
import Button from './Button';

const Method: React.FC = () => {
  const steps = [
    {
      phase: "Fase 1",
      title: "FUNDAMENTOS DA CONFIANÇA",
      desc: "Esqueça a ideia de que vender é um dom. Aqui você vai instalar o 'sistema operacional' da confiança e dominar as regras do jogo que tiram todo o peso das suas costas na hora de ofertar.",
      icon: <Brain className="w-6 h-6" />
    },
    {
      phase: "Fase 2",
      title: "EXTERMÍNIO DOS SABOTADORES",
      desc: "Vamos silenciar a voz da Síndrome do Impostor. Descubra exatamente quais travas invisíveis estão matando seu faturamento hoje e aprenda a eliminá-las pela raiz para agir sem medo.",
      icon: <ShieldAlert className="w-6 h-6" />
    },
    {
      phase: "Fase 3",
      title: "MAPEAMENTO DO TERRENO",
      desc: "O fim da venda forçada. Aprenda a atrair os clientes certos e a conduzir conversas tão naturais e envolventes que a oferta final parecerá a única conclusão lógica (e o cliente agradecerá por isso).",
      icon: <Map className="w-6 h-6" />
    },
    {
      phase: "Fase 4",
      title: "FECHAMENTO NA PRÁTICA",
      desc: "A cura definitiva para o medo de falar o preço. Domine técnicas elegantes para transformar um 'vou pensar' em dinheiro no bolso, sem gaguejar e sem parecer desesperado por uma venda.",
      icon: <Handshake className="w-6 h-6" />
    },
    {
      phase: "Fase 5",
      title: "FLUXO CONTÍNUO",
      desc: "A arte de fazer o acompanhamento (follow-up) sem ser o 'chato do WhatsApp'. Crie um ciclo virtuoso onde clientes compram, voltam, compram de novo e ainda trazem os amigos.",
      icon: <Infinity className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-20 bg-slate-50 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Por que este método funciona?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Ele não te entrega teoria chata. Ele é um <strong>plano de resgate</strong> dividido em 5 etapas para transformar sua insegurança em resultados previsíveis:
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 md:p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-start md:items-center gap-6 border border-slate-100 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-slate-200 group-hover:bg-blue-500 transition-colors"></div>
              
              <div className="flex-shrink-0 w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center font-bold border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                {step.icon}
              </div>
              <div className="flex-grow z-10">
                <span className="text-xs font-extrabold text-blue-500 uppercase tracking-widest mb-1 block">
                  {step.phase}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="shadow-xl shadow-green-200">
            Quero Aplicar Esse Método Agora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Method;