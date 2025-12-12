'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function NavLink({ href, children, className = '' }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`text-sm font-medium transition-colors pb-1 ${
        isActive 
          ? 'text-fortrix-charcoal border-b-2 border-fortrix-teal' 
          : 'text-fortrix-navy hover:text-fortrix-charcoal'
      } ${className}`}
    >
      {children}
    </Link>
  );
}

