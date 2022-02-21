import styles from './index.module.scss';
import Image from 'next/image';
import Icon from '../../public/icon.svg';

import { useMediaQuery } from 'react-responsive';
import Primary from '../Button/Primary';
import Link from 'next/link';
import SideNav from '../SideNav';
import { useState } from 'react';

export default function Header() {
  const isMobile = useMediaQuery({ maxWidth: '928px' });
  const [sideNavOpen, setSideNavOpen] = useState(false);

  if (!isMobile) {
    return (
      <header className={styles.header}>
        <div className={styles.header__logo}>
          <Link href="/" passHref>
            <Icon className={styles.header__logo__src} />
          </Link>
        </div>

        <HeaderLinks />
      </header>
    );
  }
  return (
    <>
      <SideNav />
    </>
  );
}

const Logo = () => {
  return (
    <Image
      className={styles.header__logo__src}
      alt={'AppName'}
      src={Icon}
      width={36}
      height={36}
      quality={100}
    />
  );
};

const HeaderLinks = () => {
  const links = [
    {
      target: 'projects',
      label: 'My Projects',
    },
    {
      target: 'guestbook',
      label: 'The Guestbook',
    },
  ];

  return (
    <div className={styles.header__links}>
      {links.map((link, i) => {
        return (
          <Link passHref key={i} href={link.target}>
            <div className={styles.header__links__link}>{link.label}</div>
          </Link>
        );
      })}
    </div>
  );
};
