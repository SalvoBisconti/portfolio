import styles from "./index.module.scss";
import Sidebar from "@/components/sidebar";

const MainLayout = ({ children }) => {
  return (
    <div className={styles.MainLayout}>
      <Sidebar />
      <hr className={styles.hl} />
      <div className={styles.line}></div>
      <main className={styles.main}> {children} </main>
    </div>
  );
};
export default MainLayout;
