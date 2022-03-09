import { useState, useEffect, useRef } from 'react';
import ButtonStyles from './index.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(ButtonStyles);
export default function TextButton({
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
    <div
      className={cx(className, {
        button: true,
        'button--danger': danger,
      })}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
