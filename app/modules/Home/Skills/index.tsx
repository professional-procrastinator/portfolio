import PageStyles from '../../../styles/shared/page.module.scss';
import styles from './index.module.scss';

import Skill from '../../../utils/types/skill';
import Skills from './helper';
import { Icon } from '@iconify/react';
const SkillsSection = () => {
  return (
    <div className={PageStyles.main__content__body}>
      <div className={PageStyles.main__content__body__header}>
        <div className={PageStyles.main__content__body__header__heading}>
          My Skills
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.main__skills}>
          {Skills.map((skill: Skill) => (
            <div key={skill.name} className={styles.main__skills__skill}>
              <Icon icon={skill.icon.name} color={skill.icon.color} />
              <div className={styles.main__skills__skill__name}>
                {skill.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
