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
  // Better active state detection: exact match or Solutions pages
  const isActive = pathname === href || 
    (href === '/solutions/lotteries' && pathname?.startsWith('/solutions'));

  return (
    <Link
      href={href}
      className={`text-sm font-medium transition-all duration-200 pb-1 focus:outline-none focus:ring-2 focus:ring-fortrix-teal focus:ring-offset-2 rounded-sm ${
        isActive 
          ? 'text-fortrix-charcoal border-b-2 border-fortrix-teal' 
          : 'text-fortrix-navy hover:text-fortrix-charcoal'
      } ${className}`}
    >
      {children}
    </Link>
  );
}

