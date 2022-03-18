import styles from "../styles/contentManagement.module.css";
import { useState } from "react";

//Components
import CMCard from "./CMCard";

function ContentManagement() {
  const [blogPageNum, setBlogPageNum] = useState(1);
  const [coursePageNum, setCoursePageNum] = useState(1);
  const [projectPageNum, setProjectPageNum] = useState(1);

  const pageButton = (e) => {
    const buttonID = e.target.id;
    switch (true) {
      case buttonID === "prevBlogBtn":
        blogPageNum <= 1 ? setBlogPageNum(1) : setBlogPageNum(blogPageNum - 1);
        break;
      case buttonID === "nextBlogBtn":
        blogPageNum >= 15
          ? setBlogPageNum(15)
          : setBlogPageNum(blogPageNum + 1);
        break;
      case buttonID === "prevCourseBtn":
        coursePageNum <= 1
          ? setCoursePageNum(1)
          : setCoursePageNum(coursePageNum - 1);
        break;
      case buttonID === "nextCourseBtn":
        coursePageNum >= 15
          ? setCoursePageNum(15)
          : setCoursePageNum(coursePageNum + 1);
        break;
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
    <div className={styles.contentContainer}>
      <h1 className={styles.contentTitle}>Content Management</h1>
      <CMCard
        CMTitle="Blog"
        routeLink="/dashboard/content/blog-compose"
        pageCount={blogPageNum}
        prevBtn="prevBlogBtn"
        nextBtn="nextBlogBtn"
        pageButton={pageButton}
        CSScontentBox={[styles.contentBox, styles.blog].join(" ")}
        CSScontentHeader={styles.contentHeader}
        CSScardContainer={styles.cardContainer}
        CSScontentCard={styles.contentCard}
        CSScontentPageNav={styles.contentPageNav}
        CSSpageNumber={styles.numberPage}
        CSSarrowPrev={styles.arrowPrev}
        CSSarrowNext={styles.arrowNext}
      />
      <CMCard
        CMTitle="Course"
        routeLink="/dashboard/content/course-compose"
        pageCount={coursePageNum}
        prevBtn="prevCourseBtn"
        nextBtn="nextCourseBtn"
        pageButton={pageButton}
        CSScontentBox={[styles.contentBox, styles.course].join(" ")}
        CSScontentHeader={styles.contentHeader}
        CSScontentCard={styles.contentCard}
        CSScontentPageNav={styles.contentPageNav}
        CSSpageNumber={styles.numberPage}
        CSSarrowPrev={styles.arrowPrev}
        CSSarrowNext={styles.arrowNext}
      />
      <CMCard
        CMTitle="Project"
        routeLink="/dashboard/content/project-compose"
        pageCount={projectPageNum}
        prevBtn="prevProjectBtn"
        nextBtn="nextProjectBtn"
        pageButton={pageButton}
        CSScontentBox={[styles.contentBox, styles.project].join(" ")}
        CSScontentHeader={styles.contentHeader}
        CSScontentCard={styles.contentCard}
        CSScontentPageNav={styles.contentPageNav}
        CSSpageNumber={styles.numberPage}
        CSSarrowPrev={styles.arrowPrev}
        CSSarrowNext={styles.arrowNext}
      />
    </div>
  );
}

export default ContentManagement;
