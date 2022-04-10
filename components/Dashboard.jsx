import { useRouter } from "next/router";
import Link from "next/link";
import { useAuth } from "../middleware/AuthContext";

import styles from "../styles/adminDashboard.module.css";

function Dashboard(props) {
  const router = useRouter();
  const { logout } = useAuth();
  function logoutHandler(e) {
    e.preventDefault();
    logout();
    router.push("/login");
  }
  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.sidebarContainer}>
        <Link href="/dashboard/profile">
          <button className={styles.menuParent}>Profile</button>
        </Link>
        <Link href="/dashboard/article">
          <button className={styles.menuParent}>Article</button>
        </Link>
        <Link href="/dashboard/project">
          <button className={styles.menuParent}>Project</button>
        </Link>
        <hr />
        <Link href="/dashboard/settings">
          <button className={styles.menuParent}>Settings</button>
        </Link>
        <button className={styles.menuParent} onClick={logoutHandler}>
          Logout
        </button>
      </div>
      <div className={styles.contentContainer}>{props.body}</div>
    </div>
  );
}

export default Dashboard;
