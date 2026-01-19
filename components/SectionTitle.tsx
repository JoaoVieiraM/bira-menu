import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, light = false }) => {
  return (
    <div className="text-center mb-12">
      <h2 className={`text-3xl md:text-5xl font-heading font-bold uppercase mb-3 ${light ? 'text-white' : 'text-bira-dark'}`}>
        {title}
      </h2>
      <div className="w-16 h-1 bg-bira-gold mx-auto mb-4"></div>
      {subtitle && (
        <p className={`text-lg italic font-serif ${light ? 'text-gray-300' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;