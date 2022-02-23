import React from "react";

//components
import Navbar from "./Navbar";
import ProfileSec from "./Profile";
import Skill from "./Skill";

function Home() {
  return (
    <div className="home-body">
      <Navbar />
      <ProfileSec />
      <Skill />
    </div>
  );
}

export default Home;
