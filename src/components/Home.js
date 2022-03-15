import React from "react";

//components
import Navbar from "./Navbar";
import ProfileSec from "./Profile";
import Skill from "./Skill";
import Project from "./Project";
import Footer from "./Footer";
import Blogpreview from "./Blogpreview";

function Home() {
  return (
    <div className="home-body">
      <Navbar />
      <Skill />
      <Blogpreview />
      {/* <Project /> */}
      <ProfileSec />
      <Footer />
    </div>
  );
}

export default Home;
