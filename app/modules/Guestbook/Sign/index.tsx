import Image from 'next/image';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import TextField from '../../../components/TextField';
import TypeWriter from '../../../components/TypeWriter';
import styles from '../../../styles/shared/popup.module.scss';
import Loader from '../../../components/Loader';

export default function Sign() {
  const { data, status } = useSession();

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

      <>{status === 'loading' ? <SignLoading /> : <SignForm />}</>
    </div>
  );
}

const SignForm = () => {
  const [message, setMessage] = useState('');
  return (
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
  );
};

const SignLoading = () => {
  return (
    <div className={styles.popup__loading}>
      <Loader
        containerStyles={{
          margin: 'auto',
        }}
        mainStyles={{
          borderColor: 'var(--primary-light)',
          borderRightColor: 'transparent',
        }}
      />
    </div>
  );
};
