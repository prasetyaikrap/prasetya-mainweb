import Link from "next/link";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { useAuth } from "../../pages/utils/AuthContext";

export default function LoginPage(props) {
  const pathQuery = props.query;
  //Render Page
  if (pathQuery === "login") {
    return (
      <div className="authContainer">
        <AuthLogin />
      </div>
    );
  }
  if (pathQuery === "reset") {
    return (
      <div className="authContainer">
        <AuthReset />
      </div>
    );
  }
}

export function AuthLogin() {
  const { user, login } = useAuth();
  const router = useRouter();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [errorMsg, setErrorMsg] = useState();

  //Check if user already login
  if (user) {
    router.push("/dashboard");
  }
  if (!user) {
    //Handle Login
    async function handleLogin(e) {
      e.preventDefault();
      try {
        await login(emailRef.current.value, passwordRef.current.value);
        router.push("/dashboard");
      } catch (err) {
        console.error(err);
        setErrorMsg(
          <div className="errorMsg">
            Email/Password is wrong or does not exist. Please try again.
          </div>
        );
      }
    }
    return (
      <div className="loginContainer">
        <h1>Welcome</h1>
        {errorMsg}
        <form onSubmit={handleLogin} className="formContainer">
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
          <button className="formBtn" type="submit">
            Login
          </button>
        </form>
        <hr />
        <Link href="/auth/reset">
          <a>Reset Password</a>
        </Link>
      </div>
    );
  }
}

export function AuthReset() {
  const { user } = useAuth();
  const router = useRouter();
  if (user) {
    router.push("/dashboard");
  }
  if (!user) {
    return (
      <div className="resetContainer">
        <h1>Confirm Your Email</h1>
        <form className="formContainer">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
          <button className="formBtn">Reset</button>
        </form>
        <hr />
        <Link href="/auth/login">
          <a>Back to login</a>
        </Link>
      </div>
    );
  }
}
