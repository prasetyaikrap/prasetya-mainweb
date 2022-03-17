import React, { useState } from "react";
import Link from "next/link";

import styles from "../styles/adminDashboard.module.css";

function Dashboard(props) {
  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.sidebarContainer}>
        <Link href="/dashboard/profile">
          <button>Profile</button>
        </Link>
        <Link href="/dashboard/compose">
          <button>Compose</button>
        </Link>
        <Link href="/dashboard/settings">
          <button>Settings</button>
        </Link>
      </div>
      <div className={styles.contentContainer}>{props.body}</div>
    </div>
  );
}

export default Dashboard;
