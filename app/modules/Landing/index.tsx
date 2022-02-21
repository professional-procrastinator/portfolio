import styles from './index.module.scss';
import Image from 'next/image';
import Primary from '../../components/Button/Primary';
import Secondary from '../../components/Button/Secondary';
import Features from './Features';
import { useState } from 'react';
import Popup from '../../components/Popup';
import FAB from '../../components/Button/Fab';
import Icon from '../../public/icons/blocks.svg';
export default function Landing() {
  return (
    <>
      <div className={styles.main}></div>
    </>
  );
}
