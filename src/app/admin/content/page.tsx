'use client';

import { useEffect, useState } from 'react';
import { loadCMSConfig } from '@/lib/cms-loader';
import { CMSConfig, PageContent } from '@/types/cms';
import Link from 'next/link';

export default function ContentEditor() {
  const [config, setConfig] = useState<CMSConfig | null>(null);
  const [selectedPage, setSelectedPage] = useState<PageContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    loadCMSConfig()
      .then(({ config: loadedConfig }) => {
        setConfig(loadedConfig);
        if (loadedConfig.pages.length > 0) {
          setSelectedPage(loadedConfig.pages[0]);
        }
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  const handleSave = async () => {
    if (!config) return;

    setSaving(true);
    setMessage(null);

    try {
      // In a real implementation, this would call an API endpoint
      // For now, we'll show a message that this needs backend implementation
      setMessage({
        type: 'success',
        text: 'Content saved successfully! (Note: Backend API needed for persistence)',
      });
    } catch (error) {
      setMessage({
        type: 'error',
        text: 'Failed to save content',
      });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="text-center py-12">Loading...</div>;
  }

  if (!config) {
    return <div className="text-center py-12 text-fortrix-crimson">Failed to load configuration</div>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-heading font-bold text-fortrix-grey-900">
          Content Editor
        </h1>
        <button
          onClick={handleSave}
          disabled={saving}
          className="bg-fortrix-charcoal text-white px-6 py-2 rounded-md font-semibold hover:bg-fortrix-navy transition-colors disabled:opacity-50"
        >
          {saving ? 'Saving...' : 'Save Changes'}
        </button>
      </div>

      {message && (
        <div
          className={`mb-6 px-4 py-3 rounded-md ${
            message.type === 'success'
              ? 'bg-fortrix-teal/10 text-fortrix-teal border border-fortrix-teal/30'
              : 'bg-fortrix-crimson/10 text-fortrix-crimson border border-fortrix-crimson/30'
          }`}
        >
          {message.text}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Page List */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-md border border-fortrix-grey-300 p-4">
            <h2 className="font-semibold text-fortrix-grey-900 mb-4">Pages</h2>
            <div className="space-y-2">
              {config.pages.map((page) => (
                <button
                  key={page.path}
                  onClick={() => setSelectedPage(page)}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm ${
                    selectedPage?.path === page.path
                      ? 'bg-fortrix-teal/10 text-fortrix-teal border border-fortrix-teal/30'
                      : 'text-fortrix-grey-700 hover:bg-fortrix-grey-100'
                  }`}
                >
                  {page.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Page Editor */}
        <div className="lg:col-span-2">
          {selectedPage ? (
            <div className="bg-white rounded-md border border-fortrix-grey-300 p-6">
              <h2 className="text-xl font-heading font-semibold text-fortrix-grey-900 mb-6">
                {selectedPage.title}
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-fortrix-grey-900 mb-2">
                    Path
                  </label>
                  <input
                    type="text"
                    value={selectedPage.path}
                    readOnly
                    className="w-full px-4 py-2 border border-fortrix-grey-300 rounded-md bg-fortrix-grey-100"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-fortrix-grey-900 mb-2">
                    Description
                  </label>
                  <textarea
                    value={selectedPage.description}
                    readOnly
                    rows={3}
                    className="w-full px-4 py-2 border border-fortrix-grey-300 rounded-md bg-fortrix-grey-100"
                  />
                </div>

                <div>
                  <h3 className="font-semibold text-fortrix-grey-900 mb-4">Sections</h3>
                  <div className="space-y-4">
                    {selectedPage.sections.map((section, idx) => (
                      <div key={section.id} className="border border-fortrix-grey-300 rounded-md p-4">
                        <h4 className="font-semibold text-fortrix-grey-900 mb-2">
                          {section.title || `Section ${idx + 1}`}
                        </h4>
                        {section.subtitle && (
                          <p className="text-sm text-fortrix-grey-700 mb-3">{section.subtitle}</p>
                        )}
                        <div className="text-sm text-fortrix-grey-600">
                          {section.blocks.length} block(s)
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-md border border-fortrix-grey-300 p-12 text-center text-fortrix-grey-700">
              Select a page to edit
            </div>
          )}
        </div>
      </div>

      <div className="mt-8 bg-fortrix-amber/10 border border-fortrix-amber/30 rounded-md p-4">
        <p className="text-sm text-fortrix-grey-700">
          <strong>Note:</strong> Full editing functionality requires backend API implementation.
          Currently showing read-only view of content structure.
        </p>
      </div>
    </div>
  );
}





