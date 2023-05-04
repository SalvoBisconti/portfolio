import styles from "./index.module.scss";

const SkillsCard = ({ data }) => {
  return (
    <div className={styles.SkillsCard}>
      <img className={styles.image} src={data.image} alt={data.name} />
      <h4>{data.name}</h4>
      <hr size="10" className={styles.line} />
    </div>
  );
};

export default SkillsCard;
