
import React from 'react';
import type { NavLink, ContactLink } from '../../types';

interface SidebarMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: NavLink[];
  profileImageUrl: string;
  contactLinks: ContactLink[];
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ isOpen, onClose, navLinks, profileImageUrl, contactLinks }) => {
  return (
    <div 
      className={`fixed inset-0 z-[100] transition-all duration-500 ease-in-out ${isOpen ? 'visible' : 'invisible'}`}
      aria-hidden={!isOpen}
    >
      {/* Overlay */}
      <div 
        className={`absolute inset-0 bg-apple/60 backdrop-blur-xl transition-opacity duration-700 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      
      {/* Sidebar Content */}
      <div 
        className={`absolute top-0 right-0 h-full w-full sm:w-[500px] bg-linen shadow-2xl flex flex-col p-8 sm:p-16 transition-transform duration-500 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Espaçador para o Header que fica por cima */}
        <div className="h-24 w-full" />

        <nav className="flex-grow flex flex-col justify-center space-y-4 sm:space-y-6">
          {navLinks.map((link, idx) => (
            <a
              key={link.label}
              href={link.href}
              onClick={onClose}
              style={{ transitionDelay: `${idx * 40}ms` }}
              className={`text-5xl sm:text-7xl font-black text-apple tracking-tighter hover:translate-x-4 transition-all duration-500 group relative inline-block w-fit ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
            >
              <span className="relative z-10">{link.label}</span>
              <span className="text-pistachio ml-1 inline-block transform group-hover:scale-150 transition-transform duration-300">.</span>
            </a>
          ))}
        </nav>

        <div className={`mt-auto pt-12 border-t border-apple/5 flex flex-col items-center sm:items-start transition-all duration-1000 delay-200 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
           <div className="flex items-center gap-5 mb-8">
              <img 
                src={profileImageUrl} 
                className="w-14 h-14 rounded-2xl object-cover ring-2 ring-pistachio/30 p-0.5" 
                alt="Leonardo Brykcy" 
              />
              <div>
                <p className="text-sm font-black text-apple tracking-widest uppercase leading-none">Leonardo Brykcy</p>
                <p className="text-[10px] font-medium text-gray-400 mt-2 uppercase tracking-widest italic">Product Strategy & Ops</p>
              </div>
           </div>
           
           <div className="flex gap-8">
              {contactLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-apple/30 hover:text-pistachio-dark transform hover:-translate-y-1 transition-all duration-300"
                  aria-label={link.ariaLabel}
                >
                  {React.cloneElement(link.icon as React.ReactElement<{ className?: string }>, { className: "w-6 h-6" })}
                </a>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;
