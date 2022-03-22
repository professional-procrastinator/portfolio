import styles from "./index.module.scss";
import { Icon } from "@iconify/react";
import Skill from "../../../../utils/types/skill";

export default function SkillCard({ skill }: { skill: Skill }) {
  return (
    <div key={skill.name} className={styles.skill}>
      <div className={styles.skill__header}>{skill.name}</div>
      <div className={styles.skill__footer}>
        <Icon
          width={24}
          icon={skill.icon.name}
          color={skill.icon.color}
          className={styles.skill__footer__icon}
        />
      </div>
    </div>
  );
}
