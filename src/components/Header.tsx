'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import NavLink from './NavLink';
import Logo from './Logo';

const MODULES = [
  { name: 'Fortrix Beacon', href: '/modules/beacon' },
  { name: 'Fortrix Ledger', href: '/modules/ledger' },
  { name: 'Fortrix Draw', href: '/modules/draw' },
  { name: 'Fortrix Retail', href: '/modules/retail' },
  { name: 'Fortrix Connect', href: '/modules/connect' },
  { name: 'Fortrix Insight', href: '/modules/insight' },
] as const;

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Platform', href: '/platform' },
  { name: 'Lottery Solutions', href: '/solutions/lotteries' },
  { name: 'Modules', href: '/modules', hasDropdown: true },
  { name: 'Trust & Security', href: '/trust-security' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modulesDropdownOpen, setModulesDropdownOpen] = useState(false);
  const [modulesMobileOpen, setModulesMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mobileMenuOpen) setModulesMobileOpen(false);
  }, [mobileMenuOpen]);

  return (
    <header className="border-b border-fortrix-grey-300 bg-white sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-5 md:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Logo variant="horizontal" className="text-lg sm:text-xl" />
          </div>
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) =>
              item.hasDropdown ? (
                <div
                  key={item.name}
                  className="relative"
                  ref={dropdownRef}
                  onMouseEnter={() => setModulesDropdownOpen(true)}
                  onMouseLeave={() => setModulesDropdownOpen(false)}
                >
                  <Link
                    href={item.href}
                    className="text-sm font-medium transition-all duration-200 pb-1 border-b-2 border-transparent text-fortrix-navy hover:text-fortrix-charcoal focus:outline-none focus:ring-2 focus:ring-fortrix-teal focus:ring-offset-2 rounded-sm"
                  >
                    {item.name}
                  </Link>
                  {modulesDropdownOpen && (
                    <div className="absolute left-0 top-full pt-1 min-w-[200px]">
                      <div className="bg-white border border-fortrix-grey-300 rounded-md shadow-sm py-1">
                        {MODULES.map((mod) => (
                          <Link
                            key={mod.href}
                            href={mod.href}
                            className="block px-4 py-2 text-sm font-medium text-fortrix-navy hover:text-fortrix-charcoal hover:bg-fortrix-grey-100"
                          >
                            {mod.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <NavLink key={item.name} href={item.href}>
                  {item.name}
                </NavLink>
              )
            )}
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
              {navigation.map((item) =>
                item.hasDropdown ? (
                  <div key={item.name}>
                    <button
                      type="button"
                      onClick={() => setModulesMobileOpen(!modulesMobileOpen)}
                      className="flex w-full items-center justify-between px-3 py-2 text-base font-medium text-fortrix-navy hover:text-fortrix-charcoal hover:bg-fortrix-grey-100 rounded-md"
                      aria-expanded={modulesMobileOpen}
                    >
                      {item.name}
                      <svg
                        className={`h-4 w-4 transition-transform ${modulesMobileOpen ? 'rotate-180' : ''}`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {modulesMobileOpen && (
                      <div className="pl-4 pb-1 space-y-1">
                        {MODULES.map((mod) => (
                          <Link
                            key={mod.href}
                            href={mod.href}
                            className="block px-3 py-2 text-sm font-medium text-fortrix-navy hover:text-fortrix-charcoal hover:bg-fortrix-grey-100 rounded-md"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {mod.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-fortrix-navy hover:text-fortrix-charcoal hover:bg-fortrix-grey-100 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
