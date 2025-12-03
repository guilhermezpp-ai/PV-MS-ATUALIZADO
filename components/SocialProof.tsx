import React from 'react';
import { motion } from 'framer-motion';
import { Newspaper, AlertCircle, ExternalLink } from 'lucide-react';

const news = [
  {
    source: "Gazeta do Mercado",
    date: "Há 2 dias",
    headline: "80% dos autônomos desistem no primeiro ano por falta de clientes, aponta estudo.",
    category: "Mercado"
  },
  {
    source: "Jornal Negócios em Foco",
    date: "Semana passada",
    headline: "O fim da era do 'boca a boca': profissionais que não usam técnicas de vendas ativas estão perdendo 60% da receita.",
    category: "Negócios"
  },
  {
    source: "Revista Avanço Profissional",
    date: "Ontem",
    headline: "Habilidade de vendas supera competência técnica como o fator nº 1 para o sucesso de profissionais em 2025.",
    category: "Tendência"
  }
];

const SocialProof: React.FC = () => {
  return (
    <section className="py-20 bg-slate-100 border-y border-slate-200">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-slate-500 font-bold uppercase tracking-widest text-xs mb-3">
            <Newspaper className="w-4 h-4" />
            O Mercado não mente
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 max-w-2xl mx-auto">
            Não é só sobre ter técnica. <br/>
            <span className="text-red-600">É sobre sobrevivência no mercado.</span>
          </h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            A realidade é dura, mas precisa ser dita: no mercado de hoje, competência técnica sem vendas não paga as contas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {news.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-all"
            >
              <div className="flex justify-between items-center mb-4 border-b border-slate-100 pb-2">
                <span className="text-xs font-bold text-slate-400 uppercase">{item.source}</span>
                <span className="text-xs text-slate-400">{item.date}</span>
              </div>
              <h3 className="font-serif text-lg md:text-xl font-bold text-slate-800 leading-tight mb-4">
                “{item.headline}”
              </h3>
              <div className="flex items-center gap-2 mt-auto pt-2">
                <span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-1 rounded uppercase">
                  {item.category}
                </span>
                <div className="w-full h-px bg-slate-100"></div>
                <ExternalLink className="w-4 h-4 text-slate-300" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 bg-slate-200/50 rounded-lg p-4 flex items-start gap-3 max-w-3xl mx-auto">
          <AlertCircle className="w-6 h-6 text-slate-600 flex-shrink-0 mt-1" />
          <p className="text-sm md:text-base text-slate-700 italic">
            <strong>Fato:</strong> O mercado está cheio de profissionais medianos ganhando muito dinheiro porque sabem vender, enquanto especialistas incríveis (como você) lutam para pagar as contas. O <strong>Manual de Sobrevivência</strong> veio para equilibrar esse jogo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;