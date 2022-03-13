import Head from 'next/head';
import { useSettings } from '../../hooks/context/settings';
import Header from '../Header';
import styles from './index.module.scss';

const Layout = ({ title, description, children, imageURL }: LayoutProps) => {
  const { settings } = useSettings() as any;
  const { theme } = settings;
  return (
    <>
      <Head>
        <title>{title ? title : 'Nishit Jha'}</title>
        <meta
          name="description"
          content={description ? description : 'My Portfolio'}
        />
        <meta
          property="og:image"
          content={
            imageURL
              ? imageURL
              : 'https://media.discordapp.net/attachments/945275718793834526/948948146942259260/unknown.png'
          }
        />
        <meta property="og:title" content={title ? title : 'Nishit Jha'} />
        <meta
          property="og:description"
          content={description ? description : 'My portfolio'}
        />

        <meta
          property="twitter:image"
          content={
            imageURL
              ? imageURL
              : 'https://media.discordapp.net/attachments/945275718793834526/948948146942259260/unknown.png'
          }
        />
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
  imageURL?: string;
};

export default Layout;
