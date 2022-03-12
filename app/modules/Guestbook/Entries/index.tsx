import axios from 'axios';
import { useEffect, useState } from 'react';
import Loader from '../../../components/Loader';
import Entry from './Entry';
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
            margin: '20% auto auto auto',
          }}
        />
      )}

      {!loading && (
        <div className={styles.main__entries}>
          {entries.map((entry: any) => (
            <Entry key={entry._id} entry={entry} />
          ))}
        </div>
      )}
    </div>
  );
};

export default GuestbookEntries;
