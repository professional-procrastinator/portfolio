import React, { useState, useContext, createContext, useEffect } from "react";

import {
  updateUserTheme,
  getUserTheme,
  getUserData,
  IUser,
} from "./helpers/main";
const Context = createContext({});

const MainProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser>();
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    async function getTheme() {
      const data = await getUserTheme();

      if (data.success) {
        setUser(data.response.data);
      }

      if (data.error.code == 401) {
        setTheme("light");
      }
    }

    getTheme();

    async function getUser() {
      const data = await getUserData();

      if (data.success) {
        setUser(data.response.data);
      }

      if (data.error.code == 401) {
        setUser(null!);
      }
    }

    getUser();
  }, []);

  useEffect(() => {
    if (!user) return;

    async function update() {
      await updateUserTheme(theme);
    }

    if (user.theme !== theme) {
      update();
    }
    //eslint-disable-next-line
  }, [theme]);

  return (
    <Context.Provider value={{ user, theme, setTheme }}>
      {children}
    </Context.Provider>
  );
};

const useMainContext = () => useContext(Context);

export { MainProvider, useMainContext };
