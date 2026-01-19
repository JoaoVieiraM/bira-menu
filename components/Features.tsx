import React from 'react';
import { MENU_SECTIONS } from '../constants';
import SectionTitle from './SectionTitle';

const MenuDisplay: React.FC = () => {
  return (
    <div className="bg-bira-bg">
      {MENU_SECTIONS.map((section, index) => (
        <section 
          key={section.id} 
          id={section.id} 
          className={`py-20 scroll-mt-24 ${index % 2 === 0 ? 'bg-white' : 'bg-bira-bg'}`}
        >
          <div className="container mx-auto px-6">
            <SectionTitle 
              title={section.title} 
              subtitle={index === 0 ? "Aquele tempero caseiro que você respeita." : undefined}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-8 max-w-5xl mx-auto">
              {section.items.map((item) => (
                <div 
                  key={item.id}
                  className={`flex flex-col md:flex-row justify-between items-start border-b border-dashed border-gray-300 pb-6 ${item.highlight ? 'bg-yellow-50 p-4 -mx-4 rounded border-l-4 border-l-bira-gold border-b-0 shadow-sm' : ''}`}
                >
                  <div className="flex-1 pr-4">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-heading font-bold text-bira-dark uppercase">
                        {item.name}
                      </h3>
                      {item.highlight && (
                        <span className="bg-bira-red text-white text-[10px] px-2 py-0.5 rounded uppercase font-bold tracking-wide">
                          Campeão
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 font-sans text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-2 md:mt-0 flex-shrink-0">
                    <span className="text-lg font-bold text-bira-red font-heading">
                      {item.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default MenuDisplay;