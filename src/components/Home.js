import React from "react";

//components
import Navbar from "./Navbar";
import ProfileSec from "./Profile";

function Home() {
  return (
    <div className="home-body">
      <Navbar />
      <ProfileSec />
    </div>
  );
}

export default Home;
