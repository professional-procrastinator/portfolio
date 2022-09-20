import Layout from '../components/Layout';
import pageStyles from '../styles/shared/page.module.scss';

const About = () => {
  return (
    <Layout title="About Me">
      <div className={pageStyles.main}>
        <div className={pageStyles.main__content}>
          <div className={pageStyles.main__content__heading}>About Me</div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
