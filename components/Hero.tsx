import React from 'react';
import { WHATSAPP_LINK } from '../constants';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section className="relative py-16 md:py-24 flex items-center justify-center bg-black overflow-hidden">
      {/* Background Image - Beer/Bar vibe */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1974&auto=format&fit=crop")',
        }}
      ></div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-bira-dark via-black/40 to-bira-dark/80 z-0"></div>

      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="inline-block border border-bira-gold px-3 py-1 mb-4 rounded bg-black/40 backdrop-blur-sm">
          <span className="text-bira-gold font-heading uppercase tracking-widest text-xs">Aclimação • SP</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4 uppercase leading-none drop-shadow-lg">
          Bar do Bira
        </h1>
        
        <div className="w-24 h-1 bg-bira-gold mx-auto mb-6"></div>

        <p className="max-w-2xl mx-auto text-xl md:text-2xl text-gray-200 font-serif italic drop-shadow-md mb-8">
          "Comida honesta, cerveja trincando e tradição."
        </p>

        {/* Botão corrigido: Passamos o href diretamente para o componente Button */}
        <Button 
          variant="gold" 
          href={WHATSAPP_LINK} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-lg px-8 py-3"
        >
          <i className="fab fa-whatsapp mr-2"></i> Pedir Agora
        </Button>
      </div>
    </section>
  );
};

export default Hero;