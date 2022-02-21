import Primary from '../components/Button/Primary';
import Layout from '../components/Layout';
import pageStyles from '../styles/pages/index.module.scss';
const GuestBook = () => {
  return (
    <Layout theme={'dark'} title="The Guestbook">
      <div className={pageStyles.main}>
        <div className={pageStyles.main__content}>
          <div className={pageStyles.main__content__heading}>The Guestbook</div>
        </div>
      </div>

      <Primary>Sign the guestbook</Primary>
    </Layout>
  );
};

export default GuestBook;
