import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const variantClasses = {
  primary: 'bg-fortrix-charcoal text-white hover:bg-fortrix-navy',
  secondary: 'bg-fortrix-teal text-white hover:bg-fortrix-teal/90',
  outline: 'border border-fortrix-charcoal text-fortrix-charcoal hover:bg-fortrix-charcoal hover:text-white',
};

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base',
  lg: 'px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg',
};

const baseClasses = 'inline-block font-semibold rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-fortrix-teal focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

export default function Button({ 
  href,
  onClick,
  children, 
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  disabled = false
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} aria-disabled={disabled}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}

