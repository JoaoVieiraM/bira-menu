import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'white' | 'gold';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '',
  type = 'button',
  disabled = false,
  href,
  target,
  rel
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-2 rounded font-heading font-bold uppercase tracking-wide transition-all duration-200 transform hover:-translate-y-0.5 disabled:opacity-50 cursor-pointer";
  
  const variants = {
    primary: "bg-bira-red text-white hover:bg-red-800 shadow-md",
    outline: "border-2 border-bira-red text-bira-red hover:bg-bira-red hover:text-white",
    white: "bg-white text-bira-red border border-gray-200 hover:bg-gray-50 shadow-sm",
    gold: "bg-bira-gold text-bira-dark hover:bg-yellow-600 shadow-orange-500/20 shadow-lg"
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  // Se houver href, renderiza como link <a> para garantir navegação correta
  if (href) {
    return (
      <a 
        href={href} 
        target={target} 
        rel={rel} 
        className={classes}
        role="button"
        onClick={onClick} // Mantém onClick se precisar de tracking, etc.
      >
        {children}
      </a>
    );
  }

  // Caso contrário, renderiza como botão padrão
  return (
    <button 
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;