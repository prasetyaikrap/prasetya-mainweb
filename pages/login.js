import Link from "next/link";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import styles from "../styles/authPage.module.css";
import { useAuth } from "../middleware/AuthContext";

function LoginForm() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [signInMsg, setSignInMsg] = useState();
  const { login } = useAuth();
  const router = useRouter();
  async function handleLogin(e) {
    e.preventDefault();
    try {
      await login(emailRef.current.value, passwordRef.current.value);
      router.push("/dashboard");
    } catch (err) {
      console.error(err);
      setSignInMsg(
        <div className={`${styles.errorSignIn}`}>
          Email/Password is wrong or does not exist. Please try again.
        </div>
      );
    }
  }
  return (
    <div className={`${styles.authContainer}`}>
      <div className={`${styles.loginContainer}`}>
        <h1>Welcome</h1>
        {signInMsg}
        <form
          onSubmit={handleLogin}
          action="/"
          className={`${styles.formContainer}`}
        >
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" ref={emailRef} required />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            ref={passwordRef}
            required
          />
          <button className={`${styles.formBtn}`} type="submit">
            Login
          </button>
        </form>
        <hr />
        <Link href="/pwreset">
          <a>Reset Password</a>
        </Link>
      </div>
    </div>
  );
}

export default LoginForm;
