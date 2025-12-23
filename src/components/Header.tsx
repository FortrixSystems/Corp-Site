'use client';

import { useState } from 'react';
import Link from 'next/link';
import NavLink from './NavLink';
import Logo from './Logo';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Platform', href: '/platform' },
  { name: 'Lottery Solutions', href: '/solutions/lotteries' },
  { name: 'Modules', href: '/modules' },
  { name: 'Trust & Security', href: '/trust-security' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-fortrix-grey-300 bg-white sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-5 md:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Logo variant="horizontal" className="text-lg sm:text-xl" />
          </div>
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <NavLink key={item.name} href={item.href}>
                {item.name}
              </NavLink>
            ))}
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-fortrix-charcoal hover:text-fortrix-navy focus:outline-none focus:ring-2 focus:ring-inset focus:ring-fortrix-teal"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <span className="sr-only">{mobileMenuOpen ? 'Close main menu' : 'Open main menu'}</span>
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
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-fortrix-navy hover:text-fortrix-charcoal hover:bg-fortrix-grey-100 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
