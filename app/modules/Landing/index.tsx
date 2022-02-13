import styles from "./index.module.scss";
import Image from "next/image";
import Primary from "../../components/Button/Primary";
import Secondary from "../../components/Button/Secondary";
import Features from "./Features";
import { useState } from "react";
import Popup from "../../components/Popup";
export default function Landing() {
  const [signUpOpen, setSignUpOpen] = useState(false);
  return (
    <>
      <div className={styles.main}>
        <div className={styles.main__top}>
          <div className={styles.main__top__container}>
            <div className={styles.main__top__container__left}>
              <div className={styles.main__top__container__left__title}>
                Fast. Light. Reliable.
              </div>

              <div className={styles.main__top__container__left__description}>
                Lungi Dance Lungi Dance Lungi Dance Lungi Dance Lungi Dance
                Lungi Dance Lungi Dance Lungi Dance Lungi Dance Lungi Dance
              </div>

              <div className={styles.main__top__container__left__actions}>
                <Primary
                  className={
                    styles.main__top__container__left__actions__primary
                  }
                  onClick={() => setSignUpOpen(true)}
                >
                  Get Started
                </Primary>

                <Secondary
                  className={
                    styles.main__top__container__left__actions__secondary
                  }
                >
                  Demo
                </Secondary>
              </div>
            </div>

            <div className={styles.main__top__container__right}>
              <img
                src={
                  "https://media.discordapp.net/attachments/890999346584231988/941981009434521610/354.png"
                }
                className={styles.main__top__container__right__image}
              />
            </div>
          </div>
        </div>

        <Features />
      </div>

      <Popup state={signUpOpen} setState={setSignUpOpen}>
        Hello
      </Popup>
    </>
  );
}
