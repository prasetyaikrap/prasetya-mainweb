//components
import Navbar from "../components/Navbar";
import ProfileSec from "../components/Profile";
import Skill from "../components/Skill";
import Project from "../components/Project";
import Footer from "../components/Footer";
import Blogpreview from "../components/Blogpreview";

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
