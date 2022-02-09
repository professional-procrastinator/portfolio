import { useMainContext } from "./context/main";

const useTheme = () => {
  const { theme, setTheme } = useMainContext() as any;
  return {
    theme,
    setTheme,
  };
};

export default useTheme;
