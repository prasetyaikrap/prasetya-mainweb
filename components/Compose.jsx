import styles from "../styles/compose.module.css";

function Compose() {
  return (
    <div className={styles.composeContainer}>
      <div className={styles.composeBox}>
        <h2 className={styles.headerCompose}>Create New Article</h2>
        <form action="/">
          <div className={styles.inputBox1}>
            <label for="titlePost">Title</label>
            <input type="text" id="titlePost" spellCheck="false" />
          </div>
          <div className={styles.inputBox1}>
            <label for="subtitlePost">Subtitle</label>
            <input type="text" id="subtitlePost" spellCheck="false" />
          </div>
          <div className={styles.textEditor}></div>
        </form>
      </div>
      <div className={styles.settingsBox}></div>
    </div>
  );
}

export default Compose;
