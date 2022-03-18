import React, { useState } from "react";
import Link from "next/link";

import styles from "../styles/adminDashboard.module.css";

function Dashboard(props) {
  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.sidebarContainer}>
        <Link href="/dashboard/profile">
          <button className={styles.menuParent}>Profile</button>
        </Link>
        <Link href="/dashboard/content">
          <button className={styles.menuParent}>Content Management</button>
        </Link>
        <Link href="/dashboard/settings">
          <button className={styles.menuParent}>Settings</button>
        </Link>
      </div>
      <div className={styles.contentContainer}>{props.body}</div>
    </div>
  );
}

export default Dashboard;
