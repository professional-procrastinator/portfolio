import { NextPage } from 'next';
import Link from 'next/link';
import { useEffect } from 'react';
import Layout from '../components/Layout';

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <p>Hello Next.js 👋</p>
    </Layout>
  );
};

export default Home;
