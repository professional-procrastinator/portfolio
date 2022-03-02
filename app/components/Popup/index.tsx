import useOnClickOutside from '../../hooks/useOnClickOutside';
import { useRef } from 'react';
import styles from './index.module.scss';
import classNames from 'classnames/bind';
import { useMediaQuery } from 'react-responsive';
const cx = classNames.bind(styles);

export default function Popup({
  children,
  state,
  close,
}: {
  children: React.ReactNode;
  state: boolean;
  close: () => void;
}) {
  const popupRef = useRef(null);
  const isMobile = useMediaQuery({ maxWidth: '1069px' });
  //69 is funny

  useOnClickOutside(popupRef, () => {
    close();
  });
  return (
    <div
      className={cx({
        [styles.overlay]: true,
        [styles['overlay-active']]: state,
      })}
    >
      <div
        className={cx({
          [styles.popup]: !isMobile,
          [styles['popup-open']]: !isMobile && state,

          [styles['popup-mobile']]: isMobile,
          [styles['popup-mobile-open']]: isMobile && state,
        })}
        ref={popupRef}
      >
        {children}
      </div>
    </div>
  );
}
