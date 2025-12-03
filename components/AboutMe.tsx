import React from 'react';
import { Award } from 'lucide-react';

const AboutMe: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-slate-100 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Image Column */}
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <div className="w-64 h-64 md:w-full md:h-96 bg-slate-200 rounded-2xl overflow-hidden shadow-2xl border-4 border-white relative mb-6">
               <img 
                src="https://i.postimg.cc/vZYQnyRw/IMG-4119.jpg" 
                alt="Guilherme Zampoli" 
                className="w-full h-full object-cover"
                loading="lazy"
               />
            </div>
            
            <div className="flex gap-4 w-full justify-center">
              <div className="text-center">
                <p className="text-2xl font-bold text-slate-900">+3 Milhões</p>
                <p className="text-xs text-slate-500 uppercase tracking-wide">Vendidos em 12 meses</p>
              </div>
              <div className="w-px bg-slate-200 h-10"></div>
              <div className="text-center">
                <p className="text-2xl font-bold text-slate-900">Coach</p>
                <p className="text-xs text-slate-500 uppercase tracking-wide">Analista IGT</p>
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
              Quem é <span className="text-blue-600">Guilherme Zampoli?</span>
            </h2>
            <p className="text-lg text-slate-500 font-medium mb-6 italic">
              "De mãos suando frio a um dos maiores vendedores do Brasil."
            </p>

            <div className="space-y-4 text-slate-700 leading-relaxed text-lg">
              <p>
                Aos 18 anos, fui apresentado ao mundo das vendas diretas. Eu tinha um sonho imenso de vencer, mas <strong>zero experiência e muito medo.</strong>
              </p>
              <p>
                Só de pensar em falar com um desconhecido, minhas mãos suavam frio. Mas eu decidi que o medo não ia me parar. Sem contatos e cheio de insegurança, encarei as ruas.
              </p>
              <p>
                Aprendi na prática. Errei muito, ouvi incontáveis "não", mas ajustei a rota. Com o tempo, aquele jovem tímido se tornou um dos melhores vendedores do Brasil, premiado e reconhecido por metas que pareciam impossíveis.
              </p>
              <p className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 text-blue-900 text-base">
                Hoje sou empresário e, nos últimos 12 meses, gerei mais de <strong>R$ 3 milhões em vendas</strong>. Sou Coach formado pelo IGT, analista comportamental e, acima de tudo, um vendedor com orgulho.
              </p>
              <p>
                Criei o <strong>Manual de Sobrevivência</strong> porque eu sei como é travar na frente do cliente. Fiz esse treinamento para ser o guia que eu gostaria de ter tido lá atrás: prático, ético e direto ao ponto.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-2 text-slate-900 font-bold">
              <Award className="w-6 h-6 text-amber-500" />
              <span>Estou pronto para guiar sua jornada.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;