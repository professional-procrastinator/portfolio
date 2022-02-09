import { useMainContext } from "./context/main";

const useSession = () => {
  const { user, setUser } = useMainContext() as any;
  return {
    user,
    setUser,
  };
};

export default useSession;
