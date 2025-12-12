'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

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

