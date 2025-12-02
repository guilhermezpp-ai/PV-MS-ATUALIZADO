import React from 'react';
import { Gift } from 'lucide-react';
import Button from './Button';

const Bonuses: React.FC = () => {
  const bonuses = [
    {
      id: 1,
      label: "PRESENTE #1",
      title: "Mapeamento Comportamental (DISC)",
      desc: "Descubra como seu perfil influencia sua forma de vender e atender.",
      value: "R$ 250,00"
    },
    {
      id: 2,
      label: "PRESENTE #2",
      title: "Sessão de Orientação Estratégica",
      desc: "Uma sessão AO VIVO e INDIVIDUAL (que é uma sessão de coaching) para destravar suas vendas.",
      value: "R$ 497,00"
    }
  ];

  return (
    <section className="py-20 bg-slate-900 text-white px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500 rounded-full mb-6 text-slate-900 shadow-lg shadow-amber-500/20">
            <Gift className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Bônus para Acelerar seus Resultados
          </h2>
          <p className="text-blue-200 text-lg">
            Ferramentas que todo Profissional de sucesso usa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {bonuses.map((bonus) => (
            <div key={bonus.id} className="bg-slate-800/40 p-8 rounded-2xl border border-slate-700 hover:border-amber-500/30 transition-all duration-300 flex flex-col group h-full hover:bg-slate-800/60">
               <span className="text-amber-500 font-bold tracking-widest text-xs uppercase mb-4 block">
                 {bonus.label}
               </span>

               <h3 className="text-2xl font-bold text-white mb-4 leading-tight min-h-[64px] flex items-center">
                 {bonus.title}
               </h3>

               <p className="text-slate-300 mb-8 flex-grow leading-relaxed text-lg">
                 {bonus.desc}
               </p>

               <div className="mt-auto pt-6 border-t border-slate-700/50">
                  <div className="bg-slate-900/60 inline-block px-4 py-2 rounded-lg border border-slate-700/50 text-sm text-slate-400">
                    Vendido separadamente por <span className="line-through decoration-red-500 decoration-2 text-slate-500 ml-1">{bonus.value}</span>
                  </div>
               </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
             <Button variant="secondary" className="shadow-lg shadow-amber-500/20">
                 Quero Garantir Meus Presentes
             </Button>
        </div>
      </div>
    </section>
  );
};

export default Bonuses;