import Image from 'next/image';
import TextField from '../../../components/TextField';
import styles from '../../../styles/shared/popup.module.scss';

export default function Sign() {
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
        <div className={styles.popup__content__heading}>Sign the Guestbook</div>

        <TextField textarea label={'Your Message'} />
      </div>
    </div>
  );
}
