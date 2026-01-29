
import React from 'react';

const MarketingPerformance: React.FC = () => {
  const metrics = [
    { label: "Visualizações", value: "1.5M+", sub: "Ads Impressions", color: "text-pistachio" },
    { label: "Investimento", value: "R$50k+", sub: "Managed Budget", color: "text-white" },
    { label: "Engajamento", value: "15k+", sub: "Direct Clicks", color: "text-white" },
    { label: "Custo Clique", value: "R$0,10", sub: "CPC Strategy", color: "text-white" },
    { label: "Conversão", value: "R$3,00", sub: "Cost per Conv.", color: "text-white" },
  ];

  return (
    <section id="marketing" className="py-32 md:py-48 px-6 bg-apple text-white overflow-hidden relative">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-pistachio rounded-full blur-[150px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-pistachio/30 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-24 items-center">
          <div className="lg:col-span-7">
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-pistachio mb-6 block">Performance Marketing</span>
            <h2 className="text-6xl md:text-[8rem] font-black tracking-[ -0.06em] leading-[0.85] mb-10">
              High Impact <br />
              <span className="text-pistachio italic">Growth.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-xl md:text-2xl text-gray-400 font-medium leading-relaxed border-l-4 border-pistachio pl-8 py-2">
              Estratégias orientadas a ROI para escala de aquisição local e digital, unificando tráfego pago com inteligência de dados.
            </p>
          </div>
        </div>

        {/* Hero Metric - The "Real Highlight" */}
        <div className="mb-12">
          <div className="bg-white/5 border border-white/10 rounded-[4rem] p-10 md:p-20 backdrop-blur-3xl hover:border-pistachio transition-all duration-700 group overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-pistachio/5 to-transparent"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-pistachio rounded-full animate-pulse"></div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-pistachio">Metric Spotlight</h4>
                </div>
                <span className="text-8xl md:text-[12rem] font-black tracking-tighter leading-none group-hover:scale-105 transition-transform duration-700 block text-pistachio">
                  1.5M+
                </span>
              </div>
              <div>
                <h3 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Visualizações Únicas.</h3>
                <p className="text-xl text-gray-400 font-medium">Alcance massivo gerado através de segmentação precisa e criativos de alta conversão em Meta & Google Ads.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.slice(1).map((m, idx) => (
            <div 
              key={idx} 
              className="bg-white/5 p-10 rounded-[3rem] border border-white/10 hover:bg-white/10 hover:border-pistachio transition-all duration-500 group"
            >
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-6 group-hover:text-pistachio transition-colors">{m.label}</h4>
              <span className="text-5xl font-black block mb-2 tracking-tighter group-hover:translate-x-2 transition-transform">{m.value}</span>
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{m.sub}</p>
            </div>
          ))}
        </div>

        {/* Footer Banner */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-12 bg-pistachio p-10 md:p-14 rounded-[4rem] text-apple shadow-2xl">
          <div className="flex items-center gap-8">
            <div className="text-6xl md:text-7xl font-black tracking-tighter">ROI</div>
            <div className="h-16 w-1 bg-apple/10 hidden md:block"></div>
            <p className="text-lg md:text-xl font-bold leading-tight max-w-sm">
              Escala sustentável com foco agressivo em CPA e otimização contínua de funil.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {["Meta Ads", "Google Ads", "Analytics"].map(tag => (
              <span key={tag} className="text-[11px] font-black uppercase tracking-widest bg-apple text-white px-8 py-4 rounded-3xl hover:bg-white hover:text-apple transition-all duration-300">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingPerformance;
