import React, { useState } from "react";

import styles from "../styles/adminDashboard.module.css";
import Compose from "./Compose";
import Skill from "./Skill";
import ProfileSec from "./Profile";

function Dashboard() {
  const [content, setContent] = useState(<ProfileSec />);

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.sidebarContainer}>
        <button onClick={() => setContent(<ProfileSec />)}>Profile</button>
        <button onClick={() => setContent(<Compose />)}>Compose</button>
        <button onClick={() => setContent(<Skill />)}>Settings</button>
      </div>
      <div className={styles.contentContainer}>{content}</div>
    </div>
  );
}

export default Dashboard;
