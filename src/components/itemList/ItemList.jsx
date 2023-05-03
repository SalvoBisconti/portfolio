import styles from "./index.module.scss";
import SkillsCard from "../skillsCard";
import ProjectCard from "../projectCard";
import { skills } from "@/mocks/skills";
import { projects } from "@/mocks/projects";

const ItemList = ({ type }) => {
  return (
    <div className={styles.ItemList}>
      {type === "skills"
        ? skills?.map((skill) => <SkillsCard data={skill} key={skill.id} />)
        : projects?.map((project) => (
            <ProjectCard data={project} key={project.id} />
          ))}
    </div>
  );
};

export default ItemList;
