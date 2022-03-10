import styles from './index.module.scss';
import classNames from 'classnames/bind';
import Logo from '../../public/icon.svg';
import Hamburger from '../../public/icons/hamburger.svg';
import { useRef, useState, useContext } from 'react';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { useSettings } from '../../hooks/context/settings';
import TextButton from '../Button/Text';
import { signOut, useSession } from 'next-auth/react';
const cx = classNames.bind(styles);

export default function SideNav() {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const sideNavRef = useRef(null);
  const router = useRouter();
  const { settings, updateSettings } = useSettings() as any;
  const { theme } = settings;

  useOnClickOutside(sideNavRef, () => {
    setSideNavOpen(false);
  });

  if (theme === 'dark') {
    return (
      <>
        <Hamburger
          onClick={() => {
            setSideNavOpen(true);
          }}
          className={styles.hamburger}
        />
        <div
          className={cx({
            [styles.overlay]: true,
            [styles['overlay-open']]: sideNavOpen,
          })}
        ></div>

        <div
          className={cx({
            [styles.sideNav]: true,
            [styles['sideNav-open']]: sideNavOpen,
          })}
          ref={sideNavRef}
        >
          <div className={styles.sideNav__body}>
            <div
              onClick={() => {
                setSideNavOpen(false);
              }}
              className={styles.sideNav__body__logo}
            >
              <Logo />
            </div>

            <SideNavLinks />
            <SideNavFooter />
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Hamburger
        onClick={() => {
          setSideNavOpen(true);
        }}
        className={styles.hamburger}
      />
      <div
        className={cx({
          [styles.overlay]: true,
          [styles['overlay-open']]: sideNavOpen,
        })}
      ></div>

      <div
        className={cx({
          [styles.sideNav]: true,
          [styles['sideNav-open']]: sideNavOpen,
        })}
        ref={sideNavRef}
      >
        <div className={styles.sideNav__body}>
          <div
            onClick={() => {
              setSideNavOpen(false);
            }}
            className={styles.sideNav__body__logo}
          >
            <Logo />
          </div>

          <SideNavLinks />
          <SideNavFooter />
        </div>
      </div>
    </>
  );
}

const SideNavLinks = () => {
  const router = useRouter();
  return (
    <div className={styles.sideNav__body__links}>
      <Link href="/" passHref>
        <div
          className={cx({
            [styles.sideNav__body__links__link]: true,
            [styles['sideNav__body__links__link--active']]:
              router.pathname === '/',
          })}
        >
          <div className={styles.sideNav__body__links__link__icon}>
            <Icon
              color="#9e9e9e"
              width={32}
              height={32}
              icon="mdi-light:home"
            />
          </div>

          <div className={styles.sideNav__body__links__link__label}>Home</div>
        </div>
      </Link>

      <Link href="/projects" passHref>
        <div
          className={cx({
            [styles.sideNav__body__links__link]: true,
            [styles['sideNav__body__links__link--active']]:
              router.pathname === '/projects',
          })}
        >
          <div className={styles.sideNav__body__links__link__icon}>
            <Icon
              color="#9e9e9e"
              width={32}
              height={32}
              icon="mdi-light:star"
            />
          </div>

          <div className={styles.sideNav__body__links__link__label}>
            My Projects
          </div>
        </div>
      </Link>

      <Link href="/guestbook" passHref>
        <div
          className={cx({
            [styles.sideNav__body__links__link]: true,
            [styles['sideNav__body__links__link--active']]:
              router.pathname === '/guestbook',
          })}
        >
          <div className={styles.sideNav__body__links__link__icon}>
            <Icon
              color="#9e9e9e"
              width={32}
              height={32}
              icon="mdi-light:pencil"
            />
          </div>

          <div className={styles.sideNav__body__links__link__label}>
            The Guestbook
          </div>
        </div>
      </Link>
    </div>
  );
};

const SideNavFooter = () => {
  const { status, data } = useSession();
  const router = useRouter();
  return (
    <div className={styles.sideNav__body__footer}>
      {status !== 'loading' &&
      data?.user &&
      router.pathname === '/guestbook' ? (
        <div className={styles.sideNav__body__footer__gb}>
          <div className={styles.sideNav__body__footer__gb__text}>
            THE GUESTBOOK
          </div>
          <TextButton
            danger
            onClick={() => {
              signOut();
            }}
            className={styles.sideNav__body__footer__gb__button}
          >
            Sign out
          </TextButton>
        </div>
      ) : null}
    </div>
  );
};
