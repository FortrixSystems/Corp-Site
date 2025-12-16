'use client';

import { useEffect, useState } from 'react';
import { loadCMSConfig } from '@/lib/cms-loader';
import { CMSConfig, ImageConfig } from '@/types/cms';

export default function ImageManager() {
  const [config, setConfig] = useState<CMSConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    loadCMSConfig()
      .then(({ config: loadedConfig }) => {
        setConfig(loadedConfig);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  const handleSave = async () => {
    setSaving(true);
    setMessage(null);

    try {
      // In a real implementation, this would call an API endpoint
      setMessage({
        type: 'success',
        text: 'Image changes saved! (Note: Backend API needed for persistence)',
      });
    } catch (error) {
      setMessage({
        type: 'error',
        text: 'Failed to save images',
      });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="text-center py-12">Loading...</div>;
  }

  if (!config) {
    return <div className="text-center py-12 text-fortrix-crimson">Failed to load images</div>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-heading font-bold text-fortrix-grey-900">
          Image Manager
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

      <div className="bg-white rounded-md border border-fortrix-grey-300 p-6">
        <h2 className="text-xl font-heading font-semibold text-fortrix-grey-900 mb-6">
          Image Assets ({config.images.length})
        </h2>

        {config.images.length === 0 ? (
          <div className="text-center py-12 text-fortrix-grey-700">
            No images configured
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {config.images.map((image) => (
              <div
                key={image.id}
                className="border border-fortrix-grey-300 rounded-md p-4"
              >
                <div className="mb-4">
                  <div className="w-full h-32 bg-fortrix-grey-100 rounded-md flex items-center justify-center mb-3">
                    {image.src.startsWith('/') ? (
                      <span className="text-xs text-fortrix-grey-500">Local Image</span>
                    ) : (
                      <span className="text-xs text-fortrix-grey-500">External URL</span>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <div>
                    <label className="block text-xs font-semibold text-fortrix-grey-700 mb-1">
                      ID
                    </label>
                    <input
                      type="text"
                      value={image.id}
                      readOnly
                      className="w-full px-3 py-2 border border-fortrix-grey-300 rounded-md bg-fortrix-grey-100 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-fortrix-grey-700 mb-1">
                      Source
                    </label>
                    <input
                      type="text"
                      value={image.src}
                      readOnly
                      className="w-full px-3 py-2 border border-fortrix-grey-300 rounded-md bg-fortrix-grey-100 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-fortrix-grey-700 mb-1">
                      Alt Text
                    </label>
                    <input
                      type="text"
                      value={image.alt}
                      readOnly
                      className="w-full px-3 py-2 border border-fortrix-grey-300 rounded-md bg-fortrix-grey-100 text-sm"
                    />
                  </div>
                  {(image.width || image.height) && (
                    <div className="text-xs text-fortrix-grey-600">
                      {image.width} × {image.height}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-8 bg-fortrix-amber/10 border border-fortrix-amber/30 rounded-md p-4">
        <p className="text-sm text-fortrix-grey-700">
          <strong>Note:</strong> Full editing functionality requires backend API implementation.
          Currently showing read-only view of image configuration.
        </p>
      </div>
    </div>
  );
}





