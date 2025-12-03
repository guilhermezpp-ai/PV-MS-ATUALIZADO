import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppCTA: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 text-center">
        <div className="inline-flex items-center justify-center p-4 bg-green-100 rounded-full mb-6">
            <MessageCircle className="w-8 h-8 text-green-600" />
        </div>
        
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Ainda está com dúvidas?
        </h2>
        
        <p className="text-slate-600 mb-8 max-w-xl mx-auto text-lg">
            Não tome sua decisão se não tiver 100% de certeza. Clique no botão abaixo e converse diretamente com meu time de suporte no WhatsApp.
        </p>
        
        <a
            href="https://wa.me/5541997477760?text=Oi%2C+tenho+dúvidas+sobre+o+Manual+de+Sobrevivência"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg hover:shadow-green-500/30 hover:-translate-y-1"
        >
            <MessageCircle className="w-6 h-6" />
            <span className="text-lg">Me chame no WhatsApp</span>
        </a>
      </div>
    </section>
  );
};

export default WhatsAppCTA;