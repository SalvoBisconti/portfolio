import styles from "./index.module.scss";
import Sidebar from "@/components/sidebar";

const MainLayout = () => {
  return (
    <div className={styles.MainLayout}>
      <Sidebar />
    </div>
  );
};
export default MainLayout;
