import { useMainContext } from "./context/main";

const useSession = () => {
  const { user, setUser, loading } = useMainContext() as any;
  return {
    user,
    setUser,
    loading,
  };
};

export default useSession;
