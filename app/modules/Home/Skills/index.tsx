import PageStyles from "../../../styles/shared/page.module.scss";
import styles from "./index.module.scss";

import Skill from "../../../utils/types/skill";
import Skills from "./helper";
import { Icon } from "@iconify/react";
import SkillCard from "./SkillCard";
const SkillsSection = () => {
  return (
    <div className={PageStyles.main__content__body}>
      <div className={PageStyles.main__content__body__header}>
        <div className={PageStyles.main__content__body__header__heading}>
          Skills
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.main__skills}>
          {Skills.map((skill: Skill) => (
            <SkillCard skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
