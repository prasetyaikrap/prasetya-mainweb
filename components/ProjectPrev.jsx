import React from "react";
import styles from "../styles/project.module.css";
import ProjectCard from "./ProjectCard";
const dataProject = [
  {
    id: 1,
    title: "Personal Blog with NextJS and Firebase",
    hashtag: ["ReactJS", "NextJS", "Firebase", "NodeJS"],
    desc: "Membangun personal website dengan fungsionalitas sebagai blog pribadi. Menggunaakan ReactJS sebagai Frontend dengan React Framework NextJS. Berjalan serverless menggunakan Firebase, Database Firestore, dan Firebase Cloud Storage",
    image: {
      imageUrl: "https://www.nec.com/en/global/solutions/img/network_h1_sp.jpg",
      imageAlt: "ini gambar jpg",
    },
    projectBtn: "Explore",
  },
  {
    id: 2,
    title: "Personal Blog with NextJS and Firebase",
    hashtag: ["ReactJS", "NextJS", "Firebase", "NodeJS"],
    desc: "Membangun personal website dengan fungsionalitas sebagai blog pribadi. Menggunaakan ReactJS sebagai Frontend dengan React Framework NextJS. Berjalan serverless menggunakan Firebase, Database Firestore, dan Firebase Cloud Storage",
    image: {
      imageUrl: "https://www.nec.com/en/global/solutions/img/network_h1_sp.jpg",
      imageAlt: "ini gambar jpg",
    },
    projectBtn: "Explore",
  },
  {
    id: 3,
    title: "Personal Blog with NextJS and Firebase",
    hashtag: ["ReactJS", "NextJS", "Firebase", "NodeJS"],
    desc: "Membangun personal website dengan fungsionalitas sebagai blog pribadi. Menggunaakan ReactJS sebagai Frontend dengan React Framework NextJS. Berjalan serverless menggunakan Firebase, Database Firestore, dan Firebase Cloud Storage",
    image: {
      imageUrl: "https://www.nec.com/en/global/solutions/img/network_h1_sp.jpg",
      imageAlt: "ini gambar jpg",
    },
    projectBtn: "Explore",
  },
];

function Project() {
  return (
    <section className={styles.project}>
      <h2 className={styles.sectTitle}>PROJECT SHOWCASE</h2>
      <div className={styles.projectContainer}>
        {dataProject.map((project) => {
          return (
            <ProjectCard
              key={project.pid}
              projectTitle={project.title}
              projectHashtag={project.hashtag}
              projectImageUrl={project.image.imageUrl}
              projectImageAlt={project.image.imageAlt}
              projectDesc={project.desc}
              projectBtn={project.projectBtn}
              CSSprojectCard={styles.projectCard}
              CSSprojectTitle={styles.projectTitle}
              CSSprojectHashtag={styles.projectHashtag}
              CSSprojectBody={styles.projectBody}
              CSSprojectBtn={styles.projectBtn}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Project;
