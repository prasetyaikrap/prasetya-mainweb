import styles from "../styles/blogprev.module.css";

const dataDummy = [
  {
    id: 1,
    title: "Title 1",
    subtitle: "Premis or Preview Text",
  },
  {
    id: 2,
    title: "Title 2",
    subtitle: "Premis or Preview Text",
  },
  {
    id: 3,
    title: "Title 3",
    subtitle: "Premis or Preview Text",
  },
  {
    id: 4,
    title: "Title 4",
    subtitle: "Premis or Preview Text",
  },
  {
    id: 5,
    title: "Title 5",
    subtitle: "Premis or Preview Text",
  },
];

function Blogpreview() {
  return (
    <section className={styles.blogPrev}>
      <h2 className={styles.blogPrevTitle}>LATEST CONTENT</h2>
      <div className={styles.prevContainer}>
        <div className={styles.postContainer}>
          {dataDummy.map((content) => (
            <div key={content.id} className={styles.postCard}>
              <div className={styles.imgPrev}>Preview Image</div>
              <div className={styles.postPrev}>
                <h3>{content.title}</h3>
                <p>{content.subtitle}</p>
              </div>
            </div>
          ))}
          <div className={styles.findMore}>
            <h3>Find More</h3>
          </div>
        </div>
        <div className={styles.socmedContainer}>
          <div className={styles.socmedPrev}></div>
          <div className={styles.videoPrev}></div>
        </div>
      </div>
    </section>
  );
}

export default Blogpreview;
