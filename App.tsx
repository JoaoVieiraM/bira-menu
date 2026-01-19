import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MenuDisplay from './components/Features';
import Footer from './components/Footer';
import { WHATSAPP_LINK } from './constants';

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased text-gray-800 bg-white selection:bg-bira-red selection:text-white">
      <Header />
      <main>
        <Hero />
        <MenuDisplay />
      </main>
      <Footer />
      
      {/* Sticky WhatsApp Button */}
      <a 
        href={WHATSAPP_LINK} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white w-14 h-14 rounded-full shadow-2xl hover:bg-[#20bd5a] transition-all duration-300 transform hover:scale-110 flex items-center justify-center border-2 border-white"
        aria-label="Pedir no WhatsApp"
      >
        <i className="fab fa-whatsapp text-3xl"></i>
      </a>
    </div>
  );
};

export default App;