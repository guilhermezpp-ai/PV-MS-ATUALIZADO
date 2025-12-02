import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Guarantee: React.FC = () => {
  return (
    <section className="py-16 bg-white px-4 border-b border-slate-100">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white border-4 border-slate-100 rounded-3xl p-8 md:p-12 shadow-xl flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <ShieldCheck className="w-32 h-32 text-green-500" />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Garantia Incondicional de 30 Dias
            </h3>
            <p className="text-slate-600 mb-4">
              Se em 30 dias você não se sentir mais confiante, não ganhar clareza ou não melhorar suas conversas com clientes, <strong>eu devolvo 100% do seu dinheiro.</strong>
            </p>
            <p className="text-sm text-slate-500">
              Risco zero para você. Basta um único e-mail ou mensagem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;