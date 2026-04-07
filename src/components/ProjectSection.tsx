import React, { useState, useEffect } from 'react';
import type { ProjectShowcaseItem } from '../../types';

// Icons for navigation and close safely inlined
const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);

const ChevronLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
);

const ChevronRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
);

interface ProjectSectionProps {
  projects: ProjectShowcaseItem[];
}

const getCategoryEmoji = (category: string) => {
  const cat = category.toLowerCase();
  if (cat.includes('ai')) return '🤖';
  if (cat.includes('business') || cat.includes('growth')) return '💼';
  if (cat.includes('ops') || cat.includes('interno')) return '⚙️';
  if (cat.includes('data')) return '📊';
  if (cat.includes('tooling')) return '🛠️';
  return '✨';
};

const ProjectSection: React.FC<ProjectSectionProps> = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectShowcaseItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Prevent background scroll when modal open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [selectedProject]);

  const openModal = (project: ProjectShowcaseItem) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.imageUrls.length);
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev === 0 ? selectedProject.imageUrls.length - 1 : prev - 1));
    }
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  // Listen for ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="projetos" className="py-32 md:py-48 px-6 bg-[#f9f7f2] relative overflow-hidden">
      {/* Background Blobs for life and color */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[5%] left-[5%] w-[40vw] h-[40vw] min-w-[400px] min-h-[400px] bg-pistachio/60 rounded-full blur-[120px] animate-pulse mix-blend-multiply duration-1000"></div>
        <div className="absolute bottom-[5%] right-[5%] w-[45vw] h-[45vw] min-w-[400px] min-h-[400px] bg-emerald-300/30 rounded-full blur-[130px] mix-blend-multiply duration-1000"></div>
        <div className="absolute top-[40%] left-[50%] w-[35vw] h-[35vw] min-w-[350px] min-h-[350px] bg-amber-200/40 rounded-full blur-[100px] animate-pulse mix-blend-multiply" style={{animationDelay: '1.5s', animationDuration: '4s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 md:mb-32">
          <h2 className="section-title mb-6">Projetos & Impacto.</h2>
          <p className="text-xl md:text-2xl text-gray-500 font-medium max-w-3xl mx-auto leading-relaxed">
            Uma visão consolidada dos principais cases de transformação, estruturados na ótica de <span className="text-apple font-bold bg-white/50 px-3 py-1 rounded-xl shadow-sm border border-white">Product Management</span>.
          </p>
        </div>

        {/* The GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((project) => (
            <button 
              key={project.id}
              onClick={() => openModal(project)}
              className="group text-left rounded-[2.5rem] bg-white/60 backdrop-blur-md border border-white hover:border-emerald-300 overflow-hidden flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(110,231,183,0.3)] transition-all duration-500 transform hover:-translate-y-2 h-full relative"
            >
              <div className="relative aspect-[4/3] w-full bg-white overflow-hidden p-8 md:p-10 border-b border-white/50">
                {/* Subtle colorful gradient behind image */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-100/60 via-pistachio/30 to-emerald-100/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <img 
                  src={project.imageUrls[0]} 
                  alt={project.name} 
                  className="w-full h-full object-contain shrink-0 transition-transform duration-700 group-hover:scale-[1.12] relative z-10 filter drop-shadow-xl" 
                  loading="lazy" 
                />
                
                {/* Hover Glass Overlay Button */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px] z-20">
                  <span className="text-apple font-black uppercase tracking-[0.2em] text-xs flex items-center gap-2 border border-white px-6 py-4 rounded-full bg-white/90 shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:scale-105">
                    Detalhes do Case 👀
                  </span>
                </div>
              </div>

              <div className="p-8 md:p-10 flex flex-col gap-4 flex-grow relative bg-white/40 group-hover:bg-gradient-to-r group-hover:from-pistachio/20 group-hover:to-emerald-50/50 transition-colors duration-500">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-600 block mb-3 flex items-center gap-1.5">
                    <span className="text-sm">{getCategoryEmoji(project.category)}</span> {project.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black tracking-tighter text-apple leading-tight">{project.name}</h3>
                </div>
                
                {/* Highlight prominent metric if any */}
                <div className="mt-auto pt-6 border-t border-apple/5">
                  <p className="text-sm font-semibold text-gray-500 line-clamp-2 leading-relaxed">
                    <span className="text-pistachio-dark mr-2 text-lg leading-none">↗</span>
                    {project.results[0] || project.context.substring(0, 60) + '...'}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* MODAL / DIALOG */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[100] bg-apple/80 backdrop-blur-xl flex items-center justify-center p-4 md:p-6 lg:p-10 animate-fade-in"
          onClick={handleBackdropClick}
        >
          <div 
            className="bg-[#f9f7f2] w-full max-w-[90rem] max-h-[95vh] rounded-[2rem] md:rounded-[3rem] overflow-hidden flex flex-col lg:flex-row relative shadow-[0_30px_100px_rgba(0,0,0,0.8)] ring-1 ring-white/20"
            style={{ transform: 'translateY(0)', animation: 'slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1)' }}
          >
            
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 md:top-6 md:right-6 lg:top-8 lg:right-8 z-[110] p-3 md:p-4 bg-white/80 hover:bg-white text-apple rounded-full shadow-2xl backdrop-blur-md transition-all hover:scale-110 hover:rotate-90 duration-300"
            >
              <CloseIcon />
            </button>

            {/* Left Column: Visuals */}
            <div className="w-full lg:w-1/2 bg-white flex flex-col relative shrink-0 border-b lg:border-b-0 lg:border-r border-apple/5 shadow-[10px_0_40px_rgba(0,0,0,0.03)] z-50 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pistachio/5 to-transparent"></div>
              
              <div className="flex-grow flex items-center justify-center p-6 md:p-12 relative h-[40vh] lg:h-[85vh]">
                {selectedProject.imageUrls.map((url, idx) => (
                  <img 
                    key={idx} 
                    src={url} 
                    alt={`${selectedProject.name} visual ${idx + 1}`} 
                    className={`absolute inset-0 w-full h-full object-contain p-8 md:p-12 lg:p-20 transition-all duration-700 ease-in-out drop-shadow-2xl ${idx === currentImageIndex ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-95 z-0'}`} 
                  />
                ))}

                {/* Carousel Controls */}
                {selectedProject.imageUrls.length > 1 && (
                  <>
                    <button onClick={prevImage} className="absolute left-4 md:left-6 lg:left-10 top-1/2 -translate-y-1/2 z-20 p-3 lg:p-4 bg-white/90 hover:bg-pistachio text-apple rounded-full shadow-xl backdrop-blur-sm transition-all hover:scale-110 border border-apple/5 group">
                      <div className="group-hover:-translate-x-1 transition-transform"><ChevronLeftIcon /></div>
                    </button>
                    <button onClick={nextImage} className="absolute right-4 md:right-6 lg:right-10 top-1/2 -translate-y-1/2 z-20 p-3 lg:p-4 bg-white/90 hover:bg-pistachio text-apple rounded-full shadow-xl backdrop-blur-sm transition-all hover:scale-110 border border-apple/5 group">
                      <div className="group-hover:translate-x-1 transition-transform"><ChevronRightIcon /></div>
                    </button>

                    <div className="absolute bottom-6 md:bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                      {selectedProject.imageUrls.map((_, idx) => (
                        <button 
                          key={idx} 
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`h-2.5 rounded-full transition-all duration-500 ${idx === currentImageIndex ? 'bg-apple w-10' : 'bg-apple/20 hover:bg-apple/50 w-2.5'}`}
                          aria-label={`Go to image ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Right Column: Case Details */}
            <div className="w-full lg:w-1/2 bg-linen-texture overflow-y-auto p-8 md:p-14 lg:p-20 custom-scrollbar h-[60vh] lg:h-[85vh] relative">
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-emerald-600 mb-4 block flex items-center gap-2">
                <span className="text-lg">{getCategoryEmoji(selectedProject.category)}</span> {selectedProject.category}
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter leading-[0.9] text-apple mb-12">{selectedProject.name}</h2>

              <div className="space-y-12">
                {/* Contexto */}
                <div>
                  <h4 className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-apple/40 mb-4 block flex items-center gap-2">
                    <span className="text-lg mr-1">🎯</span> Contexto / Problema
                  </h4>
                  <p className="text-gray-600 font-medium text-base md:text-xl leading-relaxed">{selectedProject.context}</p>
                </div>

                {/* Minha Atuação */}
                <div className="bg-white/80 p-8 md:p-12 rounded-[2.5rem] border border-white hover:border-emerald-300 transition-colors shadow-2xl shadow-emerald-900/5">
                  <h4 className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-emerald-600 mb-6 block flex items-center gap-2">
                     <span className="text-lg mr-1">🚀</span> Minha Atuação como PM
                  </h4>
                  <ul className="space-y-5">
                    {selectedProject.role.map((r, i) => (
                      <li key={i} className="text-base md:text-lg text-gray-700 font-medium flex items-start gap-4">
                        <span className="text-emerald-400 flex-shrink-0 mt-0.5 text-2xl">✦</span>
                        <span className="leading-relaxed">{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solução */}
                <div>
                  <h4 className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-apple/40 mb-4 block flex items-center gap-2">
                    <span className="text-lg mr-1">💡</span> Solução Descrita
                  </h4>
                  <p className="text-gray-600 font-medium text-base md:text-xl leading-relaxed">{selectedProject.solution}</p>
                </div>

                {/* Impacto / Resultados */}
                <div className="bg-[#edf0e6] p-8 md:p-12 rounded-[2.5rem] border border-pistachio/50 shadow-inner overflow-hidden relative">
                  {/* Decorative faint glow */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-pistachio/60 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

                  <h4 className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-apple mb-6 block flex items-center gap-2 relative z-10">
                    <span className="text-lg mr-1">📈</span> Impacto / Resultados
                  </h4>
                  <ul className="space-y-5 relative z-10">
                    {selectedProject.results.map((res, i) => (
                      <li key={i} className="text-base md:text-xl font-semibold text-apple flex items-start gap-4">
                        <span className="text-emerald-600 flex-shrink-0 mt-0.5 text-3xl leading-none">↗</span>
                        <span className="leading-snug">{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                {selectedProject.techStack && (
                  <div className="pt-8 mb-8 border-t border-apple/5">
                    <h4 className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-apple/30 mb-6 block mt-8 flex items-center gap-2">
                      <span className="text-lg mr-1">🛠️</span> Tech Stack Utilizada
                    </h4>
                    <div className="flex flex-wrap gap-2">
                       {selectedProject.techStack.map(t => (
                         <span key={t} className="text-[10px] md:text-xs font-black uppercase tracking-widest bg-white border border-apple/10 text-gray-500 hover:text-apple px-6 py-3 rounded-full transition-colors cursor-default shadow-sm hover:shadow-md">
                           {t}
                         </span>
                       ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="h-12 md:h-20"></div> {/* Bottom padding compensation */}
            </div>
          </div>
        </div>
      )}
      
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 8px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(29, 29, 31, 0.1); border-radius: 20px; border: 2px solid transparent; background-clip: content-box; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background-color: rgba(29, 29, 31, 0.2); }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes fadeIn {
          from { opacity: 0; backdrop-filter: blur(0px); }
          to { opacity: 1; backdrop-filter: blur(20px); }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default ProjectSection;
