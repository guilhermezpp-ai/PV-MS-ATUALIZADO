import React from 'react';
import { motion } from 'framer-motion';
import { UserX, MessageSquareWarning, SearchX, HelpCircle, Frown } from 'lucide-react';

const PainPoints: React.FC = () => {
  const pains = [
    {
      icon: <MessageSquareWarning className="w-8 h-8 text-red-500" />,
      text: "Fica nervoso quando precisa falar do seu serviço."
    },
    {
      icon: <UserX className="w-8 h-8 text-red-500" />,
      text: "Tem medo de parecer insistente e ser rejeitado."
    },
    {
      icon: <Frown className="w-8 h-8 text-red-500" />,
      text: "Sabe entregar resultado, mas não sabe se vender."
    },
    {
      icon: <SearchX className="w-8 h-8 text-red-500" />,
      text: "Depende de indicação e nunca sabe quando será o próximo cliente."
    },
    {
      icon: <HelpCircle className="w-8 h-8 text-red-500" />,
      text: "Recebe “depois eu te aviso” e não sabe como responder."
    }
  ];

  return (
    <section className="py-20 bg-slate-50 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Você é excelente no que faz, mas seus resultados não refletem isso?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Você domina a técnica. Mas na hora de falar do seu serviço… trava.
            <br className="hidden md:block"/> Na hora de oferecer… bate medo.
            Isso não é falta de talento. <strong>É falta de método.</strong>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pains.map((pain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-400 hover:shadow-lg transition-shadow"
            >
              <div className="mb-4 bg-red-50 w-14 h-14 rounded-full flex items-center justify-center">
                {pain.icon}
              </div>
              <p className="text-lg text-slate-700 font-medium">
                {pain.text}
              </p>
            </motion.div>
          ))}
          
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.5 }}
             className="bg-slate-900 p-6 rounded-xl shadow-md flex items-center justify-center text-center"
          >
             <p className="text-white text-xl font-bold italic">
               Vê outras pessoas fechando clientes e pensa: “será que eu nasci pra isso?”
             </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;