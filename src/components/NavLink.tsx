'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

/** Shared with Header for the Modules dropdown trigger so all desktop nav labels align. */
export const desktopNavLinkBaseClass =
  'box-border flex h-16 shrink-0 items-center text-sm font-medium transition-colors duration-200 border-b-2 focus:outline-none focus:ring-2 focus:ring-fortrix-teal focus:ring-offset-2 rounded-sm';

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
      className={`${desktopNavLinkBaseClass} ${
        isActive 
          ? 'text-fortrix-charcoal border-fortrix-teal' 
          : 'border-transparent text-fortrix-navy hover:text-fortrix-charcoal'
      } ${className}`}
    >
      {children}
    </Link>
  );
}

