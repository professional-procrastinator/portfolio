import styles from "./index.module.scss";

export default function SkeletonEntry() {
  return (
    <div className={styles.main}>
      <div className={styles.main__header}>
        <div className={styles.main__header__name}></div>
      </div>
      <div className={styles.main__content}></div>
    </div>
  );
}
