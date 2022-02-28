import { NextPage } from 'next';
import Layout from '../components/Layout';
import Guestbook from '../modules/Guestbook';

const GuestbookPage: NextPage = () => {
  return (
    <Layout title="The Guestbook">
      <Guestbook />
    </Layout>
  );
};

export default GuestbookPage;
