import { useState, useEffect, useRef } from 'react';
import ButtonStyles from './index.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(ButtonStyles);
export default function Primary({
  children,
  className,
  onClick,
  danger,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  danger?: boolean;
}) {
  return (
    <button
      className={cx(className, {
        button: true,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
