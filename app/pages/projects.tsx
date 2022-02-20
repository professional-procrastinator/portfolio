import Primary from '../components/Button/Primary';
import Layout from '../components/Layout';
import styles from '../styles/pages/projects.module.scss';
const GuestBook = () => {
  return (
    <Layout theme={'dark'} title="My Projects">
      <div className={styles.main}>
        <div className={styles.main__heading}>My Projects</div>
      </div>
    </Layout>
  );
};

export default GuestBook;
