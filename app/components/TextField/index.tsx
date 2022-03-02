import styles from './index.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
const cx = classNames.bind(styles);
export default function TextField({
  className,
  onChange,
  label,
  value,
  type,
  textarea,
}: {
  className?: string;
  onChange?: (value: string) => void;
  label?: string;
  value?: string;
  type?: string;
  textarea?: boolean;
}) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <label className={styles.container}>
      <span
        className={cx({
          [styles.label]: true,
          [styles['label--focused']]: isFocused,
        })}
      >
        {label}
      </span>
      {textarea ? (
        <textarea
          className={styles.textfield}
          value={value}
          onChange={(e) => {
            if (onChange) {
              onChange(e.target.value);
            }
          }}
          onFocus={(e) => {
            setIsFocused(true);
          }}
          onBlur={(e) => {
            if (e.target.value !== '' || e.target.value.trim() !== '') {
              return;
            }
            setIsFocused(false);
          }}
        />
      ) : (
        <input
          className={styles.textfield}
          type={type}
          value={value}
          onChange={(e) => {
            if (onChange) {
              onChange(e.target.value);
            }
          }}
          onFocus={(e) => {
            setIsFocused(true);
          }}
          onBlur={(e) => {
            if (e.target.value !== '' || e.target.value.trim() !== '') {
              return;
            }
            setIsFocused(false);
          }}
        />
      )}
    </label>
  );
}
