
import React from 'react';
import type { ContactLink, Experience, Education, Certification, ProjectShowcaseItem, NavLink } from './types';
import {
  LinkedInIcon,
  GitHubIcon,
  EmailIcon,
  ShareIcon,
} from './components/Icons';
import Header from './src/components/Header';
import MarketingPerformance from './src/components/MarketingPerformance';
import ProjectSection from './src/components/ProjectSection';

const PROFILE_IMAGE_URL = "https://avatars.githubusercontent.com/u/69459277?v=4";

const navLinksData: NavLink[] = [
  { href: "#overview", label: "Overview" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#marketing", label: "Performance" },
  { href: "#projetos", label: "Projetos" },
  { href: "#formacao", label: "Formação" },
  { href: "#contato", label: "Contato" },
];

const contactLinksData: ContactLink[] = [
  { href: "mailto:leobrykcy.product@gmail.com", label: "Email", icon: <EmailIcon />, ariaLabel: "Email" },
  { href: "https://www.linkedin.com/in/leonardo-brykcy", label: "LinkedIn", icon: <LinkedInIcon />, ariaLabel: "LinkedIn" },
  { href: "https://github.com/Bryckzy", label: "GitHub", icon: <GitHubIcon />, ariaLabel: "GitHub" },
];

const experienceData: Experience[] = [
  {
    id: "exp-startools",
    title: "Product Maintenance Analyst",
    company: "Startools Ferramentas",
    period: "Dezembro 2025 - Presente",
    location: "SBC, SP",
    logoUrl: "https://i.imgur.com/q7hnTeR.png",
    description: [
      "Focado em operações de produto B2B, atuando na governança de Master Data no ERP.",
      "Otimização do ciclo de vida de dados para compliance fiscal e eficiência logística.",
      "Redução de gaps operacionais através de melhoria contínua de processos e sistemas.",
      "Garantia de integridade de informações críticas para precificação e supply chain."
    ]
  },
  {
    id: "exp-quark",
    title: "Founder | CEO",
    company: "Quark-IT",
    period: "Maio 2020 - Presente",
    location: "Brasil",
    logoUrl: "https://i.imgur.com/cwCk6d6.png",
    description: [
      "Liderança estratégica impactando +50 empresas com soluções digitais escaláveis.",
      "Desenvolvimento de arquiteturas robustas em Vercel, Supabase e automações com IA.",
      "Consultoria 360º: desde o mapeamento de necessidades até a entrega final (Discovery -> Delivery).",
      "Geração de ROI através de estratégias de SEO e Product Marketing para negócios locais."
    ]
  },
  {
    id: "exp-fluency",
    title: "Product Owner",
    company: "Fluencypass",
    period: "Novembro 2023 - Setembro 2024",
    location: "SBC, SP",
    logoUrl: "https://i.imgur.com/b83BoxP_d.webp?maxwidth=760&fidelity=grand",
    description: [
      "Orquestração de produtos EdTech integrando Inteligência Artificial Generativa.",
      "Desenvolvimento de protótipos e testes adaptativos (CAT) para escala global.",
      "Gestão de roadmap técnico com foco em métricas de aprendizado e retenção.",
      "Colaboração direta com engenharia para tradução de visão de negócio em requisitos."
    ]
  },
  {
    id: "exp-mb-prot",
    title: "Prototype and Production Mechanic",
    company: "Mercedes-Benz do Brasil",
    period: "Janeiro 2019 - Março 2023",
    location: "SBC, SP",
    logoUrl: "https://i.imgur.com/mFq1vmJ.png",
    description: [
      "Participação no desenvolvimento de veículos elétricos e tecnologias de ponta.",
      "Aplicação de metodologias ágeis em ambientes industriais de alta complexidade.",
      "Foco em precisão técnica, segurança e garantia de qualidade nos protótipos.",
      "Base fundamental de análise de detalhes e processos que hoje sustenta minha visão de produto."
    ]
  }
];

const educationData: Education[] = [
  {
    id: "edu-ufabc-gestao",
    institution: "Universidade Federal do ABC (UFABC)",
    degree: "Bacharelado em Engenharia de Gestão",
    period: "2022 - 2027",
    details: "Formação simultânea e interdisciplinar focada em estratégia e otimização de sistemas complexos.",
    logoUrl: "https://i.imgur.com/MiEi4Je.png"
  },
  {
    id: "edu-ufabc-aero",
    institution: "Universidade Federal do ABC (UFABC)",
    degree: "Bacharelado em Engenharia Aeroespacial",
    period: "2022 - 2027",
    details: "Formação técnica de alta complexidade em paralelo à gestão, unificando precisão técnica e visão estratégica.",
    logoUrl: "https://i.imgur.com/MiEi4Je.png"
  },
  {
    id: "edu-pm3-path",
    institution: "Escola PM3",
    degree: "Formação em Product Management",
    period: "2023",
    details: "Referência em gestão de produtos no Brasil, focando em Discovery, Delivery e Product-Led Growth.",
    logoUrl: "https://i.imgur.com/1NHtBuj.png"
  },
  {
    id: "edu-senai-mb",
    institution: "SENAI Mercedes-Benz",
    degree: "Manufatura Automotiva & Mecânica",
    period: "2019 - 2021",
    details: "Base técnica de manufatura de precisão em ambiente corporativo global.",
    logoUrl: "https://i.imgur.com/NnL38S1.png"
  }
];

const certificationData: Certification[] = [
  { id: "c-pm3-pm", name: "Product Management", issuer: "Escola PM3", year: "2023", logoUrl: "https://i.imgur.com/1NHtBuj.png" },
  { id: "c-pm3-pd", name: "Product Design", issuer: "Escola PM3", year: "2023", logoUrl: "https://i.imgur.com/1NHtBuj.png" },
  { id: "c-cambridge", name: "C1 Advanced English", issuer: "Cambridge Assessment", year: "2022", logoUrl: "https://i.imgur.com/uH5sops.png" },
  { id: "c-senai-emp", name: "Empreendedorismo", issuer: "SENAI-SP", year: "2021", logoUrl: "https://i.imgur.com/NnL38S1.png" },
];

const projectShowcaseData: ProjectShowcaseItem[] = [
  {
    id: "p-startools-logistica",
    name: "Startools Logística",
    category: "Internal Ops",
    context: "Falta de controle logístico e visibilidade nas entregas, dificultando a gestão e gerando ineficiências operacionais.",
    role: [
      "Discovery completo do fluxo logístico",
      "Definição de backlog e priorização",
      "Criação de visão de produto end-to-end"
    ],
    solution: "Sistema completo de gestão logística com acompanhamento, etapas e relatórios.",
    results: [
      "Redução média de falhas operacionais observada na operação",
      "Aumento de eficiência média na gestão global de entregas",
      "Melhoria consolidada na previsibilidade logística"
    ],
    imageUrls: [
      "https://i.imgur.com/Y4WpiHQ.jpeg",
      "https://i.imgur.com/AVBj6rs.jpeg"
    ],
    techStack: ["Product Discovery", "UX Flow", "End-to-End"]
  },
  {
    id: "p-startools-scan",
    name: "Startools Product Scan",
    category: "Internal Ops",
    context: "Dificuldade de acesso rápido a informações de produtos em eventos e showroom pela equipe comercial.",
    role: [
      "Identificação de necessidade operacional em campo",
      "Definição de experiência mobile-first focada em campo",
      "Priorização de velocidade resolutiva e usabilidade no scan"
    ],
    solution: "Sistema leve de leitura de código de barras com retorno instantâneo agilizando a visualização de informações em campo.",
    results: [
      "Redução média significativa no tempo de consulta de produtos",
      "Melhoria média na experiência comercial presencial em eventos"
    ],
    imageUrls: [
      "https://i.imgur.com/2TbAMxX.jpeg",
      "https://i.imgur.com/dIXJwvy.jpeg"
    ],
    techStack: ["Mobile-first", "Operações Comerciais"]
  },
  {
    id: "p-linguacombo",
    name: "LinguaCombo",
    category: "Marketing",
    context: "Cursos de idiomas com preços altos e baixa acessibilidade, principalmente para jovens e iniciantes.",
    role: [
      "Definição da proposta de valor focada em educação acessível",
      "Estruturação do modelo de pricing com inspiração em combos",
      "Construção da jornada guiada simplificada de compra",
      "Validação contínua da oferta baseada em dados de check-out"
    ],
    solution: "Criação de uma plataforma online de venda de aulas com um modelo de precificação acessível e comunicação altamente simplificada.",
    results: [
      "Aumento médio de conversão observado em landing pages educacionais comparáveis entre 20% e 40%",
      "Redução média esperada da fricção no checkout em produtos de baixo ticket"
    ],
    imageUrls: [
      "https://i.imgur.com/cPWETJJ.jpeg"
    ],
    techStack: ["Growth", "Pricing Strategy", "E-commerce"]
  },
  {
    id: "p-productmatch",
    name: "Product Match",
    category: "Projetos",
    context: "Empresas com dificuldade de posicionamento competitivo mercadológico por falta de visibilidade em escala sobre concorrentes.",
    role: [
      "Definição exata do problema de inteligência competitiva",
      "Estruturação lógica do fluxo automatizado de comparação",
      "Priorização das vitrines e features de análise automática"
    ],
    solution: "Sistema corporativo focado em cruzar informações do catálogo interno com as de produtos concorrentes mapeados online.",
    results: [
      "Redução média esperada no tempo de análise competitiva podendo chegar a 70%",
      "Apoio estrutural e melhoria na tomada de decisão comercial de forma holística comparativa"
    ],
    imageUrls: [
      "https://i.imgur.com/M88eZZj.jpeg",
      "https://i.imgur.com/E2bNbOV.jpeg"
    ],
    techStack: ["Competitive Intelligence", "Data Strategy"]
  },
  {
    id: "p-etiquetas-showroom",
    name: "Etiquetas Showroom",
    category: "Internal Ops",
    context: "Processos puramente manuais, gerando inconsistências no padrão e na agilidade de identificação de produtos de showroom.",
    role: [
      "Mapeamento imersivo e diagnóstico do fluxo atual",
      "Identificação tática de gargalos operacionais físicos/digitais",
      "Definição da padronização sustentável para o ambiente de operação"
    ],
    solution: "Criação de sistema coeso para a geração automatizada e ágil de etiquetas baseadas nestes padrões corporativos.",
    results: [
      "Acesso e redução média global de erros na cadeia de manuseio e etiquetagem",
      "Escalabilidade e aumento de eficiência visual na organização do espaço"
    ],
    imageUrls: [
      "https://i.imgur.com/ogcl5OT.jpeg"
    ],
    techStack: ["Automação", "Mapeamento Ops"]
  },
  {
    id: "p-quark-site",
    name: "Quark IT — Site & Portfólio",
    category: "Marketing",
    context: "Negócios locais com presença digital estagnada e alta dificuldade natural de criar verticais recorrentes na aquisição de clientes.",
    role: [
      "Estruturação direta e assertiva do posicionamento de produto",
      "Mapeamento da jornada orgânica até funil em aquisição",
      "Priorização tática das landing pages com visibilidade em lead generation"
    ],
    solution: "Site institucional orientado ao posicionamento profissional de forma contínua para apresentação e onboarding de serviços.",
    results: [
      "Suporte vital e aumento médio contínuo nas frentes locais de lead generation",
      "Atingimento da taxa de conversão média por visitantes otimizada para o setor B2B local"
    ],
    imageUrls: [
      "https://i.imgur.com/hgNEjNj.jpeg",
      "https://i.imgur.com/hW4l5ba.jpeg"
    ],
    techStack: ["Lead Generation", "UX Strategy"]
  },
  {
    id: "p-aprender-crescer",
    name: "Landing Page — Aprender para Crescer",
    category: "Marketing",
    context: "Baixa retenção de atenção e queda perceptível no conversão para produtos voltados estritamente à esfera educacional.",
    role: [
      "Reredação e reestruturação total da proposta de valor exposta",
      "Desenvolvimento de hierarquização visual pautada em métricas",
      "Aprovação e testagem com foco exclusivo no tracionamento"
    ],
    solution: "Implementação de modelo reestruturado de Landing Page modular com CTAs progressivos direcionando conversão fluida em InfoProdutos.",
    results: [
      "Expectativa de aumento e melhoria média em conversão entre 25% e 50% frente aos padrões atuais web",
      "Ataque a objeções operacionais gerando redução direta no abandono"
    ],
    imageUrls: [
      "https://i.imgur.com/ROtsZyd.jpeg"
    ],
    techStack: ["Growth", "CRO", "Copywriting"]
  },
  {
    id: "p-grunner-mb",
    name: "Grunner (Mercedes-Benz)",
    category: "Projetos",
    context: "Elevada necessidade de expansão segura e ágil na adaptação dos ecossistemas de caminhões para uma operação autônoma agrícola.",
    role: [
      "Atuação presente em etapas complexas conectadas e ciclo de produto",
      "Elaboração como ponte/interface entre divisões técnicas e corporativas",
      "Forte contribuição transversal nos testes práticos focando segurança"
    ],
    solution: "Arquitetura adaptada viabilizando de ponta a ponta que veículos superem interrupções operando em ambiente remoto agrícola autônomo.",
    results: [
      "Diminuição robusta na necessidade contínua por interferência manual em ambientes hostis",
      "Incremento global médio na disponibilidade tática mecânica da operação por escala"
    ],
    imageUrls: [
      "https://i.imgur.com/05SyIoV.jpeg"
    ],
    techStack: ["Product Ops", "Integração B2B"]
  },
  {
    id: "p-easytab",
    name: "Easy Tab",
    category: "Projetos",
    context: "Grande atraso e custo logístico em horas humanas para o registro de tabulações em call centers sob forte demanda.",
    role: [
      "Mapeamento precoce sobre aplicação inteligente de dados LLM",
      "Conectividade de serviços validando uso do modelo focado em voz",
      "Refinamento das interações modelando processos de escuta em tabulação direta"
    ],
    solution: "Implementação combinada integrando conversão Speech-to-Text ao processo de processamento da IA para automatizar resumos dos atendimentos.",
    results: [
      "Cenário prospectivo traçando forte redução contínua em tempo manual no processo de chamada",
      "Impacto positivo provável sobre os limiares de produtividade operacional do turno"
    ],
    imageUrls: [
      "https://i.imgur.com/jMvligm.png"
    ],
    techStack: ["LLM", "Automação com IA"]
  },
  {
    id: "p-calc",
    name: "Calculadora Logística 3D",
    category: "Projetos",
    context: "Falta de visibilidade e ineficiência na alocação de espaço e cubagem industrial, gerando encarecimento excessivo e altos custos não otimizados no frete logístico corporativo.",
    role: [
      "Mapeamento estruturado minucioso para as validações da alocação de espaço dos insumos e cargas",
      "Gestão do backlog e priorização das visões voltadas a resultados interativos da calculadora no dia-a-dia do operador de pátio"
    ],
    solution: "Ferramenta tática e robusta, projetando na tela de forma contínua em 3D o melhor aproveitamento prático gerado pelos limites volumétricos testados.",
    results: [
      "Redução média em custos de frete estimada em implementações de 10% e 20%",
      "Eficácia contínua visando maximização do espaço real nos transportes viários e operacionais"
    ],
    imageUrls: [
      "https://i.imgur.com/Gea7j14.png?w=800&auto=format&q=75"
    ],
    techStack: ["Data Ops", "Visão Espacial"]
  },
  {
    id: "p-sullivan",
    name: "Sullivan Connection",
    category: "Projetos",
    context: "Dependência de planilhas complexas, demora excessiva e falha recorrente em dados na coleta de requerimentos de campo das obras, minando orçamento comercial.",
    role: [
      "Avaliação crítica das dependências processuais da equipe de rua com o backend",
      "Orquestração estratégica viabilizando arquitetura para rápida emissão assíncrona por parte da infraestrutura",
    ],
    solution: "Estrutura nativamente mobile fornecendo total autonomia na manutenção, e facilitando imersão de preenchimento comercial em linha.",
    results: [
      "Expansibilidade de adoção observando em casos correlacionados aumento de aceites próximos de 80% do pipeline médio",
      "Refinamento da cadência digital desobstruindo tempo precioso do comercial corporativo atuante na região"
    ],
    imageUrls: [
      "https://i.imgur.com/B4grnDk.png?w=800&auto=format&q=75"
    ],
    techStack: ["Mobile Architecture", "Agile"]
  },
  {
    id: "p-level",
    name: "Level Test AI",
    category: "Projetos",
    context: "Avaliações monolíticas tradicionais causavam alto índice de erro do nível medido em relação à curva de fluência, estendendo desgastes nos primeiros dias dos estudantes.",
    role: [
      "Revisão integral das métricas preditivas apontando lacunas avaliativas no uso das tecnologias legadas",
      "Design de lógica pautado no formato 'Item Response Theory', balanceando IA para personalização fluida e de baixa frustração na avaliação"
    ],
    solution: "Prova modular orientada e adaptada em tempo de execução via GenAI para medir fluência real dos candidados baseada puramente na curva cognitiva.",
    results: [
      "Saltos nos níveis e melhoria em escalabilidade resultando em redução drástica no tempo médio da checagem em paralelo de perfis do fluxo central edtech"
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=70"
    ],
    techStack: ["AI Models", "Linguistics"]
  },
  {
    id: "p-labels",
    name: "SKU Label System",
    category: "Internal Ops",
    context: "Gargalos e erros na identificação de produtos para ERP no momento da expedição, gerando problemas de integridade de dados.",
    role: [
      "Identificação das necessidades na expedição",
      "Definição do fluxo de automação",
      "Acompanhamento da implantação do sistema corporativo"
    ],
    solution: "Sistema ágil para geração e identificação automatizada de labels/etiquetas integradas ao ERP.",
    results: [
      "Redução média sensível de falhas na identificação de produtos",
      "Aumento médio de integridade dos dados operacionais logísticos"
    ],
    imageUrls: [
      "https://i.imgur.com/1RDePwi.png?w=800&auto=format&q=75"
    ],
    techStack: ["React", "Node.js", "SQL"]
  },
  {
    id: "p-styllo",
    name: "Barbearia Novo Styllo",
    category: "Marketing",
    context: "Negócio local buscando profissionalização de marca e dificuldades em canalizar agendamentos digitalmente de forma escalável.",
    role: [
      "Definição agressiva de estratégia digital local",
      "Estruturação de funil orgânico de conversão cruzada",
      "Implementação forte do SEO local map centric"
    ],
    solution: "Plataforma de presença digital com agenda unificada e otimização visando conversão e aquisição via buscas locais.",
    results: [
      "Aumento médio expressivo na geração de marcações orgânicas",
      "Melhoria contínua média no posicionamento de buscas na região de atuação principal"
    ],
    imageUrls: [
      "https://i.imgur.com/92B9svc.png?w=800&auto=format&q=75"
    ],
    techStack: ["React", "Framer Motion", "Growth"]
  }
];

const App: React.FC = () => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Leonardo Brykcy | Product Professional',
          text: 'Conheça o portfólio de Leonardo Brykcy, Product Professional & Digital Strategist.',
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      const el = document.createElement('textarea');
      el.value = window.location.href;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      alert('Link copiado para a área de transferência!');
    }
  };

  return (
    <div className="flex flex-col min-h-screen selection:bg-pistachio selection:text-black">
      <Header 
        navLinks={navLinksData} 
        profileImageUrl={PROFILE_IMAGE_URL}
        contactLinks={contactLinksData}
      />
      
      <main className="flex-grow">
        {/* HERO SECTION */}
        <section id="overview" className="bg-linen-texture pt-32 pb-24 md:pt-48 md:pb-32 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-10 flex flex-col items-center relative group">
              <div className="absolute inset-0 rounded-[2.5rem] bg-pistachio blur-3xl opacity-30 -z-10 transition-all group-hover:opacity-50 scale-125 animate-pulse"></div>
              <img 
                src={PROFILE_IMAGE_URL} 
                alt="Leonardo Brykcy" 
                className="w-40 h-40 md:w-56 md:h-56 rounded-[3rem] shadow-2xl border-4 border-white/50 object-cover transform transition-transform hover:rotate-3 duration-500"
              />
              
              {/* Floating Social Buttons - Home Primary Action */}
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-12 px-4">
                 <a 
                   href="https://www.linkedin.com/in/leonardo-brykcy" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center justify-center px-4 py-3 bg-pistachio text-apple font-black rounded-2xl hover:bg-pistachio-dark transition-all transform hover:-translate-y-1 shadow-lg shadow-pistachio/20 group/btn"
                   aria-label="LinkedIn"
                 >
                   <LinkedInIcon className="w-5 h-5 transition-transform group-hover/btn:scale-110" />
                 </a>
                 <a 
                   href="https://github.com/Bryckzy" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center justify-center px-4 py-3 bg-pistachio text-apple font-black rounded-2xl hover:bg-pistachio-dark transition-all transform hover:-translate-y-1 shadow-lg shadow-pistachio/20 group/btn"
                   aria-label="GitHub"
                 >
                   <GitHubIcon className="w-5 h-5 transition-transform group-hover/btn:scale-110" />
                 </a>
                 <button 
                   onClick={handleShare}
                   className="flex items-center justify-center px-4 py-3 bg-pistachio text-apple font-black rounded-2xl hover:bg-pistachio-dark transition-all transform hover:-translate-y-1 shadow-lg shadow-pistachio/20 group/btn"
                   aria-label="Compartilhar"
                 >
                   <ShareIcon className="w-5 h-5 transition-transform group-hover/btn:rotate-12" />
                 </button>
              </div>
            </div>
            
            <h1 className="text-6xl md:text-[10rem] font-black mb-8 tracking-tighter text-apple leading-[0.8] animate-fade-in">
              Leonardo <br className="md:hidden" /> Brykcy.
            </h1>
            <p className="text-xl md:text-3xl font-medium text-gray-500 max-w-4xl mx-auto leading-tight mb-20 px-4">
              Product Professional & Líder Estratégico. <br className="hidden md:block" />
              Sua visão traduzida em <span className="text-apple font-bold italic border-b-4 border-pistachio">impacto real e escalabilidade.</span>
            </p>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-8 max-w-5xl mx-auto pt-16 border-t border-apple/5">
              <div className="text-center p-5 sm:p-6 md:p-8 bg-white/60 rounded-[2rem] sm:rounded-[3rem] backdrop-blur-sm border border-white/20 hover:border-pistachio transition-all group">
                <span className="block text-3xl sm:text-4xl md:text-6xl font-black mb-1 text-apple group-hover:text-pistachio-dark transition-colors">7+</span>
                <span className="text-[8px] sm:text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Anos de Trajetória</span>
              </div>
              <div className="text-center p-5 sm:p-6 md:p-8 bg-pistachio rounded-[2rem] sm:rounded-[3rem] border border-pistachio-dark hover:shadow-2xl transition-all shadow-pistachio/10 group">
                <span className="block text-3xl sm:text-4xl md:text-6xl font-black mb-1 text-apple group-hover:scale-110 transition-transform">+50</span>
                <span className="text-[8px] sm:text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-apple/60">Empresas Impactadas</span>
              </div>
              <div className="text-center p-5 sm:p-6 md:p-8 bg-white/60 rounded-[2rem] sm:rounded-[3rem] backdrop-blur-sm border border-white/20 hover:border-pistachio transition-all">
                <span className="block text-xl sm:text-2xl md:text-4xl font-black mb-1 text-apple mt-1">Trilingue</span>
                <span className="text-[8px] sm:text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">PT / EN / FR</span>
              </div>
              <div className="text-center p-5 sm:p-6 md:p-8 bg-pistachio rounded-[2rem] sm:rounded-[3rem] border border-pistachio-dark shadow-lg shadow-pistachio/20 transform transition-transform hover:scale-105 flex flex-col justify-center items-center overflow-hidden">
                <span className="block text-xs sm:text-sm md:text-base lg:text-lg font-black mb-1 text-apple leading-tight whitespace-nowrap">Discovery <span className="mx-0.5 text-apple/30">{"->"}</span> Delivery</span>
                <span className="text-[8px] sm:text-[9px] md:text-[10px] font-black uppercase tracking-[0.15em] text-apple/40">Mindset End-to-End</span>
              </div>
            </div>
          </div>
        </section>

        {/* MANTRA */}
        <section className="bg-pistachio/30 py-32 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter text-apple">
              Equilíbrio entre <span className="opacity-40">Engenharia</span> & <span className="text-pistachio-dark italic">Negócio.</span>
            </h2>
            <p className="text-lg md:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto font-medium">
              Minha experiência na Mercedes-Benz me deu a base técnica de precisão. Como Founder da Quark-IT, aprendi a agilidade do mercado. Hoje, unifico essas visões para governar produtos sustentáveis e orientados a dados.
            </p>
          </div>
        </section>

        {/* EXPERIÊNCIA */}
        <section id="experiencia" className="py-32 md:py-48 px-6 bg-linen">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title mb-24 text-center">Histórico Profissional.</h2>
            <div className="space-y-32">
              {experienceData.map((exp) => (
                <div key={exp.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 group">
                  <div className="lg:col-span-4">
                    <div className="sticky top-24">
                       <span className="text-[10px] font-black uppercase tracking-widest text-pistachio-dark mb-4 block">{exp.period}</span>
                       <div className="flex items-center gap-5 mb-8">
                          {exp.logoUrl && <img src={exp.logoUrl} className="w-14 h-14 rounded-2xl shadow-md bg-white p-1" alt={exp.company} />}
                          <div>
                            <h3 className="text-2xl font-black tracking-tighter leading-none">{exp.company}</h3>
                            <p className="text-xs font-bold text-gray-400 mt-1 uppercase tracking-widest">{exp.location}</p>
                          </div>
                       </div>
                       <p className="text-sm font-black text-apple/40 uppercase tracking-[0.2em]">{exp.title}</p>
                    </div>
                  </div>
                  <div className="lg:col-span-8">
                    <ul className="space-y-6">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-lg md:text-xl text-gray-600 leading-relaxed pl-8 border-l-4 border-pistachio group-hover:border-pistachio-dark transition-colors duration-500">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <MarketingPerformance />

        <ProjectSection projects={projectShowcaseData} />

        {/* FORMAÇÃO E CERTIFICADOS */}
        <section id="formacao" className="py-32 md:py-48 px-6 bg-linen-texture">
          <div className="max-w-6xl mx-auto">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
                <div>
                   <h2 className="text-4xl font-black mb-16 tracking-tighter">Academic Path.</h2>
                   <div className="space-y-8 sm:space-y-12">
                     {educationData.map(edu => (
                       <div key={edu.id} className="flex flex-col sm:flex-row gap-6 sm:gap-8 group bg-white/50 p-6 sm:p-8 rounded-[2.5rem] border border-white/50 hover:bg-white transition-all">
                         <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 flex items-center justify-center p-2 bg-white rounded-2xl shadow-sm">
                           {edu.logoUrl && <img src={edu.logoUrl} className="w-full h-full object-contain rounded-xl" alt={edu.institution} />}
                         </div>
                         <div>
                            <h4 className="text-xl sm:text-2xl font-black tracking-tight">{edu.institution}</h4>
                            <p className="text-base sm:text-lg font-bold text-gray-500 mb-4 sm:mb-2 leading-tight">{edu.degree}</p>
                            <span className="text-[10px] font-black uppercase tracking-widest text-pistachio-dark bg-pistachio/20 px-4 py-1.5 rounded-full">{edu.period}</span>
                         </div>
                       </div>
                     ))}
                   </div>
                </div>
                <div>
                   <h2 className="text-4xl font-black mb-16 tracking-tighter">Certifications.</h2>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {certificationData.map(cert => (
                        <div key={cert.id} className="p-8 bg-white rounded-[2rem] border border-apple/5 shadow-sm hover:shadow-md transition-all flex flex-col items-start gap-4">
                          {cert.logoUrl && <img src={cert.logoUrl} className="w-10 h-10 object-contain" alt={cert.issuer} />}
                          <div>
                            <p className="font-black text-sm text-apple leading-tight mb-2">{cert.name}</p>
                            <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">{cert.issuer} • {cert.year}</p>
                          </div>
                        </div>
                      ))}
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section id="contato" className="py-40 bg-apple text-white px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-6xl md:text-[10rem] font-black mb-20 tracking-tighter leading-none">Let's Talk.</h2>
            <div className="flex flex-wrap justify-center gap-10 md:gap-24 mb-32">
              {contactLinksData.map(link => (
                <a key={link.label} href={link.href} className="group flex flex-col items-center">
                  <div className="w-20 h-20 md:w-28 md:h-28 bg-white/5 rounded-[3.5rem] flex items-center justify-center mb-6 group-hover:bg-pistachio group-hover:text-apple transition-all duration-700 shadow-2xl transform group-hover:rotate-12">
                    {React.cloneElement(link.icon as React.ReactElement<{ className?: string }>, { className: "w-8 h-8 md:w-12 md:h-12" })}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.6em] opacity-40 group-hover:opacity-100 transition-opacity">{link.label}</span>
                </a>
              ))}
            </div>
            <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.5em] px-4">
              Leonardo Brykcy © {new Date().getFullYear()} • Product Strategy & Operations
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
