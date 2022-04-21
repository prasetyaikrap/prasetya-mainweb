//Utils
import React from "react";
import { AuthProvider } from "../utils/AuthContext";

//Global CSS
import "../styles/global.css";
//Admin Page
import "../components/adminpage/dashboard.css";
import "../components/adminpage/auth.css";
import "../components/01_navbar/_navbar.css";
import "../components/02_content/_content.css";
import "../components/03_project/_project.css";
// import "../components/adminpage/profile.css";
//Home Page
// import "../components/homepage/home.css";
// Misc
import "../components/misc/loading.css";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
