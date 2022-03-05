import { NextPage } from 'next';
import Link from 'next/link';
import { useEffect } from 'react';
import Home from '../modules/Home';
import Layout from '../components/Layout';

const Main: NextPage = () => {
  return (
    <Layout title="Nishit Jha">
      <Home />
    </Layout>
  );
};

export default Main;
