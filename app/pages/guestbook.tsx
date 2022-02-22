import { useState } from 'react';
import Primary from '../components/Button/Primary';
import Layout from '../components/Layout';
import Popup from '../components/Popup';
import pageStyles from '../styles/pages/index.module.scss';
import Sign from '../modules/Guestbook/Sign';
import { Icon } from '@iconify/react';
import { useMediaQuery } from 'react-responsive';
import FAB from '../components/Button/Fab';
import styles from '../styles/pages/guestbook.module.scss';

import Visitors from '../modules/Guestbook/Visitors';
const GuestBook = () => {
  const [isSignPopupOpen, setSignPopupOpen] = useState(false);
  const isSmallMobile = useMediaQuery({ maxWidth: '528px' });

  return (
    <Layout theme={'dark'} title="The Guestbook">
      <div className={pageStyles.main}>
        <div className={pageStyles.main__content}>
          <div className={pageStyles.main__content__heading}>The Guestbook</div>

          <div className={pageStyles.main__content__description}>
            Here’s the guestbook. Sign in with a provider and leave a comment.
            Only your name and comment will be shown.{' '}
          </div>

          <div className={pageStyles.main__content__body}>
            <div className={pageStyles.main__content__body__header}>
              <div className={pageStyles.main__content__body__header__heading}>
                Previous Visitors
              </div>

              <div className={pageStyles.main__content__body__header__action}>
                {!isSmallMobile ? (
                  <Primary
                    onClick={() => {
                      setSignPopupOpen(true);
                    }}
                  >
                    Sign the Guestbook
                  </Primary>
                ) : (
                  <FAB
                    onClick={() => {
                      setSignPopupOpen(true);
                    }}
                    className={styles['sign-fab']}
                  >
                    <Icon icon="mdi:pencil" width={28} color="#ffffff" />
                  </FAB>
                )}
              </div>
            </div>

            <Visitors />
          </div>
        </div>
      </div>

      <Popup
        close={() => {
          setSignPopupOpen(false);
        }}
        state={isSignPopupOpen}
      >
        <Sign />
      </Popup>
    </Layout>
  );
};

export default GuestBook;
