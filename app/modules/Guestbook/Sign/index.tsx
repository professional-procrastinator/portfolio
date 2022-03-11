import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { signIn, useSession } from 'next-auth/react';
import TextField from '../../../components/TextField';
import TypeWriter from '../../../components/TypeWriter';
import styles from '../../../styles/shared/popup.module.scss';
import SignStyles from './index.module.scss';
import Loader from '../../../components/Loader';
import Primary from '../../../components/Button/Primary';
import Checkbox from '../../../components/Checkbox';
import axios from 'axios';
export default function Sign({
  close,
  setGbReload,
}: {
  close: () => void;
  setGbReload: (value: boolean) => void;
}) {
  const { data, status } = useSession();

  return (
    <div className={styles.popup}>
      <div className={styles.popup__banner}>
        <img
          className={styles.popup__banner__image}
          src={'https://picsum.photos/160/550?random=1'}
        />
      </div>

      <>
        {status === 'loading' ? (
          <SignLoading />
        ) : (
          <>
            {data?.user ? (
              <SignForm setGbReload={setGbReload} close={close} />
            ) : (
              <SignLogin />
            )}
          </>
        )}
      </>
    </div>
  );
}

const SignForm = ({
  close,
  setGbReload,
}: {
  close: () => void;
  setGbReload: (value: boolean) => void;
}) => {
  const [message, setMessage] = useState('');
  const [signing, setSigning] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setSigning(false);
    setError('');
  }, [close]);

  const sign = async (event?: React.FormEvent<HTMLFormElement>) => {
    if (event) {
      event.preventDefault();
    }

    setSigning(true);
    const { data } = await axios.post('/api/guestbook/', {
      content: message,
    });

    if (!data.success) {
      setError(data.message);
      return setSigning(false);
    }

    setGbReload(true);
    setSigning(false);
    setMessage('');
    close();
  };

  return (
    <div className={styles.popup__content}>
      <SignHeader />

      <form
        className={styles.popup__content__form}
        onSubmit={(e) => {
          sign(e);
        }}
      >
        <TextField
          textarea
          label={'Your Message'}
          value={message}
          setValue={setMessage}
          limit={150}
          className={styles.popup__content__form__textarea}
          disabled={signing}
          onChange={(e) => {
            setError('');
          }}
        />
        <Primary
          className={styles.popup__content__form__primary}
          loading={signing}
        >
          Sign the guestbook
        </Primary>

        <div className={styles.popup__content__form__error}>{error}</div>
      </form>
    </div>
  );
};

const SignLogin = () => {
  return (
    <div className={styles.popup__content}>
      <SignHeader />

      <div className={styles.popup__content__form}>
        <div className={SignStyles.login}>
          <div className={SignStyles.login__header}>
            <div />
            <div className={SignStyles.login__header__text}>Sign in</div>
            <div />
          </div>

          <div className={SignStyles.login__form}>
            <Primary onClick={() => signIn('github')}>
              Sign in with GitHub
            </Primary>
          </div>
        </div>
      </div>
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

const SignHeader = () => {
  return (
    <div className={styles.popup__content__header}>
      <div className={styles.popup__content__header__heading}>
        <TypeWriter words={['Some words for the chef?']} />
      </div>
      <div className={styles.popup__content__header__description}>
        Leave a comment about anything - be it programming, or a funny joke you
        found on the internet.
      </div>
    </div>
  );
};
