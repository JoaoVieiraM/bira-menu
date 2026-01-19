import React, { useState } from 'react';
import { NAV_ITEMS, BRAND_NAME } from '../constants';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (href === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (href.startsWith('#')) {
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      
      if (element) {
        const headerOffset = 100; // Ajuste para o tamanho do Header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <header className="bg-bira-dark text-white shadow-lg sticky top-0 z-50 border-b-4 border-bira-red">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a 
          href="/" 
          onClick={(e) => handleNavClick(e, '/')}
          className="flex flex-col group cursor-pointer"
        >
          <span className="text-2xl font-heading font-bold uppercase tracking-wider text-bira-gold group-hover:text-white transition-colors">{BRAND_NAME}</span>
          <span className="text-xs text-gray-400 tracking-widest uppercase group-hover:text-gray-200 transition-colors">Tradição na Aclimação</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-gray-300 hover:text-bira-gold transition-colors font-heading font-medium uppercase text-sm tracking-wide cursor-pointer"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-bira-gold text-2xl p-2 hover:bg-white/10 rounded transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-bira-dark/95 backdrop-blur-md border-t border-gray-700 fixed inset-x-0 top-[88px] h-screen z-40 shadow-xl transition-all duration-300 ease-in-out">
          <div className="flex flex-col p-6 space-y-6 items-center pt-10">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="text-white hover:text-bira-gold text-xl font-heading uppercase tracking-widest py-4 w-full text-center border-b border-gray-700 active:bg-gray-800 transition-colors cursor-pointer"
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;