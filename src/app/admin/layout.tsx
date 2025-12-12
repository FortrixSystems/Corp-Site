'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { isAuthenticated, getSession, logout } from '@/lib/auth';
import Link from 'next/link';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [session, setSession] = useState<ReturnType<typeof getSession>>(null);

  useEffect(() => {
    setMounted(true);
    if (!isAuthenticated()) {
      router.push('/');
      return;
    }
    setSession(getSession());
  }, [router, pathname]);

  const handleLogout = () => {
    logout();
    router.push('/');
    router.refresh();
  };

  if (!mounted) {
    return null;
  }

  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  if (!isAuthenticated()) {
    return null;
  }

  return (
    <div className="min-h-screen bg-fortrix-grey-100">
      {/* Navigation */}
      <nav className="bg-white border-b border-fortrix-grey-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center space-x-8">
              <Link href="/admin" className="text-lg font-heading font-semibold text-fortrix-charcoal">
                Fortrix Admin
              </Link>
              <div className="hidden md:flex space-x-4">
                <Link
                  href="/admin"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    pathname === '/admin'
                      ? 'bg-fortrix-teal/10 text-fortrix-teal'
                      : 'text-fortrix-grey-700 hover:bg-fortrix-grey-100'
                  }`}
                >
                  Dashboard
                </Link>
                <Link
                  href="/admin/content"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    pathname === '/admin/content'
                      ? 'bg-fortrix-teal/10 text-fortrix-teal'
                      : 'text-fortrix-grey-700 hover:bg-fortrix-grey-100'
                  }`}
                >
                  Content
                </Link>
                <Link
                  href="/admin/themes"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    pathname === '/admin/themes'
                      ? 'bg-fortrix-teal/10 text-fortrix-teal'
                      : 'text-fortrix-grey-700 hover:bg-fortrix-grey-100'
                  }`}
                >
                  Themes
                </Link>
                <Link
                  href="/admin/images"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    pathname === '/admin/images'
                      ? 'bg-fortrix-teal/10 text-fortrix-teal'
                      : 'text-fortrix-grey-700 hover:bg-fortrix-grey-100'
                  }`}
                >
                  Images
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {session && (
                <span className="text-sm text-fortrix-grey-700">
                  {session.name}
                </span>
              )}
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm font-medium text-fortrix-grey-700 hover:bg-fortrix-grey-100 rounded-md"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}

