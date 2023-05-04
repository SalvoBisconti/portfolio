import styles from "./index.module.scss";
import Link from "next/link";

import { HiOutlineHome } from "react-icons/hi";
import { AiOutlineProject } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { RiFileListLine } from "react-icons/ri";

import { useSelector } from "react-redux";

const Navbar = () => {
  const state = useSelector((state) => state.iconSelected);

  return (
    <div className={styles.Navbar}>
      <h1 className={styles.logo}>SB</h1>
      <ul className={styles.list}>
        <li
          className={` ${styles.listItem} ${
            state === "home" && styles.iconSelected
          }`}
        >
          <Link
            href="../"
            className={`${state === "home" && styles.iconSelected}`}
          >
            <HiOutlineHome />
            <span className={styles.textList}>Home</span>
          </Link>
        </li>
        <li
          className={` ${styles.listItem} ${
            state === "about" && styles.iconSelected
          }`}
        >
          <Link
            href="../about"
            className={` ${state === "about" && styles.iconSelected}`}
          >
            <BsPerson />
            <span className={styles.textList}>About me</span>
          </Link>
        </li>
        <li
          className={` ${styles.listItem} ${
            state === "curriculum" && styles.iconSelected
          }`}
        >
          <Link
            href="../curriculum"
            className={`${state === "curriculum" && styles.iconSelected}`}
          >
            <RiFileListLine />
            <span className={styles.textList}>Curriculum</span>
          </Link>
        </li>
        <li
          className={` ${styles.listItem} ${
            state === "projects" && styles.iconSelected
          }`}
        >
          <Link
            href="../projects"
            className={`${state === "projects" && styles.iconSelected}`}
          >
            <AiOutlineProject />
            <span className={styles.textList}>Projects</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
