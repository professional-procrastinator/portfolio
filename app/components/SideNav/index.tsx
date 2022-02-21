import styles from './index.module.scss';
import classNames from 'classnames/bind';
import Icon from '../../public/icon.svg';
import Hamburger from '../../public/icons/hamburger.svg';
import { useRef, useState } from 'react';

import useOnClickOutside from '../../hooks/useOnClickOutside';
const cx = classNames.bind(styles);

export default function SideNav() {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const sideNavRef = useRef(null);

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
        <div className={styles.sideNav__header}>
          <div className={styles.sideNav__header__logo}>
            <Icon />
          </div>
        </div>
      </div>
    </>
  );
}
