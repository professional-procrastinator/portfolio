import styles from './index.module.scss';
import classNames from 'classnames/bind';
import { useMediaQuery } from 'react-responsive';
const cx = classNames.bind(styles);

import useOnClickOutside from '../../hooks/useOnClickOutside';
import { useRef } from 'react';
export default function Popup({
  state,
  children,
  className,
  close,
}: {
  state: boolean;
  children: React.ReactNode;
  className?: string;
  close: () => void;
}) {
  const popupRef = useRef(null);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  useOnClickOutside(popupRef, () => {
    close();
  });

  return (
    <>
      <div
        className={cx(styles['popup-overlay'], {
          [styles['popup-overlay--open']]: state,
        })}
      />
      <div
        className={
          isMobile
            ? cx(styles['popup--phone'], className, {
                [styles['popup--phone--open']]: state,
              })
            : cx(styles.popup, className, {
                [styles['popup--open']]: state,
              })
        }
        ref={popupRef}
      >
        {children}
      </div>
    </>
  );
}
