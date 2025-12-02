import React from 'react';
import { Users, UserPlus, Briefcase } from 'lucide-react';
import Button from './Button';

const TargetAudience: React.FC = () => {
  return (
    <section className="py-20 bg-blue-900 text-white px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-800 rounded-full mb-6 border border-blue-600 shadow-inner">
            <Users className="w-8 h-8 text-blue-300" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Para quem é o Manual de Sobrevivência?</h2>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Este método não foi feito para "tubarões de vendas". Ele foi desenhado especificamente para dois perfis de pessoas:
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Perfil 1: Vendedor Iniciante */}
          <div className="bg-blue-800/50 border border-blue-700 p-8 rounded-2xl hover:bg-blue-800 transition-colors duration-300 flex flex-col items-center text-center group">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
              <UserPlus className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">O Vendedor Iniciante</h3>
            <p className="text-blue-100 leading-relaxed mb-6">
              Você está começando agora e sente aquele frio na barriga só de pensar em abordar alguém. Tem medo da rejeição, não sabe o que falar e sente que está "incomodando" as pessoas.
            </p>
            <ul className="text-sm text-blue-200 space-y-2 text-left w-full bg-blue-900/30 p-4 rounded-lg">
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>Precisa de roteiros prontos</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>Quer perder o medo de falar</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>Busca seus primeiros 'sim'</li>
            </ul>
          </div>

          {/* Perfil 2: Profissional Técnico */}
          <div className="bg-blue-800/50 border border-blue-700 p-8 rounded-2xl hover:bg-blue-800 transition-colors duration-300 flex flex-col items-center text-center group">
            <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
              <Briefcase className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">O Especialista Técnico</h3>
            <p className="text-blue-100 leading-relaxed mb-6">
              Você é <strong>muito bom no que faz</strong> (entrega um serviço incrível), mas trava na hora de vender. Acha que vender é "chato" ou "agressivo" e acaba dependendo da sorte ou de indicações.
            </p>
            <ul className="text-sm text-blue-200 space-y-2 text-left w-full bg-blue-900/30 p-4 rounded-lg">
              <li className="flex items-center"><span className="w-2 h-2 bg-amber-400 rounded-full mr-2"></span>Quer vender sem parecer vendedor</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-amber-400 rounded-full mr-2"></span>Quer cobrar o valor justo</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-amber-400 rounded-full mr-2"></span>Precisa ter previsibilidade</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl font-medium text-white bg-blue-950/50 inline-block px-8 py-4 rounded-lg border border-blue-500/30 mb-8">
            Se você se encaixa em um desses dois grupos, <br className="hidden md:block"/>o <span className="text-green-400 font-bold">Manual de Sobrevivência</span> é o seu mapa.
          </p>
          <div>
            <Button variant="secondary" className="shadow-lg shadow-amber-500/20">
                Sim, Eu Preciso Desse Manual
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;