import Link from "next/link";

//CSS
import styles from "../styles/nav.module.css";

function Navbar(props) {
  return (
    <div className={styles.navContainer}>
      <Link href="/">
        <h1>Prasetya Priyadi</h1>
      </Link>
      <div className={styles.navBox}>
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

function NavbarAdmin(props) {
  return (
    <div className={styles.navContainer}>
      <Link href="/">
        <h1>Prasetya Priyadi</h1>
      </Link>
      <div className={styles.adminNavBox}>
        <button className={styles.logoutBtn} onClick={props.logoutHandler}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;
export { NavbarAdmin };
