import styles from './index.module.scss';
import { useSession } from 'next-auth/react';
import TextButton from '../../../../components/Button/Text';
import { useState } from 'react';
import axios from 'axios';

const Entry = ({
  entry,
  setEntries,
  entries,
}: {
  entry: any;
  setEntries: (entries: any[]) => void;
  entries: any[];
}) => {
  const { data, status } = useSession();
  const [isDeleting, setDeleting] = useState(false);

  const deleteEntry = async () => {
    setDeleting(true);
    const { data } = await axios.delete(`/api/guestbook/${entry._id}`);

    if (data.success) {
      setEntries(entries.filter((e: any) => e._id !== entry._id));
    }

    return setDeleting(false);
  };

  return (
    <div className={styles.main}>
      <div className={styles.main__header}>
        <div className={styles.main__header__name}>{entry.author.name}</div>
        {data && data.user && data.user.email === entry.author.email && (
          <TextButton
            onClick={deleteEntry}
            loading={isDeleting}
            danger
            className={styles.main__header__button}
          >
            {isDeleting ? 'Deleting...' : 'Delete'}
          </TextButton>
        )}
      </div>
      <div className={styles.main__content}>{entry.content}</div>
    </div>
  );
};

export default Entry;
