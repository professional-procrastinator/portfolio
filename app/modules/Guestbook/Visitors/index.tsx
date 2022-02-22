import styles from './index.module.scss';
import { useState, useEffect } from 'react';
import axios from '../../../utils/axios';

export default function Visitors() {
  const [comments, setComments] = useState<any>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('/guestbook');
      setComments(response.data.response.data);
    }
    fetchData();
  }, []);

  return (
    <div className={styles.main}>
      {comments.map((comment: Comment) => {
        return <div key={comment._id}></div>;
      })}
    </div>
  );
}

type Comment = {
  _id: string;
  author: any;
  comment: string;
};
