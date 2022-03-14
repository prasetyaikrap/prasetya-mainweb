import React from "react";

//components
import Navbar from "./Navbar";
import ProfileSec from "./Profile";
import Skill from "./Skill";
import Project from "./Project";
import Footer from "./Footer";

function Home() {
  return (
    <div className="home-body">
      <Navbar />
      <Skill />
      <Project />
      <ProfileSec />
      <Footer />
    </div>
  );
}

export default Home;
