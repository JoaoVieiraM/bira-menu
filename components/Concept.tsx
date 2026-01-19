import React from 'react';
import { ADDRESS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-bira-dark text-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2">
          <div className="relative">
             <div className="absolute -inset-4 border-4 border-bira-red transform -rotate-2"></div>
             {/* Use a placeholder that looks like a friendly bar owner or bar interior */}
             <img 
               src="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=1974&auto=format&fit=crop" 
               alt="Balcão do Bar" 
               className="shadow-2xl relative z-10 w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
             />
          </div>
        </div>
        
        <div className="w-full md:w-1/2">
          <h4 className="text-bira-gold tracking-widest uppercase font-semibold mb-2">Nossa História</h4>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Tradição na Aclimação</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
            O <span className="text-bira-gold font-bold">Bar do Bira</span> é aquele lugar onde todo mundo sabe o seu nome. Desde que abrimos as portas na Rua Muniz de Sousa, nosso compromisso é simples: servir comida farta, preço justo e garantir que a cerveja chegue na mesa com aquele "véu de noiva".
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
            Aqui não tem frescura. É lugar de reunir os amigos, ver o jogo do timão (ou do verdão), e curtir o melhor da boemia paulistana.
          </p>
          
          <div className="bg-white/10 p-6 rounded-lg border-l-4 border-bira-gold">
            <div className="flex items-start gap-4">
              <i className="fas fa-map-pin text-bira-gold text-2xl mt-1"></i>
              <div>
                <h5 className="font-heading font-bold uppercase text-white mb-1">Onde Estamos</h5>
                <p className="text-gray-300">{ADDRESS}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;