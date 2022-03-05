import Image from 'next/image';
import { useState } from 'react';
import TextField from '../../../components/TextField';
import TypeWriter from '../../../components/TypeWriter';
import styles from '../../../styles/shared/popup.module.scss';

export default function Sign() {
  const [message, setMessage] = useState('');
  return (
    <div className={styles.popup}>
      <div className={styles.popup__banner}>
        <Image
          className={styles.popup__banner__image}
          src={'https://picsum.photos/160/550?random=1'}
          quality={100}
          layout={'fill'}
        />
      </div>

      <div className={styles.popup__content}>
        <div className={styles.popup__content__heading}>
          <TypeWriter words={['Some words for the chef?']} />
        </div>

        <TextField
          textarea
          label={'Your Message'}
          value={message}
          setValue={setMessage}
          limit={200}
          className={styles.popup__content__textarea}
        />
      </div>
    </div>
  );
}
