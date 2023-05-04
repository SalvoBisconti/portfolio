import styles from "./index.module.scss";
import Navbar from "@/components/navbar";

const MainLayout = ({ children }) => {
  return (
    <div className={styles.MainLayout}>
      <Navbar />
      <hr className={styles.hl} />
      <div className={styles.line}></div>
      <main className={styles.main}> {children} </main>
    </div>
  );
};
export default MainLayout;
