import PageStyles from '../../styles/shared/page.module.scss';

import TypeWriter from '../../components/TypeWriter';

import { useEffect, useState } from 'react';
import Skill from '../../utils/types/skill';
import SkillsSection from './Skills';

export default function Home() {
  const words = ['a developer', 'a designer', 'a math enthusiast.'];

  return (
    <>
      <div className={PageStyles.main}>
        <div className={PageStyles.main__content}>
          <div className={PageStyles.main__content__heading}>
            <TypeWriter prefix="I am" words={words} />
          </div>

          <div className={PageStyles.main__content__description}>
            Hey there! I'm Nishit Jha, a 14 year old designer and full stack
            developer. I love to build web apps, and work with the MERN stack. I
            try to build new software that solves real-world problems, and
            regularly participate in national and international hackathons.{' '}
          </div>

          <SkillsSection />
        </div>
      </div>
    </>
  );
}
