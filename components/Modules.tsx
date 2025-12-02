import React from 'react';
import { BookOpen, ShieldOff, Search, MessageCircle, Star, Navigation, Unlock, RefreshCw, HeartHandshake, Zap } from 'lucide-react';
import Button from './Button';

const Modules: React.FC = () => {
  const modules = [
    {
      id: 1,
      title: "O Fim do Amadorismo",
      originalTitle: "INTRODUÇÃO ÀS VENDAS",
      desc: "Pare de torcer para vender e comece a controlar o jogo. A base sólida que tira você da improvisação e elimina o medo do desconhecido.",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Detox Mental de Vendas",
      originalTitle: "SABOTADORES QUE TRAVAM",
      desc: "Destrave sua mente para cobrar o que você vale. Identifique e elimine os pensamentos invisíveis que te impedem de ter confiança e leveza.",
      icon: <ShieldOff className="w-6 h-6" />
    },
    {
      id: 3,
      title: "Imã de Primeiros Clientes",
      originalTitle: "ENCONTRANDO CLIENTES",
      desc: "Onde eles estão e como atraí-los sem gastar um centavo com anúncios. Estratégias práticas para encher sua agenda começando do zero.",
      icon: <Search className="w-6 h-6" />
    },
    {
      id: 4,
      title: "A Arte da Conexão Imediata",
      originalTitle: "ABORDAGEM QUE GERA CONEXÃO",
      desc: "Adeus, roteiros robóticos. Aprenda a iniciar conversas naturais que quebram o gelo, geram confiança instantânea e abrem portas.",
      icon: <MessageCircle className="w-6 h-6" />
    },
    {
      id: 5,
      title: "A Oferta Irresistível",
      originalTitle: "APRESENTAÇÃO DE ALTO VALOR",
      desc: "Como apresentar seu serviço de um jeito tão profissional e desejável que o preço se torna um mero detalhe na cabeça do cliente.",
      icon: <Star className="w-6 h-6" />
    },
    {
      id: 6,
      title: "O Caminho Natural do 'Sim'",
      originalTitle: "GUIANDO PARA O FECHAMENTO",
      desc: "Você não precisa empurrar. Descubra o passo a passo exato para conduzir suavemente o cliente até o momento em que ele mesmo pede para fechar.",
      icon: <Navigation className="w-6 h-6" />
    },
    {
      id: 7,
      title: "Mestre da Objeção",
      originalTitle: "CONTORNANDO OBJEÇÕES",
      desc: "Nunca mais fique sem resposta. Tenha na ponta da língua as frases inteligentes para reverter o 'tá caro' e o 'vou falar com meu marido'.",
      icon: <Unlock className="w-6 h-6" />
    },
    {
      id: 8,
      title: "Resgate de Vendas Perdidas",
      originalTitle: "COMO FAZER FOLLOW-UP",
      desc: "Como recuperar os indecisos e recuperar dinheiro deixado na mesa sem parecer o 'chato do WhatsApp' ou o vendedor insistente.",
      icon: <RefreshCw className="w-6 h-6" />
    },
    {
      id: 9,
      title: "A Máquina de Indicações",
      originalTitle: "PÓS-VENDA QUE FIDELIZA",
      desc: "O segredo para transformar um cliente em três. Fidelize quem já comprou e crie um ciclo automático de crescimento e recomendações.",
      icon: <HeartHandshake className="w-6 h-6" />
    },
    {
      id: 10,
      title: "Mentalidade de Elite",
      originalTitle: "MENTALIDADE DE CAMPEÃO",
      desc: "Construa a blindagem emocional necessária para ter consistência, força e resultados crescentes todos os dias, faça chuva ou faça sol.",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-20 bg-white px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm bg-blue-50 px-3 py-1 rounded-full">Cronograma Completo</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4 mb-4">
            Veja tudo o que você vai aprender dentro do Manual
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            10 Módulos completos desenhados para te levar do zero à primeira venda (e além).
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {modules.map((mod) => (
            <div key={mod.id} className="bg-slate-50 p-6 md:p-8 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 group flex gap-5">
              <div className="flex-shrink-0 mt-1">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-blue-600 shadow-sm border border-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {mod.icon}
                </div>
              </div>
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase mb-1 block tracking-wider">Módulo {mod.id}</span>
                <h3 className="font-bold text-xl text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                  {mod.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  {mod.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <Button className="shadow-xl shadow-green-200">
                Quero Começar o Treinamento
            </Button>
        </div>
      </div>
    </section>
  );
};

export default Modules;