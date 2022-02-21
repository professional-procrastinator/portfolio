import Primary from '../components/Button/Primary';
import Layout from '../components/Layout';
import styles from '../styles/pages/projects.module.scss';
import pageStyles from '../styles/pages/index.module.scss';
const GuestBook = () => {
  return (
    <Layout theme={'dark'} title="My Projects">
      <div className={pageStyles.main}>
        <div className={pageStyles.main__content}>
          <div className={pageStyles.main__content__heading}>My Projects</div>
        </div>
      </div>
    </Layout>
  );
};

export default GuestBook;
