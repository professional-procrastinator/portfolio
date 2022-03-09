import styles from './index.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
const cx = classNames.bind(styles);
export default function TextField({
  className,
  label,
  value,
  setValue,
  type,
  textarea,
  limit,
}: {
  className?: string;
  label?: string;
  value?: string;
  setValue?: (value: string) => void;
  type?: string;
  textarea?: boolean;
  limit?: number;
}) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <label
      className={cx(className, {
        [styles.container]: true,
      })}
    >
      <span
        className={cx({
          [styles.label]: true,
          [styles['label--focused']]: isFocused,
        })}
      >
        {label}
      </span>

      <span
        className={cx({
          [styles.count]: true,
        })}
      >
        <p>{value?.length}</p>/<p>{limit}</p>
      </span>
      {textarea ? (
        <textarea
          value={value}
          onChange={(e) => {
            if (e.target.value.length > limit!) {
              return;
            }
            setValue ? setValue(e.target.value) : null;
          }}
          className={cx({
            [styles.textfield]: true,
            [styles['textfield--focused']]: isFocused,
          })}
          onFocus={(e) => {
            setIsFocused(true);
          }}
          onBlur={(e) => {
            if (e.target.value !== '' || e.target.value.trim() !== '') {
              return;
            }
            setIsFocused(false);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              setIsFocused(false);
            }
          }}
        />
      ) : (
        <input
          className={cx({
            [styles.textfield]: true,
            [styles['textfield--focused']]: isFocused,
          })}
          type={type}
          value={value}
          onChange={(e) => {
            setValue ? setValue(e.target.value) : null;
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
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              setIsFocused(false);
            }
          }}
        />
      )}
    </label>
  );
}
