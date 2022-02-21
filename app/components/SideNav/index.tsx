import styles from './index.module.scss';
import classNames from 'classnames/bind';
import Icon from '../../public/icon.svg';
import Hamburger from '../../public/icons/hamburger.svg';
import { useRef, useState } from 'react';
import HomeIcon from '../../public/icons/home.svg';

import useOnClickOutside from '../../hooks/useOnClickOutside';
import { useRouter } from 'next/router';
import Link from 'next/link';
const cx = classNames.bind(styles);

export default function SideNav() {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const sideNavRef = useRef(null);
  const router = useRouter();

  useOnClickOutside(sideNavRef, () => {
    setSideNavOpen(false);
  });
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
            <Icon />
          </div>

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
                  <HomeIcon />
                </div>

                <div className={styles.sideNav__body__links__link__label}>
                  Home
                </div>
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
                  <HomeIcon />
                </div>

                <div className={styles.sideNav__body__links__link__label}>
                  My Projects
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
