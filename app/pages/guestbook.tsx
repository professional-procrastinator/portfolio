import { NextPage } from 'next';
import Layout from '../components/Layout';
import Guestbook from '../modules/Guestbook';

const GuestbookPage: NextPage = () => {
  return (
    <Layout
      title="The Guestbook"
      description="Sign my guestbook!"
      imageURL="https://media.discordapp.net/attachments/945275718793834526/952561461727752193/unknown.png?width=1203&height=630"
    >
      <Guestbook />
    </Layout>
  );
};

export default GuestbookPage;
