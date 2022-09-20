import styles from './index.module.scss';
import Icon from '../../public/icon.svg';

import { useMediaQuery } from 'react-responsive';
import Link from 'next/link';
import SideNav from '../SideNav';
import { useState } from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames/bind';
import { signOut, useSession } from 'next-auth/react';
import TextButton from '../Button/Text';
const cx = classNames.bind(styles);

export default function Header() {
  const isMobile = useMediaQuery({ maxWidth: '928px' });

  if (!isMobile) {
    return (
      <header className={styles.header}>
        <Link href="/" passHref>
          <Icon className={styles.header__logo} />
        </Link>

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

const HeaderLinks = () => {
  const router = useRouter();
  const { data, status } = useSession();
  const links = [
    {
      target: '/about',
      label: 'About Me',
      active: router.pathname === '/about',
    },
    {
      target: '/guestbook',
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
      {router.pathname === '/guestbook' &&
      status !== 'loading' &&
      data?.user ? (
        <TextButton
          onClick={() => {
            signOut();
          }}
          danger
          className={styles.guestbook__signout}
        >
          Sign out
        </TextButton>
      ) : null}
    </div>
  );
};
