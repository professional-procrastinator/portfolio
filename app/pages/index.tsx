import type { NextPage } from 'next';
import Layout from '../components/Layout';

import useTheme from '../hooks/useTheme';
import useSession from '../hooks/useSession';
import Loader from '../components/Loader';
import Landing from '../modules/Landing';

const Home: NextPage = () => {
  const { theme, updateTheme } = useTheme();

  return (
    <>
      <Layout title="Home" theme={theme}>
        <Landing />
      </Layout>
    </>
  );
};

export default Home;
