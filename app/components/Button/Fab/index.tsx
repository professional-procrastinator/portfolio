import styles from './index.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
export default function FAB({
  children,
  className,
  onClick,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button
      className={cx(className, {
        [styles['fab']]: true,
      })}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
