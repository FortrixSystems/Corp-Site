import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  dark?: boolean;
}

export default function Card({ children, className = '', hover = false, dark = false }: CardProps) {
  const baseClasses = dark 
    ? 'bg-fortrix-charcoal rounded-md border border-fortrix-grey-700'
    : 'bg-white rounded-md border border-fortrix-grey-300';
  const hoverClass = hover ? 'transition-all duration-200 hover:shadow-sm hover:border-fortrix-teal/40' : '';
  return (
    <div className={`${baseClasses} p-5 sm:p-6 md:p-8 ${hoverClass} ${className}`}>
      {children}
    </div>
  );
}

