import { useState, useEffect, useRef } from 'react';
import ButtonStyles from './index.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(ButtonStyles);
export default function TextButton({
  children,
  className,
  onClick,
  danger,
  loading,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  danger?: boolean;
  loading?: boolean;
}) {
  return (
    <button
      className={cx(className, {
        button: true,
        'button--danger': danger,
        [ButtonStyles['button--loading']]: loading && !danger,
        [ButtonStyles['button--danger-loading']]: loading && danger,
      })}
      onClick={loading ? undefined : onClick}
      disabled={loading}
    >
      {children}
    </button>
  );
}
