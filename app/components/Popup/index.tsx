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
  setState,
}: {
  state: boolean;
  children: React.ReactNode;
  className?: string;
  setState: (state: boolean) => void;
}) {
  const popupRef = useRef(null);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  useOnClickOutside(popupRef, () => {
    setState(false);
  });

  return null;
}
