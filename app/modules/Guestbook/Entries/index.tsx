import axios from 'axios';
import { useEffect, useState } from 'react';
import Loader from '../../../components/Loader';
import styles from './index.module.scss';

const GuestbookEntries = ({
  entries,
  loading,
}: {
  entries: any[];
  loading: boolean;
}) => {
  return (
    <div className={styles.main}>
      {loading && (
        <Loader
          containerStyles={{
            margin: '90px auto auto auto',
          }}
        />
      )}

      {!loading &&
        entries.map((entry: any) => <div key={entry._id}>{entry.content}</div>)}
    </div>
  );
};

export default GuestbookEntries;
