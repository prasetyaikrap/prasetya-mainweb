import styles from "../styles/project.module.css";
import { useRef, useState } from "react";
import CMCard from "./CMCard";

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
    actionBtn: {
      btnName: "explore",
      btnUrl: "/",
    },
  },
];

async function uploadData() {}

function ProjectCompose() {
  const {
    titleRef,
    hashtagRef,
    descRef,
    uploadImageRef,
    projectBtnRef,
    btnUrlRef,
  } = useRef();
  const [projectPageNum, setProjectPageNum] = useState(1);
  const pageButton = (e) => {
    const buttonID = e.target.id;
    switch (true) {
      case buttonID === "prevProjectBtn":
        projectPageNum <= 1
          ? setProjectPageNum(1)
          : setProjectPageNum(projectPageNum - 1);
        break;
      case buttonID === "nextProjectBtn":
        projectPageNum >= 15
          ? setProjectPageNum(15)
          : setProjectPageNum(projectPageNum + 1);
        break;
    }
  };
  return (
    <div className={styles.composeContainer}>
      <div className={styles.composeBox}>
        <h2 className={styles.headerCompose}>Add Portfolio</h2>
        <form className={styles.formCompose} action="/">
          <div className={styles.inputBox1}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              ref={titleRef}
              spellCheck="false"
              required
            />
          </div>
          <div className={styles.inputBox2}>
            <label htmlFor="hashtag">Hashtag</label>
            <input
              type="text"
              id="hashtag"
              name="hashtag"
              ref={hashtagRef}
              spellCheck="false"
              required
            />
          </div>
          <div className={styles.inputBox2}>
            <label htmlFor="imageUpload">Upload Image</label>
            <input
              className={styles.uploadBtn}
              type="file"
              accept="image/*"
              id="uploadImage"
              name="uploadImage"
              ref={uploadImageRef}
              required
            />
          </div>
          <div className={styles.inputBox1}>
            <label htmlFor="desc">Project Description</label>
            <textarea
              id="desc"
              rows="4"
              ref={descRef}
              placeholder="Add some descriptions about your project"
              required
            />
          </div>
        </form>
      </div>
      <div className={styles.settingsBox}></div>
      <hr className={styles.hr} />
      <CMCard
        CMTitle="Project"
        routeLink="/"
        pageCount={projectPageNum}
        prevBtn="prevProjectBtn"
        nextBtn="nextProjectBtn"
        pageBtn={pageButton}
        actionBtn={["Add Project", "Edit Project"]}
        CSScardContainer={styles.cardContainer}
        CSScontentBox={styles.contentBox}
        CSScontentHeader={styles.contentHeader}
        CSScontentCard={styles.contentCard}
        CSScontentPageNav={styles.contentPageNav}
        CSSpageNumber={styles.numberPage}
        CSSarrowPrev={styles.arrowPrev}
        CSSarrowNext={styles.arrowNext}
        CSScontentItem={styles.contentItem}
        CSSitemAction={styles.itemAction}
      />
    </div>
  );
}

export default ProjectCompose;
