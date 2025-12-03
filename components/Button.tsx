import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
  onClick?: () => void;
  className?: string;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  onClick,
  className = '',
  href
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold text-lg md:text-xl py-4 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl active:scale-95 cursor-pointer";
  
  const variants = {
    primary: "bg-green-600 hover:bg-green-500 text-white border-b-4 border-green-800",
    secondary: "bg-brand-accent hover:bg-amber-400 text-brand-dark border-b-4 border-amber-700",
  };

  if (href) {
    return (
      <a 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      >
        <span className="mr-2">{children}</span>
        <ArrowRight className="w-6 h-6" />
      </a>
    );
  }

  const handleScrollToOffer = () => {
    if (onClick) {
      onClick();
    } else {
      const offerSection = document.getElementById('offer');
      offerSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button 
      onClick={handleScrollToOffer}
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      <span className="mr-2">{children}</span>
      <ArrowRight className="w-6 h-6" />
    </button>
  );
};

export default Button;