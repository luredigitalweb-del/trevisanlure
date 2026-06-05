import React from 'react';

const Hero = () => {
  // Link do WhatsApp com mensagem pré-preenchida para agendamento de diagnóstico
  const whatsappLink = "https://wa.me/5541988987233?text=Oi%2C%20vim%20pelo%20Google%21%20Gostaria%20de%20agendar%20um%20diagn%C3%B3stico%20VIP%20na%20Trevisan%20Officina.";

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 pt-24 pb-16 bg-zinc-950">
      {/* Cabeçalho/Navbar fixo no topo */}
      <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white/[0.02] border-b border-white/10 backdrop-blur-md py-4 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
          {/* Logo da Trevisan Officina */}
          <a href="/" className="flex items-center">
            <img src="logo.png" alt="Trevisan Officina Logo" className="h-12 md:h-14" />
          </a>
          {/* Botão de Contato Rápido para WhatsApp no cabeçalho */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-2 border border-yellow-400 text-sm font-medium rounded-full text-yellow-400 bg-transparent hover:bg-yellow-400 hover:text-zinc-950 transition-all duration-300 shadow-lg hover:shadow-yellow-500/20"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12c0 3.528 1.897 6.643 4.711 8.441L3 24l5.36-1.42C9.5 22.88 10.738 23 12 23c6.627 0 12-5.373 12-12S18.627 0 12 0zm5.495 16.353c-.27-.134-1.586-.782-1.832-.871-.246-.09-.424-.134-.602.134-.179.27-.69.871-.845 1.05-.156.179-.311.201-.577.067-.266-.134-1.123-.414-2.135-1.314-.79-.706-1.322-1.579-1.478-1.849-.156-.27-.017-.251.117-.385.122-.122.27-.311.404-.467.134-.156.179-.27.268-.45.09-.179.045-.335-.022-.467-.067-.134-.602-1.954-.82-2.66-.219-.706-.441-.59-.602-.59-.161 0-.34-.022-.519-.022-.179 0-.467.067-.713.335-.246.268-.94 1.026-.94 2.493 0 1.467 1.002 2.894 1.14 3.083.138.189 1.96 3.107 4.75 4.316 2.79 1.21 2.79.807 3.321.758.53-.049 1.586-.649 1.804-1.282.218-.633.218-1.173.151-1.282-.067-.11-.246-.156-.519-.29z"/>
            </svg>
            WhatsApp
          </a>
        </div>
      </header>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Tag/Badge superior brilhante */}
        <span className="inline-block bg-white/[0.04] border border-white/10 text-yellow-400 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full mb-6 backdrop-blur-md shadow-md">
          ★ OFICINA PREMIUM EM CURITIBA
        </span>

        {/* Título Principal (H1) com gradiente e foco na autoridade */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-yellow-400">
            Alessandro Trevisan:
          </span>
          <br className="hidden sm:block" /> O Especialista que Viaja o Brasil Ensinando Mecânica, Agora em Curitiba.
        </h1>

        {/* Subtítulo curto explicando o diferencial */}
        <p className="text-lg sm:text-xl text-slate-400 mb-10 max-w-3xl mx-auto">
          Com mais de 30 anos de know-how, a Trevisan Officina traz a você a expertise do professor dos mecânicos do país,
          especializado em Grupo Stellantis e veículos Premium.
        </p>

        {/* Botão Call to Action Principal em Amarelo/Ouro vibrante */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 bg-yellow-400 text-zinc-950 font-bold text-lg rounded-full shadow-xl hover:-translate-y-1 hover:scale-[1.01] hover:shadow-yellow-500/20 active:scale-[0.98] transition-all duration-300 transform-gpu"
        >
          Agendar Diagnóstico VIP via WhatsApp
          <svg className="w-6 h-6 ml-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.373 0 12c0 3.528 1.897 6.643 4.711 8.441L3 24l5.36-1.42C9.5 22.88 10.738 23 12 23c6.627 0 12-5.373 12-12S18.627 0 12 0zm5.495 16.353c-.27-.134-1.586-.782-1.832-.871-.246-.09-.424-.134-.602.134-.179.27-.69.871-.845 1.05-.156.179-.311.201-.577.067-.266-.134-1.123-.414-2.135-1.314-.79-.706-1.322-1.579-1.478-1.849-.156-.27-.017-.251.117-.385.122-.122.27-.311.404-.467.134-.156.179-.27.268-.45.09-.179.045-.335-.022-.467-.067-.134-.602-1.954-.82-2.66-.219-.706-.441-.59-.602-.59-.161 0-.34-.022-.519-.022-.179 0-.467.067-.713.335-.246.268-.94 1.026-.94 2.493 0 1.467 1.002 2.894 1.14 3.083.138.189 1.96 3.107 4.75 4.316 2.79 1.21 2.79.807 3.321.758.53-.049 1.586-.649 1.804-1.282.218-.633.218-1.173.151-1.282-.067-.11-.246-.156-.519-.29z"/>
          </svg>
        </a>

        {/* Imagem de Destaque da Fachada com estilo luxuoso */}
        <div className="mt-16 relative w-full flex justify-center">
          <img
            src="fachada.png"
            alt="Fachada moderna da Trevisan Officina à noite"
            className="w-full max-w-5xl h-auto rounded-2xl object-cover shadow-[0_0_50px_rgba(250,204,21,0.1)] border border-white/10 transform-gpu transition-all duration-500 hover:scale-[1.005]"
          />
          {/* Overlay para suavizar a transição com o fundo escuro */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent rounded-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
