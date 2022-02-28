export type Settings = {
  theme: 'light' | 'dark';
};

const DefaultSettings: Settings = {
  theme: 'dark',
};

export function getSettings(): Settings {
  const settings = localStorage.getItem('settings');

  if (settings) {
    return JSON.parse(settings);
  }

  return DefaultSettings;
}

export function storeSettings(settings: Settings): Settings {
  localStorage.setItem('settings', JSON.stringify(settings));

  return settings;
}
