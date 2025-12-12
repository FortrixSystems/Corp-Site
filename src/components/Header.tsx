'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { isAuthenticated, getSession, logout } from '@/lib/auth';
import NavLink from './NavLink';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Platform', href: '/platform' },
  { name: 'Solutions', href: '/solutions/lotteries' },
  { name: 'Modules', href: '/modules' },
  { name: 'Trust & Security', href: '/trust-security' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [session, setSession] = useState<ReturnType<typeof getSession>>(null);
  const pathname = usePathname();

  useEffect(() => {
    const auth = isAuthenticated();
    setAuthenticated(auth);
    if (auth) {
      setSession(getSession());
    }
  }, [pathname]);

  const handleLogout = () => {
    logout();
    setAuthenticated(false);
    setSession(null);
    window.location.href = '/';
  };

  const isAdminPage = pathname?.startsWith('/admin');

  return (
    <header className="border-b border-fortrix-grey-300 bg-white sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-5 md:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-lg sm:text-xl font-heading font-semibold text-fortrix-charcoal">
              Fortrix Systems Inc.
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-8">
            {!isAdminPage && navigation.map((item) => (
              <NavLink key={item.name} href={item.href}>
                {item.name}
              </NavLink>
            ))}
            {authenticated && (
              <>
                <Link
                  href="/admin"
                  className={`text-sm font-medium ${
                    isAdminPage
                      ? 'text-fortrix-teal'
                      : 'text-fortrix-navy hover:text-fortrix-charcoal'
                  }`}
                >
                  Admin
                </Link>
                {session && (
                  <span className="text-sm text-fortrix-grey-700">
                    {session.name}
                  </span>
                )}
                <button
                  onClick={handleLogout}
                  className="text-sm font-medium text-fortrix-navy hover:text-fortrix-charcoal"
                >
                  Logout
                </button>
              </>
            )}
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-fortrix-charcoal hover:text-fortrix-navy focus:outline-none focus:ring-2 focus:ring-inset focus:ring-fortrix-teal"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!mobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-fortrix-grey-300">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {!isAdminPage && navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-fortrix-navy hover:text-fortrix-charcoal hover:bg-fortrix-grey-100 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {authenticated && (
                <>
                  <Link
                    href="/admin"
                    className="block px-3 py-2 text-base font-medium text-fortrix-navy hover:text-fortrix-charcoal hover:bg-fortrix-grey-100 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Admin
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      setMobileMenuOpen(false);
                    }}
                    className="block w-full text-left px-3 py-2 text-base font-medium text-fortrix-navy hover:text-fortrix-charcoal hover:bg-fortrix-grey-100 rounded-md"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
