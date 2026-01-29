
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

const PROFILE_IMAGE_URL = "https://avatars.githubusercontent.com/u/69459277?v=4";
const PM3_LOGO = "https://media.licdn.com/dms/image/v2/D4D0BAQGQLThpk2gbbQ/company-logo_100_100/B4DZrgcwhBKIAY-/0/1764702227104/escola_pm3_logo?e=1770249600&v=beta&t=EFbJ4d0wtsv-_ksRmUSlfZnYh1ri9qHzl0XEMiCPDcQ";

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
    logoUrl: "https://media.licdn.com/dms/image/v2/D4E0BAQFBbZxaaOmw2w/company-logo_100_100/B4EZY0LW0QG0AU-/0/1744632115253/startoolsferramentas_logo?e=1771459200&v=beta&t=B7Sbg8WjTKkhD4srwsTjEZPVlqhYXW6gnm1qH7ywaJo",
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
    logoUrl: "https://media.licdn.com/dms/image/v2/D4E0BAQFdaRd_bx_HPQ/company-logo_100_100/B4EZeXUaeHHsAQ-/0/1750590401271/quark_it_logo?e=1770249600&v=beta&t=IQ5e6PFPH3x8zuL5X_sq3P8ZJ5OLOY7WwwWVIKAOHKw",
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
    logoUrl: "https://media.licdn.com/dms/image/v2/C4D0BAQHFhYD7eWyToQ/company-logo_100_100/company-logo_100_100/0/1630573545660/intercambiodireto_logo?e=1770249600&v=beta&t=1yHY_JvBWNhQ4lLM4gwVr3Dzoh-AGisaiR2EaE1x_qw",
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
    logoUrl: "https://media.licdn.com/dms/image/v2/C4D0BAQEkDK7TnthtLw/company-logo_100_100/company-logo_100_100/0/1630455336611?e=1770249600&v=beta&t=yEDKuVUvpvspcxXLCTWqbRKJyCHl8nq2F6b9PtcKTuI",
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
    logoUrl: "https://media.licdn.com/dms/image/v2/D4D0BAQE5uoSry7ph7A/company-logo_100_100/company-logo_100_100/0/1690208954192/ufabc_logo?e=1770249600&v=beta&t=Kywtl8OWoqZVnvPMp0eWy7k3vNSUfKXf92kH3E9zDcg"
  },
  {
    id: "edu-ufabc-aero",
    institution: "Universidade Federal do ABC (UFABC)",
    degree: "Bacharelado em Engenharia Aeroespacial",
    period: "2022 - 2027",
    details: "Formação técnica de alta complexidade em paralelo à gestão, unificando precisão técnica e visão estratégica.",
    logoUrl: "https://media.licdn.com/dms/image/v2/D4D0BAQE5uoSry7ph7A/company-logo_100_100/company-logo_100_100/0/1690208954192/ufabc_logo?e=1770249600&v=beta&t=Kywtl8OWoqZVnvPMp0eWy7k3vNSUfKXf92kH3E9zDcg"
  },
  {
    id: "edu-pm3-path",
    institution: "Escola PM3",
    degree: "Formação em Product Management",
    period: "2023",
    details: "Referência em gestão de produtos no Brasil, focando em Discovery, Delivery e Product-Led Growth.",
    logoUrl: PM3_LOGO
  },
  {
    id: "edu-senai-mb",
    institution: "SENAI Mercedes-Benz",
    degree: "Manufatura Automotiva & Mecânica",
    period: "2019 - 2021",
    details: "Base técnica de manufatura de precisão em ambiente corporativo global.",
    logoUrl: "https://media.licdn.com/dms/image/v2/D4D0BAQEXQZMYuhyf3A/company-logo_100_100/B4DZfF0q9fGkAU-/0/1751370608886/senaisp_logo?e=1770249600&v=beta&t=GS59LkzmXWat1irm592N8zBv_UL1DOJALR-gKLIzT5k"
  }
];

const certificationData: Certification[] = [
  { id: "c-pm3-pm", name: "Product Management", issuer: "Escola PM3", year: "2023", logoUrl: PM3_LOGO },
  { id: "c-pm3-pd", name: "Product Design", issuer: "Escola PM3", year: "2023", logoUrl: PM3_LOGO },
  { id: "c-cambridge", name: "C1 Advanced English", issuer: "Cambridge Assessment", year: "2022", logoUrl: "https://media.licdn.com/dms/image/v2/C4D0BAQHzAFzG6umH9g/company-logo_100_100/company-logo_100_100/0/1630574057001/cambridge_assessment_logo?e=1770249600&v=beta&t=8NpIQ7K_o9is023H1r3McXHBMF0P9AxoyOwTjIcvb_g" },
  { id: "c-senai-emp", name: "Empreendedorismo", issuer: "SENAI-SP", year: "2021", logoUrl: "https://media.licdn.com/dms/image/v2/D4D0BAQEXQZMYuhyf3A/company-logo_100_100/B4DZfF0q9fGkAU-/0/1751370608886/senaisp_logo?e=1770249600&v=beta&t=GS59LkzmXWat1irm592N8zBv_UL1DOJALR-gKLIzT5k" },
];

const projectShowcaseData: ProjectShowcaseItem[] = [
  {
    id: "p-calc",
    name: "Calculadora Logística 3D",
    category: "Product Tooling",
    shortDescription: "Otimização de cubagem industrial com visualização real-time. Redução direta em custos de frete.",
    imageUrl: "https://i.imgur.com/Gea7j14.png?w=800&auto=format&q=75",
    techStack: ["React", "Three.js", "Data Ops"],
    impact: "+ Efficiency"
  },
  {
    id: "p-labels",
    name: "SKU Label System",
    category: "Internal Ops",
    shortDescription: "Automação de identificação de produtos para ERP. Garantia de integridade de dados na expedição.",
    imageUrl: "https://i.imgur.com/1RDePwi.png?w=800&auto=format&q=75",
    techStack: ["React", "Node.js", "SQL"],
    impact: "+ Efficiency"
  },
  {
    id: "p-styllo",
    name: "Barbearia Novo Styllo",
    category: "Digital Business",
    shortDescription: "Arquitetura de agendamento e SEO local. Focado em UX de alto nível e conversão local.",
    imageUrl: "https://i.imgur.com/92B9svc.png?w=800&auto=format&q=75",
    techStack: ["React", "Framer Motion", "Growth"],
    impact: "Local Growth"
  },
  {
    id: "p-sullivan",
    name: "Sullivan Connection",
    category: "Business Management",
    shortDescription: "Sistema mobile de orçamentos e controle de manutenção. Digitalização de processos manuais.",
    imageUrl: "https://i.imgur.com/B4grnDk.png?w=800&auto=format&q=75",
    techStack: ["React", "Mobile Architecture"],
    impact: "+80% Pedidos"
  },
  {
    id: "p-level",
    name: "Level Test AI",
    category: "AI Integration",
    shortDescription: "Teste adaptativo de idiomas (CAT) movido por modelos de linguagem. Avaliação dinâmica e precisa.",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=70",
    techStack: ["AI Models", "Python", "Linguistics"],
    impact: "AI Driven"
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
            <div className="mb-10 flex justify-center relative group">
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

        {/* PROJETOS */}
        <section id="projetos" className="py-32 md:py-48 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="section-title mb-20 text-center">Projetos & Impacto.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {projectShowcaseData.map((project) => (
                <div key={project.id} className="group flex flex-col bg-linen rounded-[3rem] overflow-hidden border border-apple/5 hover:border-pistachio transition-all duration-500 shadow-sm hover:shadow-xl">
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img src={project.imageUrl} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={project.name} loading="lazy" />
                    {project.impact && (
                      <div className="absolute top-6 right-6 bg-apple text-white px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                        {project.impact}
                      </div>
                    )}
                  </div>
                  <div className="p-8 md:p-14">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-pistachio-dark mb-4 block">{project.category}</span>
                    <h3 className="text-3xl font-black mb-6 tracking-tighter leading-tight">{project.name}</h3>
                    <p className="text-gray-500 text-lg leading-relaxed mb-8">{project.shortDescription}</p>
                    <div className="flex flex-wrap gap-2">
                       {project.techStack?.map(t => (
                         <span key={t} className="text-[9px] font-black uppercase tracking-widest bg-pistachio/40 text-apple px-4 py-2 rounded-xl">
                           {t}
                         </span>
                       ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

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
