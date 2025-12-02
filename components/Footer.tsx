import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-8 px-4 text-center text-sm border-t border-slate-800">
      <div className="container mx-auto">
        <p className="mb-2">Manual de Sobrevivência &copy; {new Date().getFullYear()}</p>
        <p>Todos os direitos reservados.</p>
        <div className="mt-4 flex justify-center gap-4 text-xs">
          <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-white transition-colors">Políticas de Privacidade</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;