import React from 'react';
import type { Certification, ContactLink, Education, Experience, NavLink, ProjectShowcaseItem } from './types';
import { EmailIcon, GitHubIcon, LinkedInIcon, ShareIcon } from './components/Icons';
import Header from './src/components/Header';
import ProjectSection from './src/components/ProjectSection';

const PROFILE_IMAGE_URL = 'https://avatars.githubusercontent.com/u/69459277?v=4';

const navLinksData: NavLink[] = [
  { href: '#overview', label: 'Início' },
  { href: '#experiencia', label: 'Experiência' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#contato', label: 'Contato' },
];

const contactLinksData: ContactLink[] = [
  { href: 'mailto:leobrykcy.product@gmail.com', label: 'Email', icon: <EmailIcon />, ariaLabel: 'Enviar email para Leonardo Brykcy' },
  { href: 'https://www.linkedin.com/in/leonardo-brykcy', label: 'LinkedIn', icon: <LinkedInIcon />, ariaLabel: 'Abrir LinkedIn de Leonardo Brykcy' },
  { href: 'https://github.com/Bryckzy', label: 'GitHub', icon: <GitHubIcon />, ariaLabel: 'Abrir GitHub de Leonardo Brykcy' },
];

const impactMetrics = [
  { value: '1.910', label: 'SKUs em catálogo', detail: 'governança, fiscal, logística e qualidade de dados' },
  { value: '320+', label: 'cadastros revisados', detail: 'atributos críticos, GTIN, NCM, peso e cubagem' },
  { value: '10+', label: 'sistemas e automações', detail: 'produto, operações, dados, RH e produtividade' },
  { value: '1,5M+', label: 'impressões em growth', detail: 'experiência prática em aquisição e performance' },
];

const capabilities = [
  {
    index: '01',
    title: 'Product Strategy',
    text: 'Discovery, priorização, métricas e tradução de problemas ambíguos em produtos que pessoas realmente conseguem usar.',
    tags: ['Discovery', 'Roadmap', 'UX', 'Growth'],
  },
  {
    index: '02',
    title: 'Systems & Automation',
    text: 'Desenho e construção de ferramentas internas, integrações e fluxos que removem trabalho manual e reduzem ruído operacional.',
    tags: ['React', 'Vite', 'APIs', 'Supabase'],
  },
  {
    index: '03',
    title: 'Data & AI',
    text: 'Dados como infraestrutura de decisão: modelagem, qualidade, dashboards e aplicações práticas de IA/LLM em produtos e operações.',
    tags: ['SQL', 'LLM', 'Analytics', 'Automation'],
  },
];

const experienceData: Experience[] = [
  {
    id: 'exp-startools',
    title: 'Product Systems & Data',
    company: 'Startools Ferramentas',
    period: '2025 — 2026',
    location: 'São Bernardo do Campo, SP',
    logoUrl: 'https://i.imgur.com/q7hnTeR.png',
    description: [
      'Governança e saneamento de dados de produto em um catálogo de aproximadamente 1.910 SKUs, conectando ERP, compliance fiscal e operação logística.',
      'Criação de uma suíte de ferramentas internas para logística, GTIN, product matching, etiquetas, showroom, RH e análise operacional.',
      'Modelagem de fluxos de frete, redespacho e NF-e, com integração entre necessidades de negócio, dados e sistemas.',
    ],
  },
  {
    id: 'exp-quark',
    title: 'Founder · Product & Systems',
    company: 'Quark-IT',
    period: '2020 — projetos independentes',
    location: 'Brasil',
    logoUrl: 'https://i.imgur.com/cwCk6d6.png',
    description: [
      'Condução de projetos digitais para negócios locais e operações B2B, do diagnóstico ao lançamento.',
      'Arquitetura de soluções com React, Vercel, Supabase, automações e integrações com IA.',
      'Atuação próxima ao negócio: posicionamento, aquisição, experiência, dados e melhoria contínua do produto.',
    ],
  },
  {
    id: 'exp-fluency',
    title: 'Product Owner · AI & Learning',
    company: 'Fluencypass',
    period: '2023 — 2024',
    location: 'São Paulo, SP',
    logoUrl: 'https://i.imgur.com/b83BoxP_d.webp?maxwidth=760&fidelity=grand',
    description: [
      'Produto EdTech com experimentação em IA generativa e avaliação adaptativa de proficiência.',
      'Prototipação de experiências, definição de requisitos e colaboração direta com engenharia e stakeholders de negócio.',
      'Roadmap orientado por aprendizagem, retenção e redução de fricção na jornada do aluno.',
    ],
  },
  {
    id: 'exp-mb',
    title: 'Prototype & Production',
    company: 'Mercedes-Benz do Brasil',
    period: '2019 — 2023',
    location: 'São Bernardo do Campo, SP',
    logoUrl: 'https://i.imgur.com/mFq1vmJ.png',
    description: [
      'Experiência em protótipos, produção e validação em ambiente industrial de alta complexidade.',
      'Participação em iniciativas ligadas a veículos elétricos, testes e desenvolvimento de soluções para operações especiais.',
      'Base técnica em precisão, segurança, qualidade e resolução estruturada de problemas — hoje aplicada à construção de produtos digitais.',
    ],
  },
];

const projectShowcaseData: ProjectShowcaseItem[] = [
  {
    id: 'p-ops-suite',
    name: 'Startools Operations Suite',
    category: 'Product Systems',
    context: 'Uma operação B2B dependia de ERP, planilhas e tarefas manuais para manter produto, logística, showroom e processos internos sincronizados.',
    role: [
      'Mapeamento de gargalos operacionais e definição das prioridades de produto',
      'Arquitetura e construção de ferramentas conectadas ao fluxo real da empresa',
      'Estruturação de dados, validações e interfaces para uso recorrente pelas equipes',
    ],
    solution: 'Uma suíte de sistemas internos cobrindo logística, geração de GTIN, product matching, etiquetas, showroom, RH e análise de transportadoras.',
    results: [
      'Catálogo de aproximadamente 1.910 SKUs tratado como base operacional estruturada',
      'Mais de 320 cadastros e atributos críticos revisados e normalizados',
      'Redução da dependência de tarefas manuais em fluxos recorrentes de operação',
    ],
    imageUrls: ['https://i.imgur.com/Y4WpiHQ.jpeg', 'https://i.imgur.com/M88eZZj.jpeg'],
    techStack: ['React', 'Vite', 'Supabase', 'SQL', 'APIs', 'Product Ops'],
    featured: true,
  },
  {
    id: 'p-logistics',
    name: 'Startools Logistics',
    category: 'Logistics Intelligence',
    context: 'Acompanhar entregas, transportadoras e desempenho logístico exigia leitura manual de dados dispersos e dificultava comparar eficiência.',
    role: [
      'Desenho do modelo de acompanhamento de entregas e transportadoras',
      'Definição de KPIs como média, P90, eficiência e custo',
      'Construção da experiência para leitura rápida do desempenho operacional',
    ],
    solution: 'Dashboard e fluxo operacional para consolidar dados de entrega e transformar histórico logístico em decisão.',
    results: [
      'Comparação de transportadoras com métricas consistentes em uma única visão',
      'Maior clareza sobre prazo, dispersão e custo por operação',
      'Base para decisões de cotação, redespacho e gestão de SLA',
    ],
    imageUrls: ['https://i.imgur.com/Y4WpiHQ.jpeg', 'https://i.imgur.com/AVBj6rs.jpeg'],
    techStack: ['Product Analytics', 'Logistics', 'Dashboards', 'Data Ops'],
  },
  {
    id: 'p-productmatch',
    name: 'Product Match',
    category: 'Competitive Intelligence',
    context: 'Comparar um catálogo interno com concorrentes era lento, inconsistente e difícil de escalar manualmente.',
    role: [
      'Definição do problema de matching e dos critérios de comparação',
      'Desenho do fluxo de análise e das regras de correspondência',
      'Priorização de uma interface que evidencia diferenças relevantes para decisão comercial',
    ],
    solution: 'Sistema para cruzar produtos internos e concorrentes, organizando evidências para análise de preço, posicionamento e catálogo.',
    results: [
      'Processo comparativo transformado de busca manual em fluxo estruturado',
      'Melhor rastreabilidade da lógica usada para identificar correspondências',
      'Base reutilizável para inteligência competitiva em escala',
    ],
    imageUrls: ['https://i.imgur.com/M88eZZj.jpeg', 'https://i.imgur.com/E2bNbOV.jpeg'],
    techStack: ['Data Matching', 'Competitive Intelligence', 'Automation'],
    repoLink: 'https://github.com/Bryckzy/Product-Match-Startools',
  },
  {
    id: 'p-exposcan',
    name: 'ExpoScan',
    category: 'Mobile Operations',
    context: 'Em feiras e showroom, a equipe comercial precisava consultar informações de produto rapidamente sem navegar por planilhas ou catálogos extensos.',
    role: [
      'Mapeamento da jornada de consulta em campo',
      'Definição da experiência mobile-first e do fluxo por código de barras',
      'Priorização de velocidade, legibilidade e baixa fricção operacional',
    ],
    solution: 'Aplicação móvel para leitura de códigos e acesso imediato às informações de produto durante atendimento presencial.',
    results: [
      'Consulta de produto reduzida a uma interação direta pelo celular',
      'Experiência preparada para catálogos com milhares de itens e variações',
      'Menos dependência de materiais auxiliares durante eventos e showroom',
    ],
    imageUrls: ['https://i.imgur.com/2TbAMxX.jpeg', 'https://i.imgur.com/dIXJwvy.jpeg'],
    techStack: ['Mobile-first', 'Barcode', 'Sales Ops'],
    repoLink: 'https://github.com/Bryckzy/Startools-ExpoScan',
  },
  {
    id: 'p-ofertaai',
    name: 'OfertaAI',
    category: 'AI Commerce',
    context: 'Recomendações de produtos em canais de mensagem normalmente exigem pesquisa manual, copy e montagem do link comercial.',
    role: [
      'Definição do fluxo conversacional e da proposta de valor',
      'Integração entre busca de produtos, geração de texto e regras de monetização',
      'Instrumentação para acompanhar uso, pesquisas, erros e custo computacional',
    ],
    solution: 'Bot de WhatsApp que pesquisa produtos, gera recomendações e organiza links de afiliado em um único fluxo conversacional.',
    results: [
      'Arquitetura pensada para operar com WhatsApp, Supabase e backend em nuvem',
      'Automação de uma jornada que antes exigia múltiplas etapas manuais',
      'Base de produto preparada para medir comportamento e custo por interação',
    ],
    techStack: ['WhatsApp', 'LLM', 'Supabase', 'APIs', 'Analytics'],
  },
  {
    id: 'p-level-test',
    name: 'Adaptive Level Test',
    category: 'AI · EdTech',
    context: 'Testes lineares de idioma podem gerar avaliações longas e pouco adaptadas ao nível real de cada aluno.',
    role: [
      'Exploração de avaliação adaptativa e lógica inspirada em Item Response Theory',
      'Prototipação da jornada e dos critérios de progressão do teste',
      'Tradução entre objetivo pedagógico, experiência do usuário e viabilidade técnica',
    ],
    solution: 'Experiência adaptativa que ajusta o percurso de avaliação conforme respostas e sinais de proficiência.',
    results: [
      'Menor necessidade de expor todos os usuários ao mesmo percurso de prova',
      'Estrutura preparada para personalização e experimentação contínua',
      'Aplicação concreta de IA em uma decisão central do produto educacional',
    ],
    techStack: ['Product Discovery', 'AI', 'IRT', 'EdTech'],
  },
];

const educationData: Education[] = [
  {
    id: 'edu-ufabc-aero',
    institution: 'Universidade Federal do ABC',
    degree: 'Engenharia Aeroespacial · formação interdisciplinar',
    period: '2022 — em andamento',
    details: 'Ciência, engenharia e sistemas complexos como complemento à atuação em produto e tecnologia.',
    logoUrl: 'https://i.imgur.com/MiEi4Je.png',
  },
  {
    id: 'edu-pm3',
    institution: 'Escola PM3',
    degree: 'Product Management & Product Design',
    period: '2023',
    details: 'Formação em discovery, estratégia, experiência e desenvolvimento de produtos digitais.',
    logoUrl: 'https://i.imgur.com/1NHtBuj.png',
  },
  {
    id: 'edu-senai',
    institution: 'SENAI Mercedes-Benz',
    degree: 'Manufatura Automotiva & Mecânica',
    period: '2019 — 2021',
    details: 'Fundação técnica em manufatura, precisão, processos e ambiente industrial.',
    logoUrl: 'https://i.imgur.com/NnL38S1.png',
  },
];

const certificationData: Certification[] = [
  { id: 'cert-pm', name: 'Product Management', issuer: 'Escola PM3', year: '2023' },
  { id: 'cert-pd', name: 'Product Design', issuer: 'Escola PM3', year: '2023' },
  { id: 'cert-cambridge', name: 'C1 Advanced English', issuer: 'Cambridge Assessment', year: '2022' },
  { id: 'cert-senai', name: 'Empreendedorismo', issuer: 'SENAI-SP', year: '2021' },
];

const App: React.FC = () => {
  const handleShare = async () => {
    const shareData = {
      title: 'Leonardo Brykcy | Product, Systems & AI',
      text: 'Portfólio de Leonardo Brykcy — Product, Systems, Data & AI.',
      url: window.location.origin,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        return;
      }
    }

    try {
      await navigator.clipboard.writeText(window.location.origin);
    } catch {
      // Clipboard can be unavailable in older browsers; the visible URL remains shareable.
    }
  };

  return (
    <div className="site-shell">
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Header navLinks={navLinksData} />

      <main id="conteudo">
        <section id="overview" className="hero-section section-anchor" aria-labelledby="hero-title">
          <div className="hero-mesh" aria-hidden="true">
            <span className="hero-orb hero-orb-one" />
            <span className="hero-orb hero-orb-two" />
            <span className="hero-orb hero-orb-three" />
          </div>

          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Product · Systems · Data · AI</p>
              <h1 id="hero-title">
                <span className="hero-name">Leonardo Brykcy.</span>
                <span className="hero-statement">Eu transformo operação complexa em produto que funciona.</span>
              </h1>
              <p className="hero-description">
                Product Manager e builder com experiência entre indústria, EdTech e operações B2B. Uno estratégia, dados e engenharia para sair do problema ambíguo até uma solução usada no dia a dia.
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href="#projetos">Ver projetos <span aria-hidden="true">↘</span></a>
                <a className="button button-secondary" href="https://www.linkedin.com/in/leonardo-brykcy" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
                <button className="icon-button" type="button" onClick={handleShare} aria-label="Compartilhar portfólio">
                  <ShareIcon className="icon" />
                </button>
              </div>

              <div className="hero-meta" aria-label="Informações profissionais">
                <span>São Bernardo do Campo, SP</span>
                <span>PT · EN · FR</span>
                <span>UFABC</span>
              </div>
            </div>

            <aside className="hero-profile-card" aria-label="Resumo profissional">
              <div className="portrait-frame">
                <img
                  src={PROFILE_IMAGE_URL}
                  width="460"
                  height="460"
                  alt="Leonardo Brykcy"
                  fetchPriority="high"
                  decoding="async"
                />
                <span className="portrait-status">Disponível para conversas</span>
              </div>
              <div className="profile-card-copy">
                <span className="profile-kicker">Product × Engineering</span>
                <p>Produto com profundidade técnica suficiente para construir, medir e iterar — sem perder o negócio de vista.</p>
              </div>
            </aside>
          </div>
        </section>

        <section className="proof-section" aria-labelledby="proof-title">
          <div className="container">
            <div className="section-heading compact">
              <p className="eyebrow">Evidência antes de discurso</p>
              <h2 id="proof-title">Escala real. Sistemas reais. Problemas reais.</h2>
            </div>
            <div className="metric-grid">
              {impactMetrics.map((metric) => (
                <article className="metric-card" key={metric.label}>
                  <strong>{metric.value}</strong>
                  <h3>{metric.label}</h3>
                  <p>{metric.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="impacto" className="capabilities-section section-anchor" aria-labelledby="capabilities-title">
          <div className="container split-heading">
            <div className="section-heading">
              <p className="eyebrow">Como eu opero</p>
              <h2 id="capabilities-title">Da pergunta certa até o software rodando.</h2>
            </div>
            <p className="section-lede">Minha vantagem não é ficar em uma única camada. Eu consigo circular entre negócio, experiência, arquitetura, dados e execução para reduzir perda de contexto.</p>
          </div>

          <div className="container capability-grid">
            {capabilities.map((capability) => (
              <article className="capability-card" key={capability.title}>
                <span className="capability-index">{capability.index}</span>
                <h3>{capability.title}</h3>
                <p>{capability.text}</p>
                <div className="tag-row">
                  {capability.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experiencia" className="experience-section section-anchor" aria-labelledby="experience-title">
          <div className="container split-heading">
            <div className="section-heading">
              <p className="eyebrow">Trajetória</p>
              <h2 id="experience-title">Indústria, IA, produto e operação.</h2>
            </div>
            <p className="section-lede">Uma carreira pouco linear — e justamente por isso útil para produtos que vivem entre mundo físico, software e processos reais.</p>
          </div>

          <div className="container timeline">
            {experienceData.map((experience) => (
              <article className="timeline-item" key={experience.id}>
                <div className="timeline-meta">
                  <span>{experience.period}</span>
                  <span>{experience.location}</span>
                </div>
                <div className="timeline-company">
                  {experience.logoUrl && <img src={experience.logoUrl} width="64" height="64" loading="lazy" decoding="async" alt="" />}
                  <div>
                    <h3>{experience.company}</h3>
                    <p>{experience.title}</p>
                  </div>
                </div>
                <ul className="timeline-points">
                  {experience.description.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <ProjectSection projects={projectShowcaseData} />

        <section className="growth-section" aria-labelledby="growth-title">
          <div className="container growth-grid">
            <div className="growth-copy">
              <p className="eyebrow light">Growth & distribution</p>
              <h2 id="growth-title">Construir é metade. Fazer chegar nas pessoas é a outra.</h2>
              <p>Também trabalhei com aquisição, mídia e otimização de funil — uma camada que ajuda a conectar produto com distribuição e resultado de negócio.</p>
            </div>
            <div className="growth-stats" aria-label="Métricas de performance marketing">
              <div><strong>1,5M+</strong><span>impressões</span></div>
              <div><strong>15k+</strong><span>cliques</span></div>
              <div><strong>R$50k+</strong><span>mídia gerida</span></div>
              <div><strong>R$0,10</strong><span>CPC médio em campanhas selecionadas</span></div>
            </div>
          </div>
        </section>

        <section className="education-section" aria-labelledby="education-title">
          <div className="container split-heading">
            <div className="section-heading">
              <p className="eyebrow">Formação</p>
              <h2 id="education-title">Técnica, produto e sistemas complexos.</h2>
            </div>
            <p className="section-lede">A formação acadêmica complementa uma trajetória prática em produto, software e indústria.</p>
          </div>

          <div className="container education-layout">
            <div className="education-list">
              {educationData.map((education) => (
                <article className="education-item" key={education.id}>
                  {education.logoUrl && <img src={education.logoUrl} width="56" height="56" loading="lazy" decoding="async" alt="" />}
                  <div>
                    <span>{education.period}</span>
                    <h3>{education.institution}</h3>
                    <h4>{education.degree}</h4>
                    <p>{education.details}</p>
                  </div>
                </article>
              ))}
            </div>

            <aside className="certification-panel">
              <p className="eyebrow">Certificações</p>
              <div className="certification-list">
                {certificationData.map((certification) => (
                  <div className="certification-row" key={certification.id}>
                    <div>
                      <strong>{certification.name}</strong>
                      <span>{certification.issuer}</span>
                    </div>
                    <span>{certification.year}</span>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section id="contato" className="contact-section section-anchor" aria-labelledby="contact-title">
          <div className="container contact-card">
            <div>
              <p className="eyebrow light">Próximo problema difícil</p>
              <h2 id="contact-title">Se precisa de alguém que entenda o produto e consiga entrar na parte técnica, podemos conversar.</h2>
            </div>
            <div className="contact-actions">
              <a className="button button-light" href="mailto:leobrykcy.product@gmail.com">Enviar email <span aria-hidden="true">↗</span></a>
              <a className="button button-ghost-light" href="https://www.linkedin.com/in/leonardo-brykcy" target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="button button-ghost-light" href="https://github.com/Bryckzy" target="_blank" rel="noreferrer">GitHub</a>
            </div>
            <footer className="site-footer">
              <span>Leonardo Sales Brykcy</span>
              <span>Product · Systems · Data · AI</span>
              <span>© {new Date().getFullYear()}</span>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
