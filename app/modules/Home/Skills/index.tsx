import PageStyles from '../../../styles/shared/page.module.scss';
import styles from './index.module.scss';

import Skill from '../../../utils/types/skill';
const Skills = ({ skills }) => {
  console.log(skills);
  return (
    <div className={PageStyles.main__content__body}>
      <div className={PageStyles.main__content__body__header}>
        <div className={PageStyles.main__content__body__header__heading}>
          My Skills
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.main__content}>
          {skills.map((skill: Skill) => (
            <div key={skill.name}>{skill.name}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
