import Link from "next/link";
import styles from "../styles/authPage.module.css";

function PWReset() {
  return (
    <div className={`${styles.authContainer}`}>
      <div className={`${styles.resetContainer}`}>
        <h1>Confirm Your Email</h1>
        <form className={`${styles.formContainer}`} action="/">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
          <button className={`${styles.formBtn}`}>Reset</button>
        </form>
        <hr />
        <Link href="/login">
          <a>Back to login</a>
        </Link>
      </div>
    </div>
  );
}

export default PWReset;
