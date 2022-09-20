import axios from 'axios';
import { useEffect, useState } from 'react';
import Loader from '../../../components/Loader';
import Entry from './Entry';
import styles from './index.module.scss';
import SkeletonEntry from './SkeletonEntry';
import { useMediaQuery } from 'react-responsive';

const GuestbookEntries = ({
  entries,
  loading,
  setEntries,
}: {
  entries: any[];
  loading: boolean;
  setEntries: (entries: any[]) => void;
}) => {
  const isMobile = useMediaQuery({ maxWidth: '1069px' });

  return (
    <div className={styles.main}>
      {loading && (
        <div className={styles.main__entries}>
          {isMobile ? (
            <>
              {[...Array(3)].map((_, i) => (
                <SkeletonEntry key={i} />
              ))}
            </>
          ) : (
            <>
              {[...Array(6)].map((_, i) => (
                <SkeletonEntry key={i} />
              ))}
            </>
          )}
        </div>
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
