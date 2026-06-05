import React from 'react';

const Contact = () => {
  // Link do WhatsApp com mensagem pré-preenchida para contato geral
  const whatsappLink = "https://wa.me/5541988987233?text=Oi%2C%20vim%20pelo%20Google%21%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Trevisan%20Officina.";

  return (
    <section className="relative w-full py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-zinc-950">
      <div className="max-w-4xl mx-auto text-center">
        {/* Chamada para ação irresistível focada nas dores do cliente */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-yellow-400">
            Cansado de diagnósticos incertos
          </span>
          <br className="hidden sm:block" /> e serviços que não resolvem?
          <br className="hidden sm:block" /> Seu carro merece a expertise de quem ensina mecânica no Brasil.
        </h2>

        {/* Bloco de informações de contato com efeito Glassmorphism */}
        <div className="bg-white/[0.02] border border-white/10 backdrop-blur-md rounded-2xl p-8 sm:p-10 lg:p-12 mb-12 shadow-lg hover:border-yellow-500/20 transition-all duration-300">
          <p className="text-lg sm:text-xl text-slate-300 mb-6 max-w-2xl mx-auto">
            Agende uma avaliação e descubra o padrão de excelência Trevisan Officina.
          </p>

          {/* Detalhes de contato: Endereço, WhatsApp e Horário de Funcionamento */}
          <div className="space-y-4 text-left sm:text-center text-slate-400 text-base sm:text-lg">
            <p className="flex items-center justify-center sm:justify-start lg:justify-center">
              <svg className="w-6 h-6 mr-3 text-yellow-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              R. Caetano Marchesini, 298 - Portão, Curitiba - PR, CEP 81070-110
            </p>
            <p className="flex items-center justify-center sm:justify-start lg:justify-center">
              <svg className="w-6 h-6 mr-3 text-yellow-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 3.528 1.897 6.643 4.711 8.441L3 24l5.36-1.42C9.5 22.88 10.738 23 12 23c6.627 0 12-5.373 12-12S18.627 0 12 0zm5.495 16.353c-.27-.134-1.586-.782-1.832-.871-.246-.09-.424-.134-.602.134-.179.27-.69.871-.845 1.05-.156.179-.311.201-.577.067-.266-.134-1.123-.414-2.135-1.314-.79-.706-1.322-1.579-1.478-1.849-.156-.27-.017-.251.117-.385.122-.122.27-.311.404-.467.134-.156.179-.27.268-.45.09-.179.045-.335-.022-.467-.067-.134-.602-1.954-.82-2.66-.219-.706-.441-.59-.602-.59-.161 0-.34-.022-.519-.022-.179 0-.467.067-.713.335-.246.268-.94 1.026-.94 2.493 0 1.467 1.002 2.894 1.14 3.083.138.189 1.96 3.107 4.75 4.316 2.79 1.21 2.79.807 3.321.758.53-.049 1.586-.649 1.804-1.282.218-.633.218-1.173.151-1.282-.067-.11-.246-.156-.519-.29z"/>
              </svg>
              <strong className="text-white">(41) 98898-7233</strong>
            </p>
            <p className="flex items-center justify-center sm:justify-start lg:justify-center">
              <svg className="w-6 h-6 mr-3 text-yellow-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm-1 5h2v6h-2zm0-3h2v2h-2z"/>
              </svg>
              Segunda a Sexta: <strong className="text-white ml-2">8:00 às 18:00</strong>
            </p>
          </div>
        </div>

        {/* Botão final de CTA para WhatsApp, ultra-visível */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-10 py-5 bg-yellow-400 text-zinc-950 font-bold text-xl rounded-full shadow-xl hover:-translate-y-1 hover:scale-[1.01] hover:shadow-yellow-500/20 active:scale-[0.98] transition-all duration-300 transform-gpu"
        >
          Falar com um Especialista via WhatsApp
          <svg className="w-7 h-7 ml-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.373 0 12c0 3.528 1.897 6.643 4.711 8.441L3 24l5.36-1.42C9.5 22.88 10.738 23 12 23c6.627 0 12-5.373 12-12S18.627 0 12 0zm5.495 16.353c-.27-.134-1.586-.782-1.832-.871-.246-.09-.424-.134-.602.134-.179.27-.69.871-.845 1.05-.156.179-.311.201-.577.067-.266-.134-1.123-.414-2.135-1.314-.79-.706-1.322-1.579-1.478-1.849-.156-.27-.017-.251.117-.385.122-.122.27-.311.404-.467.134-.156.179-.27.268-.45.09-.179.045-.335-.022-.467-.067-.134-.602-1.954-.82-2.66-.219-.706-.441-.59-.602-.59-.161 0-.34-.022-.519-.022-.179 0-.467.067-.713.335-.246.268-.94 1.026-.94 2.493 0 1.467 1.002 2.894 1.14 3.083.138.189 1.96 3.107 4.75 4.316 2.79 1.21 2.79.807 3.321.758.53-.049 1.586-.649 1.804-1.282.218-.633.218-1.173.151-1.282-.067-.11-.246-.156-.519-.29z"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Contact;
