import React from 'react';
import { Star, User, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "@economiafamiliar1008",
    text: "Gostei muito das técnicas e exercícios, incrível. Parabéns Guilherme!",
    color: "bg-orange-500"
  },
  {
    name: "@SoldadoForever",
    text: "Deu um show Guilherme 👏🏼👏🏼👏🏼 muito aprendizado!",
    color: "bg-blue-500"
  },
  {
    name: "@EmpreendedorFocado",
    text: "Que orientações fantásticas meu amigo Guilherme, já anotei tudo aqui e é só colocar em prática agora. Agradeço muito pelo aprendizado!",
    color: "bg-purple-500"
  },
  {
    name: "@simeia7292",
    text: "Aprendi muito com este treinamento. Parabéns!",
    color: "bg-green-500"
  },
  {
    name: "@izael6315",
    text: "Treinamento incrível irmão 🙏 parabéns e gratidão.",
    color: "bg-teal-500"
  },
  {
    name: "@vanessamonteiro1905",
    text: "Nossa cara, vou fazer isso! Muito obrigada.",
    color: "bg-pink-500"
  },
  {
    name: "@edsonlima3613",
    text: "Parabéns Guilherme, belíssimo posicionamento!",
    color: "bg-indigo-500"
  },
  {
    name: "@rosilenesouto4511",
    text: "Parabéns Guilherme!!! Você é muito top.",
    color: "bg-red-500"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            O que estão dizendo sobre o método?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Não acredite apenas na minha palavra. Veja o resultado de quem já assistiu e aplicou o conteúdo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, index) => (
            <div 
              key={index} 
              className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-slate-200 rotate-180" />
              
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-sm`}>
                  {t.name.charAt(1).toUpperCase()}
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 truncate max-w-[120px]">{t.name}</p>
                  <div className="flex text-amber-400">
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                  </div>
                </div>
              </div>
              
              <p className="text-slate-700 text-sm leading-relaxed italic">
                "{t.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;