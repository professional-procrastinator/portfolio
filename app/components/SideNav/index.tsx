import styles from './index.module.scss';
import classNames from 'classnames/bind';
import Logo from '../../public/icon.svg';
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
        <div>
          <Icon
            icon="bx:menu"
            color="#fff"
            onClick={() => {
              setSideNavOpen(true);
            }}
            width="40px"
            height="40px"
            style={{
              cursor: 'pointer',
              margin: '37px',
            }}
          />
        </div>
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

            <SideNavLinks open={sideNavOpen} />
            <SideNavFooter />
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div>
        <Icon
          icon="bx:menu"
          color="#fff"
          onClick={() => {
            setSideNavOpen(true);
          }}
          style={{
            cursor: 'pointer',
            padding: '37px',
          }}
        />
      </div>
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

          <SideNavLinks open={sideNavOpen} />
          <SideNavFooter />
        </div>
      </div>
    </>
  );
}

const SideNavLinks = ({ open }: { open: boolean }) => {
  const router = useRouter();

  const links = [
    {
      name: 'Home',
      href: '/',
      icon: 'mdi-light:home',
    },
    {
      name: 'My Projects',
      href: '/projects',
      icon: 'mdi-light:star',
    },
    {
      name: 'The Guestbook',
      href: '/guestbook',
      icon: 'mdi-light:pencil',
    },
  ];

  return (
    <div className={styles.sideNav__body__links}>
      {links.map((link) => {
        return (
          <Link href={link.href} passHref>
            <div
              className={cx({
                [styles.sideNav__body__links__link]: true,
                [styles['sideNav__body__links__link--anim']]: open,
                [styles['sideNav__body__links__link--active']]:
                  router.pathname === link.href,
              })}
            >
              <div className={styles.sideNav__body__links__link__icon}>
                <Icon color="#9e9e9e" width={32} height={32} icon={link.icon} />
              </div>

              <div className={styles.sideNav__body__links__link__label}>
                {link.name}
              </div>
            </div>
          </Link>
        );
      })}
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
