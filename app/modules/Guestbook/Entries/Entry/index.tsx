import styles from './index.module.scss';

const Entry = ({ entry }: { entry: any }) => {
  return (
    <div className={styles.main}>
      <div className={styles.main__header}>
        <div className={styles.main__header__name}>{entry.author.name}</div>
      </div>
      <div className={styles.main__content}>{entry.content}</div>
    </div>
  );
};

export default Entry;
