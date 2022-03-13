import PageStyles from '../../styles/shared/page.module.scss';

import TypeWriter from '../../components/TypeWriter';
import Skills from './Skills';
import { MainSkills } from './helper';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Skill from '../../utils/types/skill';

export default function Home() {
  const words = ['a developer', 'a designer', 'a math enthusiast.'];
  const [skills, setSkills] = useState<[Skill]>(MainSkills as any);

  useEffect(() => {
    const fetchSkills = async () => {
      const { data } = await axios.get('/api/skills');
      setSkills(data.response.data);
    };

    fetchSkills();
  }, []);

  return (
    <>
      <div className={PageStyles.main}>
        <div className={PageStyles.main__content}>
          <div className={PageStyles.main__content__heading}>
            <TypeWriter prefix="I am" words={words} />
          </div>

          <div className={PageStyles.main__content__description}>
            Hey there! I'm Nishit Jha, a 13 year old developer and designer. I
            love to build web apps, and work with the MERN stack.{' '}
          </div>

          <Skills skills={skills} />
        </div>
      </div>
    </>
  );
}
