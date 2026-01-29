
import React, { useState, useEffect } from 'react';
import type { NavLink, ContactLink } from '../../types';
import { MenuIcon } from '../../components/Icons';

interface HeaderProps {
  navLinks: NavLink[];
  profileImageUrl: string;
  contactLinks: ContactLink[];
}

const Header: React.FC<HeaderProps> = ({ navLinks, profileImageUrl, contactLinks }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[110] transition-all duration-300 apple-header-blur border-b ${isScrolled ? 'border-apple/5 shadow-sm h-14' : 'border-transparent h-20'}`}>
        <div className="container mx-auto px-6 h-full flex items-center justify-between">
          <a href="#" className="text-sm font-black tracking-[0.2em] text-apple group">
            L.BRYKCY<span className="text-pistachio-dark font-medium transition-colors group-hover:text-apple">_PRODUCT</span>
          </a>

          <button
            onClick={toggleMenu}
            className="p-2 focus:outline-none flex items-center justify-center transition-transform active:scale-90"
            aria-label={isMenuOpen ? "Fechar Menu" : "Abrir Menu"}
          >
            <MenuIcon isOpen={isMenuOpen} className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-[105] bg-black/20 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Dropdown Menu */}
      <div className={`fixed ${isScrolled ? 'top-14' : 'top-20'} left-0 right-0 bg-linen/95 backdrop-blur-xl border-b border-apple/5 shadow-lg transition-all duration-300 z-[106] max-h-[calc(100vh-5rem)] overflow-y-auto ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="container mx-auto px-6 py-8">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                style={{ transitionDelay: `${idx * 50}ms` }}
                className={`text-2xl font-black tracking-tighter text-apple hover:translate-x-2 transition-all duration-300 group ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
              >
                <span className="relative z-10">{link.label}</span>
                <span className="text-pistachio ml-1 inline-block transform group-hover:scale-150 transition-transform duration-300">.</span>
              </a>
            ))}
          </nav>
          <div className={`mt-8 pt-6 border-t border-apple/5 flex flex-col items-start transition-all duration-500 delay-200 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="flex items-center gap-4 mb-6">
              <img 
                src={profileImageUrl} 
                alt="Leonardo Brykcy" 
                className="w-12 h-12 rounded-xl object-cover ring-2 ring-pistachio/30" 
              />
              <div>
                <p className="text-sm font-black text-apple tracking-widest uppercase leading-none">Leonardo Brykcy</p>
                <p className="text-[10px] font-medium text-gray-400 mt-1 uppercase tracking-widest italic">Product Strategy & Ops</p>
              </div>
            </div>
            <div className="flex gap-6">
              {contactLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-apple/30 hover:text-pistachio-dark transform hover:-translate-y-1 transition-all duration-300"
                  aria-label={link.ariaLabel}
                >
                  {React.cloneElement(link.icon as React.ReactElement<{ className?: string }>, { className: "w-5 h-5" })}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Precisamos garantir que a URL da imagem de perfil esteja disponível ou passada corretamente
const PROFILE_IMAGE_URL = "https://avatars.githubusercontent.com/u/69459277?v=4";

export default Header;
