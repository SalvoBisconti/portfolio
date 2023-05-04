import styles from "./index.module.scss";
import Link from "next/link";

import { BiHomeCircle } from "react-icons/bi";
import { AiOutlineProject } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { RiFileListLine } from "react-icons/ri";

const Sidebar = () => {
  return (
    <div className={styles.Sidebar}>
      <h1 className={styles.logo}>SB</h1>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href="../">
            <BiHomeCircle />
            <span className={styles.textList}>Home</span>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="../curriculum">
            <RiFileListLine />
            <span className={styles.textList}>Curriculum</span>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="../projects">
            <AiOutlineProject />
            <span className={styles.textList}>My projects</span>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="../about">
            <BsPerson />
            <span className={styles.textList}>About me</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
