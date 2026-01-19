import React from 'react';
import { BRAND_NAME, ADDRESS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-bira-dark text-gray-400 py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-white uppercase mb-4">{BRAND_NAME}</h3>
            <p className="text-sm mb-4">Tradição em servir bem. Comida de verdade desde 1985.</p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-bira-gold transition-colors p-2"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-bira-gold transition-colors p-2"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook text-xl"></i>
              </a>
            </div>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-heading font-bold text-white uppercase mb-4">Funcionamento</h4>
            <ul className="text-sm space-y-2">
              <li>Seg - Sex: 11h às 23h</li>
              <li>Sábado: 11h às 20h</li>
              <li>Domingo: Descanso merecido</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
             <h4 className="font-heading font-bold text-white uppercase mb-4">Informações</h4>
             <p className="text-sm mb-2">Serviço de 10% opcional.</p>
             <p className="text-sm mb-2">Aceitamos todos os cartões.</p>
             <p className="text-sm text-gray-500 mt-4">{ADDRESS}</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} {BRAND_NAME}. Se beber, não dirija.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;