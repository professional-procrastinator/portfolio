import Primary from '../components/Button/Primary';
import Layout from '../components/Layout';
import pageStyles from '../styles/pages/index.module.scss';
const GuestBook = () => {
  return (
    <Layout theme={'dark'} title="The Guestbook">
      <div className={pageStyles.main}>
        <div className={pageStyles.main__content}>
          <div className={pageStyles.main__content__heading}>The Guestbook</div>

          <div className={pageStyles.main__content__description}>
            Here’s the guestbook. Sign in with a provider and leave a comment.
            Only your name and comment will be shown.{' '}
          </div>

          <div className={pageStyles.main__content__body}>
            <div className={pageStyles.main__content__body__header}>
              <div className={pageStyles.main__content__body__header__heading}>
                Previous Visitors
              </div>

              <div className={pageStyles.main__content__body__header__action}>
                <Primary>Sign the guestbook</Primary>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GuestBook;
