import styles from "./index.module.scss";
import Link from "next/link";

import { HiOutlineHome } from "react-icons/hi";
import { AiOutlineProject } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { RiFileListLine } from "react-icons/ri";

import { useSelector } from "react-redux";

const Sidebar = () => {
  const state = useSelector((state) => state.iconSelected);

  return (
    <div className={styles.Sidebar}>
      <h1 className={styles.logo}>SB</h1>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href="../">
            <HiOutlineHome
              className={`${state === "home" && styles.iconSelected}`}
            />
            <span className={styles.textList}>Home</span>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="../about">
            <BsPerson
              className={`${state === "about" && styles.iconSelected}`}
            />
            <span className={styles.textList}>About me</span>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="../curriculum">
            <RiFileListLine
              className={`${state === "curriculum" && styles.iconSelected}`}
            />
            <span className={styles.textList}>Curriculum</span>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="../projects">
            <AiOutlineProject
              className={`${state === "projects" && styles.iconSelected}`}
            />
            <span className={styles.textList}>Projects</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
