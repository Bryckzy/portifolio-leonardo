import React, { useEffect, useMemo, useRef, useState } from 'react';

type NavId = 'inicio' | 'experiencia' | 'projetos' | 'competencias' | 'contato';

type Project = {
  id: string;
  name: string;
  eyebrow: string;
  description: string;
  outcome: string;
  image: string;
  alt: string;
  tags: string[];
  bullets: string[];
};

type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
};

const PROFILE_IMAGE = 'https://avatars.githubusercontent.com/u/69459277?v=4';

const navigation: { id: NavId; label: string; shortLabel: string }[] = [
  { id: 'inicio', label: 'Início', shortLabel: 'Início' },
  { id: 'experiencia', label: 'Experiência', shortLabel: 'Trajetória' },
  { id: 'projetos', label: 'Projetos', shortLabel: 'Cases' },
  { id: 'competencias', label: 'Competências', shortLabel: 'Skills' },
  { id: 'contato', label: 'Contato', shortLabel: 'Contato' },
];

const experiences: Experience[] = [
  {
    company: 'Startools Ferramentas',
    role: 'Product Operations & Systems',
    period: '2025 — atual',
    location: 'São Bernardo do Campo, SP',
    summary:
      'Produto, dados e automação aplicados à operação B2B: transformando rotinas de catálogo, logística e backoffice em sistemas internos mais confiáveis.',
    highlights: [
      'Governança de um catálogo com 1.910 SKUs, cobrindo GTIN, NCM/CEST, peso, cubagem e qualidade cadastral.',
      'Criação de ferramentas internas para logística, GTIN, matching de produtos, PDFs, etiquetas, showroom e RH.',
      'Integrações e fluxos envolvendo ERP Bimer, GS1, Data Frete, APIs e bases operacionais.',
    ],
  },
  {
    company: 'Quark-IT',
    role: 'Founder & Product Builder',
    period: '2020 — atual',
    location: 'Brasil',
    summary:
      'Construção de produtos digitais e automações para negócios, atuando da descoberta do problema à arquitetura, entrega e evolução.',
    highlights: [
      'Discovery, prototipação, desenvolvimento e lançamento de soluções web orientadas a problemas reais de operação e aquisição.',
      'Arquiteturas com React, Vite, Vercel, Supabase, bancos SQL, integrações e automações com IA.',
      'Visão transversal de produto, UX, tecnologia, dados e estratégia comercial.',
    ],
  },
  {
    company: 'FluencyPass',
    role: 'Product Owner — AI & EdTech',
    period: '2023 — 2024',
    location: 'São Paulo, SP',
    summary:
      'Produto educacional com foco em IA generativa, experimentação e experiências de aprendizagem adaptativas.',
    highlights: [
      'Prototipação e exploração de experiências com LLMs aplicadas ao aprendizado de idiomas.',
      'Tradução de necessidades de negócio e aprendizagem em requisitos, testes e prioridades de produto.',
      'Colaboração próxima com engenharia, design e stakeholders para evoluir roadmap e experiência.',
    ],
  },
  {
    company: 'Mercedes-Benz do Brasil',
    role: 'Protótipos & Produção',
    period: '2019 — 2023',
    location: 'São Bernardo do Campo, SP',
    summary:
      'Base industrial construída em um ambiente de engenharia, qualidade e manufatura de alta complexidade.',
    highlights: [
      'Atuação em protótipos, produção e iniciativas ligadas a novas tecnologias veiculares.',
      'Disciplina de processo, segurança, qualidade e precisão técnica aplicada ao ciclo físico de produto.',
      'Experiência multidisciplinar que hoje conecta operação, engenharia e produto digital.',
    ],
  },
];

const projects: Project[] = [
  {
    id: 'startools-ops',
    name: 'Startools Ops Suite',
    eyebrow: 'Flagship · Operações B2B',
    description:
      'Um ecossistema de ferramentas internas construído para reduzir atrito entre catálogo, logística, comercial e backoffice.',
    outcome:
      'Transformação de processos manuais e fragmentados em fluxos digitais com dados mais consistentes e decisões mais rápidas.',
    image: 'https://i.imgur.com/Y4WpiHQ.jpeg',
    alt: 'Interface do sistema de logística da Startools',
    tags: ['Product Ops', 'React', 'Dados', 'Automação'],
    bullets: [
      'Logística e acompanhamento de entregas com indicadores e visão operacional.',
      'Gerador de GTIN, Product Match, PDF Slicer, etiquetas de showroom e ferramentas de cadastro.',
      'Arquitetura pensada para uso interno, baixa fricção e evolução incremental.',
    ],
  },
  {
    id: 'exposcan',
    name: 'ExpoScan',
    eyebrow: 'Mobile-first · Eventos',
    description:
      'Experiência de consulta instantânea de produtos por leitura de código de barras para equipe comercial em feiras e showroom.',
    outcome:
      'Informação de produto no ponto de uso: menos procura manual e uma experiência comercial mais fluida.',
    image: 'https://i.imgur.com/2TbAMxX.jpeg',
    alt: 'Interface mobile do Startools ExpoScan',
    tags: ['Mobile UX', 'Barcode', 'Operações', 'Produto'],
    bullets: [
      'Fluxo desenhado para uso com uma mão e consultas rápidas em ambiente de evento.',
      'Priorização de legibilidade, velocidade e acesso imediato a informações críticas.',
      'Produto orientado a uma necessidade observada diretamente na operação.',
    ],
  },
  {
    id: 'product-match',
    name: 'Product Match',
    eyebrow: 'Competitive Intelligence',
    description:
      'Sistema para aproximar o catálogo interno de produtos concorrentes e apoiar análise comercial em escala.',
    outcome:
      'Uma camada de inteligência que transforma comparação manual em um fluxo estruturado de decisão.',
    image: 'https://i.imgur.com/M88eZZj.jpeg',
    alt: 'Dashboard do sistema Product Match',
    tags: ['Data', 'Matching', 'Inteligência', 'B2B'],
    bullets: [
      'Modelagem do problema de comparação e dos critérios necessários para um match útil.',
      'Fluxo pensado para revisão humana, rastreabilidade e análise de catálogo.',
      'Conecta contexto comercial, qualidade de dados e automação.',
    ],
  },
  {
    id: 'linguacombo',
    name: 'LinguaCombo',
    eyebrow: 'EdTech · Growth',
    description:
      'Proposta de educação em idiomas com oferta simplificada, pricing acessível e jornada digital orientada à conversão.',
    outcome:
      'Produto pensado de ponta a ponta: proposta de valor, experiência, oferta, comunicação e compra.',
    image: 'https://i.imgur.com/cPWETJJ.jpeg',
    alt: 'Landing page do projeto LinguaCombo',
    tags: ['Growth', 'Pricing', 'UX', 'EdTech'],
    bullets: [
      'Estruturação de proposta de valor e arquitetura da jornada de compra.',
      'Comunicação simples para reduzir carga cognitiva e objeções no funil.',
      'Conexão entre produto, marketing e experiência digital.',
    ],
  },
  {
    id: 'etiquetas',
    name: 'Showroom Labels',
    eyebrow: 'Automação · Operação física',
    description:
      'Sistema para padronizar e acelerar a geração de etiquetas de produtos e variações de showroom.',
    outcome:
      'Menos trabalho repetitivo e mais consistência entre dado digital e execução física.',
    image: 'https://i.imgur.com/ogcl5OT.jpeg',
    alt: 'Sistema de geração de etiquetas para showroom',
    tags: ['Automação', 'Print', 'Catálogo', 'UX'],
    bullets: [
      'Fluxos adaptados a modelos físicos de etiqueta e regras reais de impressão.',
      'Padronização de informação para milhares de itens e variações.',
      'Interface criada para uma operação recorrente, não para uma demonstração.',
    ],
  },
  {
    id: 'quark',
    name: 'Quark-IT',
    eyebrow: 'Produto & Negócios',
    description:
      'Plataforma e presença digital para transformar serviços tecnológicos em uma proposta clara, navegável e orientada a conversas comerciais.',
    outcome:
      'Um laboratório prático de produto, aquisição e entrega que conecta estratégia a software.',
    image: 'https://i.imgur.com/hgNEjNj.jpeg',
    alt: 'Website e portfólio da Quark-IT',
    tags: ['Product Strategy', 'Web', 'Growth', 'Delivery'],
    bullets: [
      'Posicionamento, arquitetura de informação e experiência de entrada para serviços.',
      'Construção iterativa de páginas, ferramentas e automações conforme necessidades reais.',
      'Visão de negócio combinada com capacidade de implementação.',
    ],
  },
];

const capabilityGroups = [
  {
    title: 'Produto',
    kicker: 'Da pergunta ao produto',
    skills: ['Discovery', 'Roadmap', 'Prioritização', 'Experimentação', 'Product Strategy', 'UX flows'],
  },
  {
    title: 'Sistemas',
    kicker: 'Da ideia à arquitetura',
    skills: ['React', 'TypeScript', 'Vite', 'Vercel', 'Supabase', 'SQL', 'APIs'],
  },
  {
    title: 'Dados & IA',
    kicker: 'Da informação à decisão',
    skills: ['LLMs', 'Automação', 'Data quality', 'Dashboards', 'Matching', 'Analytics'],
  },
  {
    title: 'Operações',
    kicker: 'Do processo ao fluxo',
    skills: ['B2B Ops', 'Master Data', 'Logística', 'ERP', 'Process mapping', 'Manufatura'],
  },
];

const education = [
  ['Universidade Federal do ABC', 'Engenharia Aeroespacial', '2022 — 2027'],
  ['Escola PM3', 'Product Management & Product Design', '2023'],
  ['SENAI Mercedes-Benz', 'Manufatura Automotiva & Mecânica', '2019 — 2021'],
  ['Cambridge Assessment', 'English C1 Advanced', '2022'],
];

const Icon: React.FC<{ id: NavId }> = ({ id }) => {
  const common = { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.9, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };

  if (id === 'inicio') {
    return <svg {...common}><path d="M3.5 10.8 12 3.8l8.5 7"/><path d="M5.7 9.8v10.1h12.6V9.8"/><path d="M9.6 19.9v-6.2h4.8v6.2"/></svg>;
  }
  if (id === 'experiencia') {
    return <svg {...common}><rect x="4" y="5.3" width="16" height="14.2" rx="3"/><path d="M8.5 5.3V3.8h7v1.5"/><path d="M4 11.2h16"/><path d="M9.5 11.2v1.7h5v-1.7"/></svg>;
  }
  if (id === 'projetos') {
    return <svg {...common}><path d="m5 17.5 4.4-4.4"/><path d="m14.7 8 4.3-4.3"/><path d="M14.1 4.4 19 3.7l-.7 4.9"/><path d="M4.7 12.1 3.8 20l7.9-.9 7.1-7.1-7-7Z"/><path d="m8.7 8.1 7.2 7.2"/></svg>;
  }
  if (id === 'competencias') {
    return <svg {...common}><path d="M12 3.5 19.5 8v8L12 20.5 4.5 16V8Z"/><path d="m4.8 8.2 7.2 4.2 7.2-4.2"/><path d="M12 12.4v8"/></svg>;
  }
  return <svg {...common}><path d="M4 6.2h16v11.6H4z"/><path d="m4.4 6.7 7.6 6 7.6-6"/></svg>;
};

const ArrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14"/><path d="m14 7 5 5-5 5"/>
  </svg>
);

const ExternalIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14 5h5v5"/><path d="M10 14 19 5"/><path d="M19 13v6H5V5h6"/>
  </svg>
);

const PortfolioNavigation: React.FC<{ active: NavId; onNavigate: (id: NavId) => void }> = ({ active, onNavigate }) => {
  return (
    <>
      <header className="desktop-header" aria-label="Cabeçalho do portfólio">
        <a className="brand-mark" href="#inicio" onClick={() => onNavigate('inicio')} aria-label="Leonardo Brykcy — início">
          <span>LB</span>
          <strong>Leonardo Brykcy</strong>
        </a>

        <nav className="ios-dock ios-dock--desktop" aria-label="Navegação principal">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`dock-item ${active === item.id ? 'is-active' : ''}`}
              aria-current={active === item.id ? 'page' : undefined}
              onClick={() => onNavigate(item.id)}
            >
              <span className="dock-icon"><Icon id={item.id} /></span>
              <span className="dock-label">{item.label}</span>
            </a>
          ))}
        </nav>

        <a className="header-cta" href="mailto:leobrykcy.product@gmail.com">Conversar <ArrowIcon /></a>
      </header>

      <nav className="ios-dock ios-dock--mobile" aria-label="Navegação móvel">
        {navigation.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`dock-item ${active === item.id ? 'is-active' : ''}`}
            aria-current={active === item.id ? 'page' : undefined}
            onClick={() => onNavigate(item.id)}
          >
            <span className="dock-icon"><Icon id={item.id} /></span>
            <span className="dock-label">{item.shortLabel}</span>
          </a>
        ))}
      </nav>
    </>
  );
};

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<NavId>('inicio');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const sectionIds = useMemo(() => navigation.map((item) => item.id), []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id as NavId);
      },
      { rootMargin: '-24% 0px -55% 0px', threshold: [0.08, 0.2, 0.45, 0.7] },
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  useEffect(() => {
    if (!selectedProject) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedProject(null);
    };

    window.addEventListener('keydown', handleEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleEscape);
    };
  }, [selectedProject]);

  const navigateTo = (id: NavId) => {
    setActiveSection(id);
  };

  return (
    <div className="site-shell">
      <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
      <PortfolioNavigation active={activeSection} onNavigate={navigateTo} />

      <main id="conteudo">
        <section id="inicio" className="hero section-anchor" aria-labelledby="hero-title">
          <div className="hero-ambient" aria-hidden="true">
            <span className="orb orb-a" />
            <span className="orb orb-b" />
            <span className="orb orb-c" />
          </div>

          <div className="hero-grid page-width">
            <div className="hero-copy reveal-copy">
              <p className="eyebrow"><span className="status-dot" /> Leonardo Sales Brykcy · Product Builder</p>
              <h1 id="hero-title">
                Produto.<br />
                Sistemas. <span className="hero-accent">IA.</span><br />
                <em>Operação real.</em>
              </h1>
              <p className="hero-lead">
                Atuo como <strong>Product Manager e Product Builder</strong>. Transformo problemas complexos de negócio e operação em produtos digitais, dados e automações que as pessoas realmente conseguem usar.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projetos">Ver cases <ArrowIcon /></a>
                <a className="button button-secondary" href="https://www.linkedin.com/in/leonardo-brykcy" target="_blank" rel="noreferrer">LinkedIn <ExternalIcon /></a>
              </div>
              <div className="hero-proof" aria-label="Resumo profissional">
                <span>Mercedes-Benz</span><i />
                <span>FluencyPass</span><i />
                <span>Startools</span><i />
                <span>Quark-IT</span>
              </div>
            </div>

            <aside className="hero-profile" aria-label="Perfil profissional de Leonardo Brykcy">
              <div className="profile-frame">
                <div className="profile-glow" aria-hidden="true" />
                <img src={PROFILE_IMAGE} alt="Leonardo Sales Brykcy" width="540" height="540" fetchPriority="high" decoding="async" />
                <div className="profile-caption">
                  <span className="caption-kicker">Product · Systems · AI</span>
                  <strong>Estratégia com capacidade de execução.</strong>
                </div>
              </div>
              <div className="availability-card">
                <span className="availability-pulse" />
                <div>
                  <small>Base</small>
                  <strong>São Bernardo do Campo · SP</strong>
                </div>
                <span className="availability-tag">PT / EN / FR</span>
              </div>
            </aside>
          </div>

          <div className="impact-strip page-width" aria-label="Indicadores de experiência">
            <article><strong>1.910</strong><span>SKUs sob governança de dados B2B</span></article>
            <article><strong>320+</strong><span>cadastros e ajustes estruturais realizados</span></article>
            <article><strong>7+</strong><span>sistemas e ferramentas internas construídos</span></article>
            <article><strong>2019→</strong><span>manufatura, produto, IA e sistemas</span></article>
          </div>
        </section>

        <section id="experiencia" className="section section-anchor section-light" aria-labelledby="experience-title">
          <div className="page-width">
            <div className="section-heading">
              <p className="eyebrow eyebrow-dark">Trajetória</p>
              <h2 id="experience-title">Uma carreira construída entre<br /><span>o físico e o digital.</span></h2>
              <p>Minha vantagem não é conhecer só produto ou só tecnologia. É entender como produto, processo, dados, engenharia e pessoas se encontram no mundo real.</p>
            </div>

            <div className="timeline">
              {experiences.map((experience, index) => (
                <article className="timeline-item" key={experience.company}>
                  <div className="timeline-index" aria-hidden="true">0{index + 1}</div>
                  <div className="timeline-main">
                    <div className="timeline-meta">
                      <span>{experience.period}</span>
                      <span>{experience.location}</span>
                    </div>
                    <h3>{experience.company}</h3>
                    <p className="timeline-role">{experience.role}</p>
                    <p className="timeline-summary">{experience.summary}</p>
                  </div>
                  <ul className="timeline-highlights">
                    {experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projetos" className="section section-anchor projects-section" aria-labelledby="projects-title">
          <div className="page-width">
            <div className="section-heading section-heading-dark">
              <p className="eyebrow">Selected work</p>
              <h2 id="projects-title">Cases que começam<br /><span>em problemas reais.</span></h2>
              <p>Sem percentuais inventados e sem buzzword vazia: contexto, decisão, sistema e impacto operacional.</p>
            </div>

            <div className="project-grid">
              {projects.map((project, index) => (
                <article className={`project-card project-card-${(index % 3) + 1}`} key={project.id}>
                  <button className="project-open" onClick={() => setSelectedProject(project)} aria-label={`Abrir case ${project.name}`}>
                    <div className="project-visual">
                      <img src={project.image} alt={project.alt} loading="lazy" decoding="async" />
                      <span className="project-number">0{index + 1}</span>
                      <span className="project-arrow"><ArrowIcon /></span>
                    </div>
                    <div className="project-body">
                      <p className="project-eyebrow">{project.eyebrow}</p>
                      <h3>{project.name}</h3>
                      <p>{project.description}</p>
                      <div className="chip-row">
                        {project.tags.map((tag) => <span className="chip" key={tag}>{tag}</span>)}
                      </div>
                    </div>
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="competencias" className="section section-anchor capabilities-section" aria-labelledby="capabilities-title">
          <div className="page-width">
            <div className="section-heading">
              <p className="eyebrow eyebrow-dark">Capabilities</p>
              <h2 id="capabilities-title">Menos caixinhas.<br /><span>Mais conexão.</span></h2>
              <p>Eu opero melhor nas fronteiras: onde estratégia precisa virar sistema, onde dado precisa virar decisão e onde processo precisa virar produto.</p>
            </div>

            <div className="capability-grid">
              {capabilityGroups.map((group, index) => (
                <article className="capability-card" key={group.title}>
                  <span className="capability-number">0{index + 1}</span>
                  <p>{group.kicker}</p>
                  <h3>{group.title}</h3>
                  <div className="capability-skills">
                    {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
                  </div>
                </article>
              ))}
            </div>

            <div className="education-panel">
              <div>
                <p className="eyebrow eyebrow-dark">Formação & credenciais</p>
                <h3>Base técnica, produto<br />e repertório interdisciplinar.</h3>
              </div>
              <div className="education-list">
                {education.map(([institution, course, period]) => (
                  <div className="education-row" key={`${institution}-${course}`}>
                    <div><strong>{institution}</strong><span>{course}</span></div>
                    <time>{period}</time>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contato" className="contact-section section-anchor" aria-labelledby="contact-title">
          <div className="contact-ambient" aria-hidden="true" />
          <div className="page-width contact-grid">
            <div>
              <p className="eyebrow">Próximo problema</p>
              <h2 id="contact-title">Se é complexo,<br /><span>melhor ainda.</span></h2>
            </div>
            <div className="contact-copy">
              <p>Produto, operações, IA, sistemas internos ou uma ideia que ainda não tem forma. Se existe um problema importante por trás, eu quero entender.</p>
              <div className="contact-actions">
                <a className="button button-light" href="mailto:leobrykcy.product@gmail.com">leobrykcy.product@gmail.com <ArrowIcon /></a>
                <a className="text-link" href="https://www.linkedin.com/in/leonardo-brykcy" target="_blank" rel="noreferrer">LinkedIn <ExternalIcon /></a>
                <a className="text-link" href="https://github.com/Bryckzy" target="_blank" rel="noreferrer">GitHub <ExternalIcon /></a>
              </div>
            </div>
          </div>
          <footer className="site-footer page-width">
            <span>© {new Date().getFullYear()} Leonardo Sales Brykcy</span>
            <span>Product · Systems · AI · Operations</span>
          </footer>
        </section>
      </main>

      {selectedProject && (
        <div className="case-modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.currentTarget === event.target) setSelectedProject(null); }}>
          <article className="case-modal" role="dialog" aria-modal="true" aria-labelledby="case-modal-title">
            <button ref={closeButtonRef} className="modal-close" onClick={() => setSelectedProject(null)} aria-label="Fechar case">×</button>
            <div className="modal-visual">
              <img src={selectedProject.image} alt={selectedProject.alt} />
            </div>
            <div className="modal-content">
              <p className="project-eyebrow">{selectedProject.eyebrow}</p>
              <h2 id="case-modal-title">{selectedProject.name}</h2>
              <p className="modal-description">{selectedProject.description}</p>
              <div className="modal-outcome"><small>Impacto</small><strong>{selectedProject.outcome}</strong></div>
              <ul>{selectedProject.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
              <div className="chip-row">{selectedProject.tags.map((tag) => <span className="chip chip-dark" key={tag}>{tag}</span>)}</div>
            </div>
          </article>
        </div>
      )}
    </div>
  );
};

export default App;
