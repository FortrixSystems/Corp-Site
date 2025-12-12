'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { authenticate, createSession } from '@/lib/auth';

export default function AdminLogin() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const user = authenticate(username, password);

      if (!user) {
        setError('Invalid username or password');
        setLoading(false);
        return;
      }

      createSession(user);
      router.push('/admin');
      router.refresh();
    } catch (err) {
      setError('An error occurred. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-fortrix-charcoal flex items-center justify-center px-4">
      {/* Coming Soon Banner */}
      <div className="absolute top-0 left-0 right-0 bg-fortrix-amber text-fortrix-charcoal py-3 text-center font-heading font-semibold z-50">
        <div className="max-w-7xl mx-auto px-4">
          🚧 Admin Panel - Coming Soon - Limited Access Only 🚧
        </div>
      </div>

      <div className="w-full max-w-md mt-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-heading font-bold text-fortrix-charcoal mb-2">
              Fortrix Admin
            </h1>
            <p className="text-fortrix-grey-700 font-regular">
              Sign in to manage content
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-fortrix-crimson/10 border border-fortrix-crimson/30 text-fortrix-crimson px-4 py-3 rounded-md text-sm">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="username" className="block text-sm font-semibold text-fortrix-grey-900 mb-2">
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full px-4 py-3 border border-fortrix-grey-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fortrix-teal focus:border-transparent"
                placeholder="Enter username"
                disabled={loading}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-fortrix-grey-900 mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 border border-fortrix-grey-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fortrix-teal focus:border-transparent"
                placeholder="Enter password"
                disabled={loading}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-fortrix-charcoal text-white py-3 px-4 rounded-md font-semibold hover:bg-fortrix-navy transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-fortrix-grey-300">
            <p className="text-xs text-fortrix-grey-500 text-center">
              Test Accounts: admin / editor<br />
              Password: fortrix2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

