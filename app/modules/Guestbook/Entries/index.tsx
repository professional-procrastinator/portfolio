import axios from 'axios';
import { useEffect, useState } from 'react';
import Loader from '../../../components/Loader';
import Entry from './Entry';
import styles from './index.module.scss';

const GuestbookEntries = ({
  entries,
  loading,
  setEntries,
}: {
  entries: any[];
  loading: boolean;
  setEntries: (entries: any[]) => void;
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
            <Entry
              key={entry._id}
              setEntries={setEntries}
              entry={entry}
              entries={entries}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default GuestbookEntries;
