import React, { useState, useContext, createContext, useEffect } from "react";

import { updateUserTheme, getUserData, IUser } from "./helpers/main";
const Context = createContext({});

const MainProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser>();
  const [theme, setTheme] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    async function setData() {
      const data = await getUserData();

      if (data.success) {
        setUser(data.response.data);
      }

      if (data.error.code == 401) {
        setUser(null!);
      }

      if (user) {
        setTheme(user.theme!);
      } else {
        setTheme(window.localStorage.getItem("theme")!);
      }

      return setLoading(false);
    }

    setData();

    //eslint-disable-next-line
  }, []);

  const updateTheme = (newTheme: string) => {
    if (!user) {
      return window.localStorage.setItem("theme", newTheme);
    }

    async function update() {
      await updateUserTheme(newTheme);
    }

    if (user.theme !== newTheme) {
      update();
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
