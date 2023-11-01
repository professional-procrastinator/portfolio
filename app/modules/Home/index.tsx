import PageStyles from '../../styles/shared/page.module.scss';

import TypeWriter from '../../components/TypeWriter';

import { useEffect, useState } from 'react';
import Skill from '../../utils/types/skill';
import SkillsSection from './Skills';

export default function Home() {
  const words = ['a developer', 'a designer', 'a STEM enthusiast.'];

  return (
    <>
      <div>
        <h1>JOY BANGLA</h1>
        <h2>BANGLA X KENYA HACKERS REIGN</h2>
        <p>Say no to gay say yes to kids</p>
        <p>Please join my anti gay rallies with white kurtas</p>
      </div>
    </>
  );
}
