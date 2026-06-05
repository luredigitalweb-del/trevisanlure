import React from 'react';
import Hero from './Hero';
import Features from './Features';
import Contact from './Contact';

function Page() {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-slate-300 font-['Plus_Jakarta_Sans'] overflow-hidden">
      {/* Adicione a importação da fonte 'Plus Jakarta Sans' no seu arquivo CSS global (ex: index.css) ou no <head> do seu index.html. */}
      {/* Exemplo no index.css: @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&display=swap'); */}

      {/* Pontos de Brilho (Neon Glows) - Elementos decorativos no fundo */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 -z-10 bg-gradient-to-r from-yellow-500/10 to-transparent blur-3xl w-[400px] h-[400px] rounded-full pointer-events-none opacity-50"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 -z-10 bg-gradient-to-l from-slate-500/10 to-transparent blur-3xl w-[350px] h-[350px] rounded-full pointer-events-none opacity-50"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 bg-gradient-to-t from-yellow-500/5 to-transparent blur-3xl w-[500px] h-[500px] rounded-full pointer-events-none opacity-30"></div>

      {/* Conteúdo principal da Landing Page */}
      <main>
        <Hero />
        <Features />
        <Contact />
      </main>

      {/* Rodapé do site */}
      <footer className="w-full py-8 text-center text-sm text-slate-500 border-t border-white/10 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center space-y-4 md:flex-row md:justify-between">
          <img src="logo.png" alt="Trevisan Officina Logo" className="h-10 opacity-70" />
          <p>&copy; {new Date().getFullYear()} Trevisan Officina. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/trevisan_officina" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors duration-300">Instagram</a>
            <a href="https://wa.me/5541988987233?text=Oi%2C%20vim%20pelo%20Google%21%20Gostaria%20de%20falar%20com%20a%20Trevisan%20Officina." target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors duration-300">WhatsApp</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Page;
