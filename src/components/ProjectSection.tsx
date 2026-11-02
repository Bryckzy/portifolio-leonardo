import React, { useEffect, useRef, useState } from 'react';
import type { ProjectShowcaseItem } from '../../types';

interface ProjectSectionProps {
  projects: ProjectShowcaseItem[];
}

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 19 19 5M9 5h10v10" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="m6 6 12 12M18 6 6 18" />
  </svg>
);

const ChevronIcon: React.FC<{ direction: 'left' | 'right' }> = ({ direction }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d={direction === 'left' ? 'm15 18-6-6 6-6' : 'm9 6 6 6-6 6'} />
  </svg>
);

const ProjectSection: React.FC<ProjectSectionProps> = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectShowcaseItem | null>(null);
  const [imageIndex, setImageIndex] = useState(0);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!selectedProject) return;

    returnFocusRef.current = document.activeElement as HTMLElement;
    document.body.classList.add('modal-open');
    requestAnimationFrame(() => closeRef.current?.focus());

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedProject(null);
        return;
      }

      if (event.key !== 'Tab' || !dialogRef.current) return;

      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'),
      );

      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', onKeyDown);
      returnFocusRef.current?.focus?.();
    };
  }, [selectedProject]);

  const openProject = (project: ProjectShowcaseItem) => {
    setImageIndex(0);
    setSelectedProject(project);
  };

  const closeProject = () => setSelectedProject(null);
  const images = selectedProject?.imageUrls ?? [];

  const moveImage = (direction: 1 | -1) => {
    if (!images.length) return;
    setImageIndex((current) => (current + direction + images.length) % images.length);
  };

  return (
    <section id="projetos" className="projects-section section-anchor" aria-labelledby="projects-title">
      <div className="container split-heading">
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h2 id="projects-title">Cases que mostram como eu penso e construo.</h2>
        </div>
        <p className="section-lede">Menos galeria de telas, mais contexto: problema, decisão, solução e o que mudou depois.</p>
      </div>

      <div className="container project-grid">
        {projects.map((project, index) => {
          const cover = project.imageUrls?.[0];
          const isFeatured = project.featured || index === 0;

          return (
            <article className={`project-card ${isFeatured ? 'project-card-featured' : ''}`} key={project.id}>
              <button className="project-card-button" type="button" onClick={() => openProject(project)} aria-label={`Abrir case ${project.name}`}>
                <div className={`project-visual ${cover ? 'has-image' : 'project-visual-generated'}`}>
                  {cover ? (
                    <img src={cover} loading="lazy" decoding="async" alt={`Interface do projeto ${project.name}`} />
                  ) : (
                    <div className="generated-art" aria-hidden="true">
                      <span>{project.name.split(' ').map((part) => part[0]).slice(0, 3).join('')}</span>
                    </div>
                  )}
                  <span className="project-number">0{index + 1}</span>
                </div>

                <div className="project-card-content">
                  <div className="project-card-topline">
                    <span>{project.category}</span>
                    <span className="project-arrow"><ArrowIcon /></span>
                  </div>
                  <h3>{project.name}</h3>
                  <p>{project.solution}</p>
                  <div className="tag-row project-tags">
                    {project.techStack?.slice(0, 4).map((tag) => <span className="tag" key={tag}>{tag}</span>)}
                  </div>
                </div>
              </button>
            </article>
          );
        })}
      </div>

      {selectedProject && (
        <div className="project-dialog-backdrop" onMouseDown={(event) => event.target === event.currentTarget && closeProject()}>
          <div
            ref={dialogRef}
            className="project-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-dialog-title"
          >
            <button ref={closeRef} type="button" className="dialog-close" onClick={closeProject} aria-label="Fechar case">
              <CloseIcon />
            </button>

            <div className="dialog-visual-column">
              <div className={`dialog-visual ${images.length ? '' : 'project-visual-generated'}`}>
                {images.length ? (
                  images.map((url, index) => (
                    <img
                      key={url}
                      className={index === imageIndex ? 'is-visible' : ''}
                      src={url}
                      loading="eager"
                      decoding="async"
                      alt={`${selectedProject.name} — visual ${index + 1}`}
                    />
                  ))
                ) : (
                  <div className="generated-art generated-art-large" aria-hidden="true">
                    <span>{selectedProject.name.split(' ').map((part) => part[0]).slice(0, 3).join('')}</span>
                  </div>
                )}

                {images.length > 1 && (
                  <>
                    <button className="gallery-control gallery-control-left" type="button" onClick={() => moveImage(-1)} aria-label="Imagem anterior">
                      <ChevronIcon direction="left" />
                    </button>
                    <button className="gallery-control gallery-control-right" type="button" onClick={() => moveImage(1)} aria-label="Próxima imagem">
                      <ChevronIcon direction="right" />
                    </button>
                    <div className="gallery-dots" aria-label="Selecionar imagem">
                      {images.map((_, index) => (
                        <button
                          type="button"
                          key={index}
                          onClick={() => setImageIndex(index)}
                          aria-label={`Ver imagem ${index + 1}`}
                          aria-current={index === imageIndex ? 'true' : undefined}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="dialog-content-column">
              <div className="dialog-scroll">
                <p className="eyebrow">{selectedProject.category}</p>
                <h2 id="project-dialog-title">{selectedProject.name}</h2>

                <div className="case-block">
                  <span>Problema</span>
                  <p>{selectedProject.context}</p>
                </div>

                <div className="case-block case-block-emphasis">
                  <span>Minha atuação</span>
                  <ul>
                    {selectedProject.role.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>

                <div className="case-block">
                  <span>Solução</span>
                  <p>{selectedProject.solution}</p>
                </div>

                <div className="case-block outcome-block">
                  <span>Evidências & resultado</span>
                  <ul>
                    {selectedProject.results.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>

                <div className="tag-row dialog-tags">
                  {selectedProject.techStack?.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
                </div>

                {(selectedProject.repoLink || selectedProject.liveLink) && (
                  <div className="dialog-links">
                    {selectedProject.repoLink && <a href={selectedProject.repoLink} target="_blank" rel="noreferrer">Ver repositório <ArrowIcon /></a>}
                    {selectedProject.liveLink && <a href={selectedProject.liveLink} target="_blank" rel="noreferrer">Abrir projeto <ArrowIcon /></a>}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectSection;
