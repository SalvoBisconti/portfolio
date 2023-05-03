import styles from "./index.module.scss";
import SkillsCard from "../skillsCard";
import { skills } from "@/mocks/skills";

const ItemList = () => {
  return (
    <div className={styles.ItemList}>
      {skills?.map((item) => (
        <SkillsCard data={item} key={item.id} />
      ))}
    </div>
  );
};

export default ItemList;
