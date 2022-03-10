import styles from './index.module.scss';
import classNames from 'classnames/bind';
import { Icon } from '@iconify/react';
import { useEffect, useRef } from 'react';
const cx = classNames.bind(styles);

const Checkbox = ({
  checked,
  setChecked,
  label,
}: {
  checked: boolean;
  setChecked: (checked: boolean) => void;
  label: string;
}) => {
  return (
    <div className={styles.container}>
      <div
        onClick={() => setChecked(!checked)}
        className={cx({
          [styles.checkbox]: true,
          [styles['checkbox--checked']]: checked,
        })}
      >
        <Icon
          icon="charm:tick"
          width={12}
          height={12}
          className={cx({
            [styles.checkbox__icon]: true,
            [styles['checkbox__icon--checked']]: checked,
          })}
        />
      </div>
      <div
        className={styles.label}
        onClick={() => {
          setChecked(!checked);
        }}
      >
        {label}
      </div>
    </div>
  );
};
export default Checkbox;
