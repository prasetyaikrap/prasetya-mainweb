import styles from "../styles/nav.module.css";
import Link from "next/link";

function Navbar(props) {
  return (
    <div className={styles.navContainer}>
      <a href="/">
        <h1>Prasetya Priyadi</h1>
      </a>
      <div className={props.navBox}>
        <Link href="/" className={styles.navMenu}>
          <a>Projects</a>
        </Link>
        <Link href="/" className={styles.navMenu}>
          <a>Blog</a>
        </Link>
        <Link href="/" className={styles.navMenu}>
          <a>Contact</a>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
