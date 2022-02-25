import React from "react";

//components
import Navbar from "./Navbar";
import ProfileSec from "./Profile";
import Skill from "./Skill";
import Project from "./Project";

function Home() {
  return (
    <div className="home-body">
      <Navbar />
      <ProfileSec />
      <Skill />
      <Project />
    </div>
  );
}

export default Home;
