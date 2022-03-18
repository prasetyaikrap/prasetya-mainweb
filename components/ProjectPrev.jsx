import React from "react";
import styles from "../styles/project.module.css";

function Project() {
  return (
    <section className={styles.project}>
      <h2 className={styles.sectTitle}>PROJECT SHOWCASE</h2>
      <div className={styles.projectContainer}>
        <div className={styles.projectCard}>
          <h2>Hello World</h2>
        </div>
        <div className={styles.projectCard}>
          <h2>Hello World</h2>
        </div>
        <div className={styles.projectCard}>
          <h2>Hello World</h2>
        </div>
      </div>
    </section>
  );
}

export default Project;
