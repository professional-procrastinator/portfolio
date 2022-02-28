import Head from 'next/head';
import { useSettings } from '../../hooks/context/settings';
import Header from '../Header';
import styles from './index.module.scss';

const Layout = ({ title, description, children }: LayoutProps) => {
  const { settings } = useSettings() as any;
  const { theme } = settings;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <div
        className={styles.main}
        style={
          theme === 'dark'
            ? { backgroundColor: 'var(--background-dark)' }
            : {
                backgroundColor: 'var(--background-light)',
              }
        }
      >
        <Header />
        {children}
      </div>
    </>
  );
};

type LayoutProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
};

export default Layout;
