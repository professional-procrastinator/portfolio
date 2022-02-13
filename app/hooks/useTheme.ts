import { useMainContext } from "./context/main";

const useTheme = () => {
  const { theme, updateTheme } = useMainContext() as any;
  return {
    theme,
    updateTheme,
  };
};

export default useTheme;
