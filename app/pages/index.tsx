import type { NextPage } from "next";
import Layout from "../components/Layout";

import useTheme from "../hooks/useTheme";
import useSession from "../hooks/useSession";

const Home: NextPage = () => {
  const { theme, setTheme } = useTheme();
  const { user, setUser } = useSession();

  return (
    <>
      <Layout title="Home">
        <h2>Home</h2>
      </Layout>
    </>
  );
};

export default Home;
