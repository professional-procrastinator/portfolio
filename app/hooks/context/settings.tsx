import { useState, useEffect, createContext, useContext } from 'react';
import { getSettings, Settings, storeSettings } from './helpers/settings';

const SettingsContext = createContext({});

const SettingsProvider = ({ children }: { children: React.ReactNode }) => {
  const [settings, setSettings] = useState<Settings>({
    theme: 'dark',
  });

  useEffect(() => {
    setSettings(getSettings());
  }, [settings]);

  const updateSettings = (newSettings: Settings) => {
    setSettings(newSettings);
    return storeSettings(newSettings);
  };

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

const useSettings = () => {
  return useContext(SettingsContext);
};

export { SettingsProvider, useSettings, SettingsContext };
