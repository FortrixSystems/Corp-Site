'use client';

import { useEffect, useState, ReactNode } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { isAuthenticated } from '@/lib/auth';
import LoginForm from './LoginForm';

interface ProtectedContentProps {
  children: ReactNode;
  showLogin?: boolean;
}

export default function ProtectedContent({ children, showLogin = true }: ProtectedContentProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    setMounted(true);
    const auth = isAuthenticated();
    setAuthenticated(auth);
  }, [pathname]);

  if (!mounted) {
    return null;
  }

  if (!authenticated) {
    if (showLogin) {
      return (
        <div className="min-h-[60vh] flex items-center justify-center py-16">
          <LoginForm />
        </div>
      );
    }
    return null;
  }

  return <>{children}</>;
}

