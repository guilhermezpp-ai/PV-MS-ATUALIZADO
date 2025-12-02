import React from 'react';
import Button from './Button';
import { Check, Gift } from 'lucide-react';

const Offer: React.FC = () => {
  return (
    <section id="offer" className="py-20 bg-gradient-to-b from-slate-50 to-white px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden transform hover:scale-[1.01] transition-transform duration-300">
          <div className="bg-slate-900 p-6 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold">Oferta Irresistível</h2>
            <p className="text-slate-300 mt-2">Comece a vender ainda hoje</p>
          </div>
          
          <div className="p-8 md:p-12">
            <div className="flex flex-col items-center mb-8 bg-slate-50 p-6 rounded-xl border border-slate-100">
              <span className="text-slate-400 font-medium text-lg mb-1">Valor Total: <span className="line-through text-red-400">R$ 1.044,00</span></span>
              <div className="text-5xl md:text-6xl font-extrabold text-green-600 my-2 tracking-tight">
                <span className="text-xl md:text-2xl font-medium text-slate-500 mr-2 align-middle">por apenas</span>
                R$ 97
              </div>
              <span className="text-slate-500 font-medium bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm mt-2">ou 12x de R$ 9,70</span>
            </div>

            <div className="space-y-4 mb-10 max-w-lg mx-auto">
              <div className="flex items-start gap-3">
                <div className="bg-green-100 p-1 rounded-full mt-0.5"><Check className="w-4 h-4 text-green-600" /></div>
                <span className="text-slate-700 font-medium">Acesso completo ao Manual de Sobrevivência</span>
              </div>
              
              <div className="flex items-start gap-3 bg-amber-50 p-3 rounded-lg border border-amber-100">
                <div className="bg-amber-100 p-1 rounded-full mt-0.5"><Gift className="w-4 h-4 text-amber-600" /></div>
                <div className="flex flex-col">
                  <span className="text-slate-800 font-bold">Bônus #1: Mapeamento DISC</span>
                  <span className="text-xs text-slate-500">(Vendido por R$ 250)</span>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-amber-50 p-3 rounded-lg border border-amber-100">
                <div className="bg-amber-100 p-1 rounded-full mt-0.5"><Gift className="w-4 h-4 text-amber-600" /></div>
                <div className="flex flex-col">
                  <span className="text-slate-800 font-bold">Bônus #2: Sessão de Orientação (Coaching)</span>
                  <span className="text-xs text-slate-500">(Vendido por R$ 497)</span>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2">
                <div className="bg-green-100 p-1 rounded-full mt-0.5"><Check className="w-4 h-4 text-green-600" /></div>
                <span className="text-slate-700 font-bold text-slate-900">Garantia de 30 dias Blindada</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-green-100 p-1 rounded-full mt-0.5"><Check className="w-4 h-4 text-green-600" /></div>
                <span className="text-slate-700">Acesso Vitalício ao Conteúdo</span>
              </div>
            </div>

            <Button fullWidth className="animate-pulse hover:animate-none shadow-xl shadow-green-200">
              QUERO CONQUISTAR CLIENTES AGORA
            </Button>
            
            <p className="text-center text-xs text-slate-400 mt-6 flex items-center justify-center gap-1">
              🔒 Pagamento 100% seguro. Acesso imediato no e-mail.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;