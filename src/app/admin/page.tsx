'use client';

import { useEffect, useState } from 'react';
import { loadCMSConfig } from '@/lib/cms-loader';
import { CMSConfig } from '@/types/cms';
import Link from 'next/link';
import { getActiveTheme } from '@/lib/cms-utils';

export default function AdminDashboard() {
  const [config, setConfig] = useState<CMSConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    loadCMSConfig()
      .then(({ config: loadedConfig, validation }) => {
        if (!validation.valid) {
          setError(`Validation errors: ${validation.errors.join(', ')}`);
        }
        setConfig(loadedConfig);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to load CMS config');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-fortrix-grey-700">Loading...</div>
      </div>
    );
  }

  if (error || !config) {
    return (
      <div className="bg-fortrix-crimson/10 border border-fortrix-crimson/30 text-fortrix-crimson px-4 py-3 rounded-md">
        {error || 'Failed to load configuration'}
      </div>
    );
  }

  const activeTheme = getActiveTheme(config);

  return (
    <div>
      <h1 className="text-3xl font-heading font-bold text-fortrix-grey-900 mb-8">
        Admin Dashboard
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-md border border-fortrix-grey-300 p-6">
          <h3 className="text-sm font-semibold text-fortrix-grey-700 mb-2">Pages</h3>
          <p className="text-3xl font-bold text-fortrix-charcoal">{config.pages.length}</p>
        </div>
        <div className="bg-white rounded-md border border-fortrix-grey-300 p-6">
          <h3 className="text-sm font-semibold text-fortrix-grey-700 mb-2">Images</h3>
          <p className="text-3xl font-bold text-fortrix-charcoal">{config.images.length}</p>
        </div>
        <div className="bg-white rounded-md border border-fortrix-grey-300 p-6">
          <h3 className="text-sm font-semibold text-fortrix-grey-700 mb-2">Active Theme</h3>
          <p className="text-lg font-semibold text-fortrix-charcoal">{activeTheme.name}</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-md border border-fortrix-grey-300 p-6 mb-8">
        <h2 className="text-xl font-heading font-semibold text-fortrix-grey-900 mb-4">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            href="/admin/content"
            className="block p-4 border border-fortrix-grey-300 rounded-md hover:border-fortrix-teal hover:bg-fortrix-teal/5 transition-colors"
          >
            <h3 className="font-semibold text-fortrix-grey-900 mb-2">Edit Content</h3>
            <p className="text-sm text-fortrix-grey-700">
              Manage page content and sections
            </p>
          </Link>
          <Link
            href="/admin/themes"
            className="block p-4 border border-fortrix-grey-300 rounded-md hover:border-fortrix-teal hover:bg-fortrix-teal/5 transition-colors"
          >
            <h3 className="font-semibold text-fortrix-grey-900 mb-2">Manage Themes</h3>
            <p className="text-sm text-fortrix-grey-700">
              Edit color themes and toggle active theme
            </p>
          </Link>
          <Link
            href="/admin/images"
            className="block p-4 border border-fortrix-grey-300 rounded-md hover:border-fortrix-teal hover:bg-fortrix-teal/5 transition-colors"
          >
            <h3 className="font-semibold text-fortrix-grey-900 mb-2">Manage Images</h3>
            <p className="text-sm text-fortrix-grey-700">
              Add, edit, or remove image references
            </p>
          </Link>
        </div>
      </div>

      {/* Site Info */}
      <div className="bg-white rounded-md border border-fortrix-grey-300 p-6">
        <h2 className="text-xl font-heading font-semibold text-fortrix-grey-900 mb-4">
          Site Information
        </h2>
        <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <dt className="text-sm font-semibold text-fortrix-grey-700">Site Name</dt>
            <dd className="text-fortrix-grey-900">{config.site.siteName}</dd>
          </div>
          <div>
            <dt className="text-sm font-semibold text-fortrix-grey-700">Tagline</dt>
            <dd className="text-fortrix-grey-900">{config.site.tagline}</dd>
          </div>
          <div>
            <dt className="text-sm font-semibold text-fortrix-grey-700">Contact Email</dt>
            <dd className="text-fortrix-grey-900">{config.site.contact.email}</dd>
          </div>
          <div>
            <dt className="text-sm font-semibold text-fortrix-grey-700">CMS Version</dt>
            <dd className="text-fortrix-grey-900">{config.version}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

