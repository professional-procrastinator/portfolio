import styles from './index.module.scss';
import Image from 'next/image';
import Primary from '../../components/Button/Primary';
import Secondary from '../../components/Button/Secondary';
import Features from './Features';
import { useState } from 'react';
import Popup from '../../components/Popup';
import FAB from '../../components/Button/Fab';
import Icon from '../../public/icons/blocks.svg';
import TypeWriter from '../../components/TypeWriter';
import pageStyles from '../../styles/pages/index.module.scss';

export default function Landing() {
  const words = ['a developer', 'a designer', 'a math enthusiast.'];

  return (
    <>
      <div className={pageStyles.main}>
        <div className={pageStyles.main__content}>
          <div className={pageStyles.main__content__heading}>
            <TypeWriter prefix="I am" words={words} />
          </div>
        </div>
      </div>
    </>
  );
}
