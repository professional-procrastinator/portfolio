import { useState, useEffect, useRef } from 'react';
import ButtonStyles from './index.module.scss';
import classNames from 'classnames/bind';
import Loader from '../../Loader';
const cx = classNames.bind(ButtonStyles);
export default function Primary({
  children,
  className,
  onClick,
  loading,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  loading?: boolean;
}) {
  return (
    <button
      className={cx(className, {
        button: true,
        [ButtonStyles['button--loading']]: loading,
      })}
      onClick={loading ? undefined : onClick}
      disabled={loading}
    >
      {loading ? (
        <Loader
          mainStyles={{
            width: '16px',
            height: '16px',
            border: '1.5px solid #8d8c8c',
            borderLeftColor: 'transparent',
          }}
        />
      ) : (
        children
      )}
    </button>
  );
}
