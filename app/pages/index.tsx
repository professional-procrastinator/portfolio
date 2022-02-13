import type { NextPage } from "next";
import Layout from "../components/Layout";

import useTheme from "../hooks/useTheme";
import useSession from "../hooks/useSession";
import Loader from "../components/Loader";
import Landing from "../modules/Landing";

const Home: NextPage = () => {
  const { theme, updateTheme } = useTheme();
  const { user, setUser, loading } = useSession();

  return (
    <>
      <Layout title="Home" theme={"dark"}>
        {loading && <Loader containerStyles={LoaderStyles} />}
        {!loading && !user && <Landing />}
      </Layout>
    </>
  );
};

const LoaderStyles = {
  margin: "auto",
};
export default Home;
