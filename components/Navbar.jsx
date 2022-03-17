import styles from "../styles/nav.module.css";

function Navbar() {
  return (
    <div className={styles.navContainer}>
      <a href="/">
        <h1>Prasetya Priyadi</h1>
      </a>
      <ul>
        <li>
          <a href="/">Projects</a>
        </li>
        <li>
          <a href="/">Blog</a>
        </li>
        <li>
          <a href="#profile">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
