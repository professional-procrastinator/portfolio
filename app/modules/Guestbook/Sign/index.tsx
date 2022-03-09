import Image from 'next/image';
import { useState } from 'react';
import { signIn, useSession } from 'next-auth/react';
import TextField from '../../../components/TextField';
import TypeWriter from '../../../components/TypeWriter';
import styles from '../../../styles/shared/popup.module.scss';
import SignStyles from './index.module.scss';
import Loader from '../../../components/Loader';
import Primary from '../../../components/Button/Primary';

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

      <>
        {status === 'loading' ? (
          <SignLoading />
        ) : (
          <>{data?.user ? <SignForm /> : <SignLogin />}</>
        )}
      </>
    </div>
  );
}

const SignForm = () => {
  const [message, setMessage] = useState('');

  return (
    <div className={styles.popup__content}>
      <SignHeader />

      <div className={styles.popup__content__form}>
        <TextField
          textarea
          label={'Your Message'}
          value={message}
          setValue={setMessage}
          limit={250}
          className={styles.popup__content__form__textarea}
        />
      </div>
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
