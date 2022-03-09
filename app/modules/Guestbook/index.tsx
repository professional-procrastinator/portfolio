import { signOut, useSession } from 'next-auth/react';
import { useMediaQuery } from 'react-responsive';
import { Icon } from '@iconify/react';

import PageStyles from '../../styles/shared/page.module.scss';

import Loader from '../../components/Loader';
import Primary from '../../components/Button/Primary';
import { useState } from 'react';
import Popup from '../../components/Popup';
import Sign from './Sign';
import TextButton from '../../components/Button/Text';

export default function Guestbook() {
  const { data, status } = useSession();
  const isSmallMobile = useMediaQuery({ maxWidth: '528px' });

  const [isSignPopupOpen, setSignPopupOpen] = useState(false);
  return (
    <>
      {status === 'loading' ? null : (
        <>
          <div className={PageStyles.main}>
            <div className={PageStyles.main__content}>
              <div className={PageStyles.main__content__heading}>
                The Guestbook
              </div>

              <div className={PageStyles.main__content__description}>
                Here’s the guestbook. Sign in with a provider and leave a
                comment. Only your name and comment will be shown.{' '}
              </div>

              <div className={PageStyles.main__content__body}>
                <div className={PageStyles.main__content__body__header}>
                  <div
                    className={PageStyles.main__content__body__header__heading}
                  >
                    Previous Visitors
                  </div>

                  <div
                    className={PageStyles.main__content__body__header__action}
                  >
                    {!isSmallMobile ? (
                      <>
                        <Primary
                          onClick={() => {
                            setSignPopupOpen(true);
                          }}
                        >
                          Sign the Guestbook
                        </Primary>
                      </>
                    ) : (
                      <Icon
                        onClick={() => {
                          setSignPopupOpen(true);
                        }}
                        icon="mdi:pencil"
                        width={28}
                        color="#ffffff"
                      />
                    )}
                  </div>
                </div>
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
        </>
      )}
    </>
  );
}
