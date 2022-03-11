import axios from 'axios';
import { useEffect, useState } from 'react';
import { useMain } from '../../../hooks/context/main';

const GuestbookEntries = () => {
  const [entries, setEntries] = useState<any>([]);
  const { gbReload } = useMain() as any;

  const fetchEntries = async () => {
    const { data } = await axios.get('/api/guestbook/');

    if (!data.success) {
    }

    setEntries(data.response.data);
  };

  useEffect(() => {
    fetchEntries();
  }, [gbReload]);

  return (
    <div>
      {entries.map((entry: any) => (
        <div>{entry.content}</div>
      ))}
    </div>
  );
};

export default GuestbookEntries;
