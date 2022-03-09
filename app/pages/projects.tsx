import Layout from '../components/Layout';
import pageStyles from '../styles/shared/page.module.scss';

const Projects = () => {
  return (
    <Layout title="My Projects">
      <div className={pageStyles.main}>
        <div className={pageStyles.main__content}>
          <div className={pageStyles.main__content__heading}>My Projects</div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
