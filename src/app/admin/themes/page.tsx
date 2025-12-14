'use client';

import { useEffect, useState } from 'react';
import { loadCMSConfig } from '@/lib/cms-loader';
import { CMSConfig, ThemeConfig } from '@/types/cms';
import { getActiveTheme } from '@/lib/cms-utils';

export default function ThemeEditor() {
  const [config, setConfig] = useState<CMSConfig | null>(null);
  const [selectedTheme, setSelectedTheme] = useState<ThemeConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    loadCMSConfig()
      .then(({ config: loadedConfig }) => {
        setConfig(loadedConfig);
        const active = getActiveTheme(loadedConfig);
        setSelectedTheme(active);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  const handleToggleTheme = (themeName: string) => {
    if (!config) return;

    const updatedThemes = config.themes.map((theme) => ({
      ...theme,
      active: theme.name === themeName,
    }));

    setConfig({ ...config, themes: updatedThemes });
    const newActive = updatedThemes.find((t) => t.active);
    if (newActive) {
      setSelectedTheme(newActive);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    setMessage(null);

    try {
      // In a real implementation, this would call an API endpoint
      setMessage({
        type: 'success',
        text: 'Theme changes saved! (Note: Backend API needed for persistence)',
      });
    } catch (error) {
      setMessage({
        type: 'error',
        text: 'Failed to save theme',
      });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="text-center py-12">Loading...</div>;
  }

  if (!config || !selectedTheme) {
    return <div className="text-center py-12 text-fortrix-crimson">Failed to load themes</div>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-heading font-bold text-fortrix-grey-900">
          Theme Editor
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
        {/* Theme List */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-md border border-fortrix-grey-300 p-4">
            <h2 className="font-semibold text-fortrix-grey-900 mb-4">Themes</h2>
            <div className="space-y-2">
              {config.themes.map((theme) => (
                <button
                  key={theme.name}
                  onClick={() => handleToggleTheme(theme.name)}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm flex items-center justify-between ${
                    theme.active
                      ? 'bg-fortrix-teal/10 text-fortrix-teal border border-fortrix-teal/30'
                      : 'text-fortrix-grey-700 hover:bg-fortrix-grey-100'
                  }`}
                >
                  <span>{theme.name}</span>
                  {theme.active && (
                    <span className="text-xs bg-fortrix-teal text-white px-2 py-1 rounded">
                      Active
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Theme Editor */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-md border border-fortrix-grey-300 p-6">
            <h2 className="text-xl font-heading font-semibold text-fortrix-grey-900 mb-6">
              {selectedTheme.name}
            </h2>

            <div className="space-y-6">
              {/* Primary Colors */}
              <div>
                <h3 className="font-semibold text-fortrix-grey-900 mb-4">Primary Colors</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-fortrix-grey-700 mb-2">Charcoal</label>
                    <div className="flex items-center space-x-2">
                      <div
                        className="w-12 h-12 rounded border border-fortrix-grey-300"
                        style={{ backgroundColor: selectedTheme.colors.primary.charcoal }}
                      />
                      <input
                        type="text"
                        value={selectedTheme.colors.primary.charcoal}
                        readOnly
                        className="flex-1 px-3 py-2 border border-fortrix-grey-300 rounded-md bg-fortrix-grey-100"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-fortrix-grey-700 mb-2">Navy</label>
                    <div className="flex items-center space-x-2">
                      <div
                        className="w-12 h-12 rounded border border-fortrix-grey-300"
                        style={{ backgroundColor: selectedTheme.colors.primary.navy }}
                      />
                      <input
                        type="text"
                        value={selectedTheme.colors.primary.navy}
                        readOnly
                        className="flex-1 px-3 py-2 border border-fortrix-grey-300 rounded-md bg-fortrix-grey-100"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Accent Colors */}
              <div>
                <h3 className="font-semibold text-fortrix-grey-900 mb-4">Accent Colors</h3>
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(selectedTheme.colors.accent).map(([name, color]) => (
                    <div key={name}>
                      <label className="block text-sm text-fortrix-grey-700 mb-2 capitalize">
                        {name}
                      </label>
                      <div className="flex items-center space-x-2">
                        <div
                          className="w-12 h-12 rounded border border-fortrix-grey-300"
                          style={{ backgroundColor: color }}
                        />
                        <input
                          type="text"
                          value={color}
                          readOnly
                          className="flex-1 px-3 py-2 border border-fortrix-grey-300 rounded-md bg-fortrix-grey-100"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Neutral Colors */}
              <div>
                <h3 className="font-semibold text-fortrix-grey-900 mb-4">Neutral Colors</h3>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(selectedTheme.colors.neutral).map(([name, color]) => (
                    <div key={name}>
                      <label className="block text-sm text-fortrix-grey-700 mb-2">
                        {name.replace('grey', 'Grey ').replace('white', 'White')}
                      </label>
                      <div className="flex items-center space-x-2">
                        <div
                          className="w-12 h-12 rounded border border-fortrix-grey-300"
                          style={{ backgroundColor: color }}
                        />
                        <input
                          type="text"
                          value={color}
                          readOnly
                          className="flex-1 px-3 py-2 border border-fortrix-grey-300 rounded-md bg-fortrix-grey-100"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-fortrix-amber/10 border border-fortrix-amber/30 rounded-md p-4">
        <p className="text-sm text-fortrix-grey-700">
          <strong>Note:</strong> Full editing functionality requires backend API implementation.
          Currently showing read-only view with theme toggle capability.
        </p>
      </div>
    </div>
  );
}


