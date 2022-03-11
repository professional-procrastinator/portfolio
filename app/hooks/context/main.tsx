import { useState, useEffect, createContext, useContext } from 'react';

const MainContext = createContext({});

const MainProvider = ({ children }: { children: React.ReactNode }) => {
  const [gbReload, setGbReload] = useState(false);

  return (
    <MainContext.Provider value={{ gbReload, setGbReload }}>
      {children}
    </MainContext.Provider>
  );
};

const useMain = () => {
  return useContext(MainContext);
};

export { MainProvider, useMain, MainContext };
