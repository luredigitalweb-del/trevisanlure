import React from 'react';

const FeatureCard = ({ icon, title, description, tag }) => (
  <div className="bg-white/[0.02] border border-white/10 backdrop-blur-md hover:border-yellow-500/20 hover:bg-white/[0.04] transition-all duration-300 rounded-2xl p-6 sm:p-8 flex flex-col items-start text-left hover:-translate-y-1 hover:scale-[1.01] hover:shadow-lg hover:shadow-yellow-500/5 active:scale-[0.98] transform-gpu">
    <div className="mb-4 text-yellow-400">{icon}</div>
    <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">
      {title}
    </h3>
    <p className="text-slate-400 text-base sm:text-lg mb-4 flex-grow">
      {description}
    </p>
    <span className="inline-block bg-yellow-400/10 text-yellow-300 text-xs font-medium px-3 py-1 rounded-full border border-yellow-400/20">
      {tag}
    </span>
  </div>
);

const Features = () => {
  // Definição dos ícones SVG inline para cada serviço
  const icons = {
    oilChange: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 15.5L14 12V6M11 15.5H7.5A2.5 2.5 0 015 13V9a2.5 2.5 0 012.5-2.5h4a2.5 2.5 0 012.5 2.5V13a2.5 2.5 0 01-2.5 2.5H11zM17.5 10.5V13a2.5 2.5 0 01-2.5 2.5H11m0 0l-3.5 3.5m3.5-3.5l3.5 3.5M12 22v-2"></path>
      </svg>
    ),
    preventive: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    stellantis: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5 5 0 0010 0l-3-9m-3 0V6a3 3 0 013-3h10a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V6a3 3 0 013-3h4a3 3 0 013 3v1m-3 0h-3m-3 0H7m9 0h3m-3 0V9m0 0V6m0 0H7m0 0V9"></path>
      </svg>
    ),
    electronics: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    generalMechanics: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.974 2.888a1 1 0 00-.324 1.118l1.519 4.674c.3.921-.755 1.688-1.539 1.118l-3.974-2.888a1 1 0 00-1.176 0l-3.974 2.888c-.784.57-1.838-.197-1.539-1.118l1.519-4.674a1 1 0 00-.324-1.118L2.285 9.101c-.783-.57-.381-1.81.588-1.81h4.915a1 1 0 00.95-.69l1.519-4.674z" />
      </svg>
    ),
  };

  // Dados dos serviços a serem exibidos nos cards
  const services = [
    {
      icon: icons.oilChange,
      title: "Troca de Óleo da Transmissão Automática",
      description: "Utilizamos maquinário de ponta para uma troca completa e precisa, garantindo a longevidade e o desempenho suave do seu câmbio automático.",
      tag: "Tecnologia de Ponta",
    },
    {
      icon: icons.preventive,
      title: "Manutenção Preventiva Completa",
      description: "Nossos checklists minuciosos e diagnósticos precisos evitam problemas futuros, economizando seu tempo e dinheiro com manutenções corretivas.",
      tag: "Diagnóstico Detalhado",
    },
    {
      icon: icons.stellantis,
      title: "Especialista Grupo Stellantis & Premium",
      description: "Conhecimento aprofundado em Jeep, Fiat, Peugeot, Citroën e veículos premium. Seu carro nas mãos de quem realmente entende da marca.",
      tag: "Padrão Concessionária",
    },
    {
      icon: icons.electronics,
      title: "Injeção Eletrônica e Eletrônica Embarcada",
      description: "Diagnóstico e reparo de sistemas complexos com scanners de última geração, resolvendo falhas que outras oficinas não conseguem identificar.",
      tag: "Expertise Avançada",
    },
    {
      icon: icons.generalMechanics,
      title: "Mecânica Geral de Alto Nível",
      description: "Motores, correia dentada, suspensão, freios e sistemas complexos. Serviço completo com a precisão e a qualidade que seu veículo merece.",
      tag: "Qualidade Garantida",
    },
  ];

  return (
    <section className="relative w-full py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-zinc-950">
      <div className="max-w-7xl mx-auto text-center">
        {/* Título da seção centralizado com gradiente */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-yellow-400">
            Nossas Especialidades:
          </span>
          <br className="hidden sm:block" /> Precisão e Confiança em Cada Serviço.
        </h2>

        {/* Grid moderno de cards de serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FeatureCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              tag={service.tag}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
