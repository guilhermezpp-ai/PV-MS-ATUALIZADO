import React from 'react';
import { AlertTriangle, RotateCcw } from 'lucide-react';

const TheVillain: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-red-600/20 text-red-300 px-4 py-2 rounded-full font-bold mb-6">
          <AlertTriangle className="w-5 h-5" />
          O VERDADEIRO VILÃO
        </div>
        
        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          O Ciclo do Iniciante Perdido
        </h2>

        <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            <RotateCcw className="w-24 h-24 text-slate-500 animate-spin-slow" style={{ animationDuration: '10s' }} />
            <div className="text-left space-y-4 text-lg text-slate-300">
              <p>🔴 Você tem técnica, mas não tem clareza para explicar seu valor.</p>
              <p>🔴 Fica inseguro para falar com o cliente e evita oportunidades.</p>
              <p>🔴 Depende de indicação e sente que está andando em círculos.</p>
            </div>
          </div>
          
          <div className="bg-red-900/30 p-6 rounded-lg border border-red-500/30">
            <p className="text-xl md:text-2xl font-semibold text-red-200">
              Ninguém nunca te ensinou o passo a passo de como vender. <br />
              <span className="text-white font-normal text-lg mt-2 block">
                Você aprendeu técnica, mas nunca aprendeu negociação, persuasão ou como conduzir uma conversa que leva ao “sim”.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheVillain;