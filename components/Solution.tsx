import React from 'react';
import { ShieldCheck, Sparkles } from 'lucide-react';
import Button from './Button';

const Solution: React.FC = () => {
  return (
    <section className="py-20 bg-white px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            {/* Visual representation of the 'book' or 'manual' */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-800 rounded-xl shadow-2xl p-8 text-white aspect-[3/4] flex flex-col justify-between transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500 max-w-sm mx-auto">
               <div className="border-2 border-white/20 h-full p-4 rounded-lg flex flex-col items-center justify-center text-center">
                  <ShieldCheck className="w-16 h-16 text-amber-400 mb-6" />
                  <h3 className="text-3xl font-bold uppercase tracking-widest mb-2">Manual</h3>
                  <p className="text-xl font-light tracking-widest uppercase mb-8">de Sobrevivência</p>
                  <div className="w-full h-1 bg-white/30 rounded-full mb-8"></div>
                  <p className="text-sm text-blue-100">Para profissionais que querem vender sem vender a alma.</p>
               </div>
            </div>
            <div className="absolute -z-10 top-4 right-4 md:right-12 w-full max-w-sm h-full bg-slate-200 rounded-xl"></div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 text-blue-600 font-bold mb-4 uppercase tracking-wide text-sm">
              <Sparkles className="w-4 h-4" />
              A Solução Definitiva
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              O Manual de Sobrevivência
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              O primeiro treinamento criado exclusivamente para iniciantes que têm técnica, mas não sabem vender.
            </p>
            <div className="space-y-4 mb-8">
              <p className="flex items-start text-slate-700">
                <span className="mr-3 text-green-500 font-bold text-xl">✓</span>
                Você não precisa ser extrovertido.
              </p>
              <p className="flex items-start text-slate-700">
                <span className="mr-3 text-green-500 font-bold text-xl">✓</span>
                Você não precisa ser insistente.
              </p>
              <p className="flex items-start text-slate-700">
                <span className="mr-3 text-green-500 font-bold text-xl">✓</span>
                E muito menos virar “vendedor” chato.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600 mb-8">
              <p className="font-bold text-blue-900 text-lg">
                Tudo o que você precisa é de: <br/>
                <span className="text-blue-600">Clareza + Método.</span>
              </p>
            </div>

            <Button>Conhecer o Método</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;