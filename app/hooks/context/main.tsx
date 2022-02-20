import React, { useState, useContext, createContext, useEffect } from 'react';

import { updateUserTheme, getUserData, IUser } from './helpers/main';
const Context = createContext({});

const MainProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser>();
  const [theme, setTheme] = useState('dark');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      const data = await getUserData();

      if (data.error || !data.success) {
        setUser(null!);
        return setLoading(false);
      }

      setUser(data.response.data);

      return setLoading(false);
    };

    init();
  }, []);

  const updateTheme = async (newTheme: string) => {
    if (!user) {
      return window.localStorage.setItem('theme', newTheme);
    }

    async function update() {
      await updateUserTheme(newTheme);
    }

    if (user.theme !== newTheme) {
      await update();
    }
  };

  return (
    <Context.Provider value={{ user, loading, theme, updateTheme }}>
      {children}
    </Context.Provider>
  );
};

const useMainContext = () => useContext(Context);

export { MainProvider, useMainContext };
