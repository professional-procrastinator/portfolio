import styles from './index.module.scss';
import Image from 'next/image';
import Icon from '../../public/icon.svg';

import { useMediaQuery } from 'react-responsive';
import Primary from '../Button/Primary';
import Link from 'next/link';
import SideNav from '../SideNav';
import { useState } from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

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
  const router = useRouter();
  const links = [
    {
      target: 'projects',
      label: 'My Projects',
      active: router.pathname === '/projects',
    },
    {
      target: 'guestbook',
      label: 'The Guestbook',
      active: router.pathname === '/guestbook',
    },
  ];

  return (
    <div className={styles.header__links}>
      {links.map((link, i) => {
        return (
          <Link passHref key={i} href={link.target}>
            <div
              className={cx(styles.header__links__link, {
                [styles['header__links__link--active']]: link.active,
              })}
            >
              {link.label}
            </div>
          </Link>
        );
      })}
    </div>
  );
};
