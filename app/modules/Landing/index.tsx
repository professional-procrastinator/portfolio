import styles from './index.module.scss';
import Image from 'next/image';
import Primary from '../../components/Button/Primary';
import Secondary from '../../components/Button/Secondary';
import Features from './Features';
import { useState } from 'react';
import Popup from '../../components/Popup';

export default function Landing() {
  return (
    <>
      <div className={styles.main}></div>
    </>
  );
}
