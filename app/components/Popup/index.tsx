import useOnClickOutside from '../../hooks/useOnClickOutside';
import { useRef } from 'react';
import styles from './index.module.scss';
import classNames from 'classnames/bind';
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
  return { children };
}
