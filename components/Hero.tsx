import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { ShieldCheck, Zap, CheckCircle2, MessageCircle, PlayCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-slate-900 to-slate-800 text-white pt-12 pb-20 md:pt-24 md:pb-32 px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-72 h-72 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-5xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-900/50 border border-blue-500/30 text-blue-200 text-sm font-semibold tracking-wider mb-6">
            MANUAL DE SOBREVIVÊNCIA
          </span>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Aprenda a conquistar seus <span className="text-green-400">primeiros clientes</span> mesmo sendo tímido, inseguro ou iniciante.
          </h1>

          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Um método irresistível que transforma qualquer iniciante em alguém capaz de conversar com segurança, despertar interesse e fechar seus primeiros clientes.
          </p>

          {/* Chamada para a Aula Gratuita (Simple List Style) */}
          <div className="bg-slate-900/80 border border-slate-700/50 rounded-2xl p-6 md:p-8 max-w-3xl mx-auto mb-10 shadow-2xl backdrop-blur-md text-left">
            <div className="flex items-center gap-3 mb-6 border-b border-slate-700/50 pb-4">
              <div className="bg-amber-500/10 p-2 rounded-full">
                <PlayCircle className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="text-amber-400 font-bold uppercase tracking-wider text-sm md:text-base">
                Assista a essa aula gratuita para aprender:
              </h3>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-200 text-lg">
                  Como encontrar seus <strong className="text-white">primeiros clientes</strong> de verdade.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-200 text-lg">
                  Descobrir exatamente <strong className="text-white">onde você está travado</strong> no processo de vendas.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-200 text-lg">
                  Ter <strong className="text-white">clareza total</strong> do passo a passo de uma venda.
                </span>
              </li>
            </ul>
            
            <div className="mt-6 text-center md:hidden">
               <span className="text-xs text-slate-500 uppercase tracking-widest">Dê o play abaixo ↓</span>
            </div>
          </div>

          {/* VSL (Video Sales Letter) Container */}
          <div className="relative w-full max-w-4xl mx-auto aspect-video bg-slate-950 rounded-xl shadow-2xl overflow-hidden border-4 border-slate-700/50 mb-10 group">
             {/* Glow effect behind video */}
             <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-green-600 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <iframe 
              className="relative inset-0 w-full h-full z-10"
              src="https://www.youtube.com/embed/HdDJFRbNbX4?rel=0&modestbranding=1" 
              title="Manual de Sobrevivência - Vídeo de Vendas"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>

          <div className="flex flex-col items-center gap-8">
            <Button variant="secondary" className="w-full md:w-auto min-w-[320px] shadow-[0_0_20px_rgba(245,158,11,0.4)]">
              Quero Destravar Minhas Vendas
            </Button>
            
            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-xs md:text-sm font-medium text-slate-300">
              <div className="flex items-center justify-center gap-2">
                <ShieldCheck className="w-5 h-5 text-green-400" />
                <span>Garantia de 30 Dias</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Zap className="w-5 h-5 text-amber-400" />
                <span>Acesso Imediato</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-400" />
                <span>Método Validado</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5 text-green-400" />
                <span>Suporte via WhatsApp</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;