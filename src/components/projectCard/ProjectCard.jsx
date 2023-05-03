import styles from "./index.module.scss";
import Link from "next/link";

import { RiMacLine, RiGithubFill } from "react-icons/ri";

const ProjectCard = ({ data }) => {
  return (
    <div className={styles.ProjectCard}>
      <img className={styles.image} src={data.image} alt={data.name} />
      <div className={styles.onClick}>
        <div className={styles.overlay}></div>

        <div className={styles.content}>
          <ul className={styles.list}>
            <li>
              <Link href={data.links.repo}>
                <RiGithubFill />
                <span className={styles.textList}>Repository</span>
              </Link>
            </li>
            <li>
              <Link href={data.links.demo}>
                <RiMacLine />
                <span className={styles.textList}>Demo </span>
              </Link>
            </li>
          </ul>
          <h3 className={styles.name}> {data.name}</h3>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
