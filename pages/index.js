//components
import Navbar from "../components/Navbar";
import ProfileSec from "../components/ProfilePrev";
import Course from "../components/CoursePrev";
import Project from "../components/ProjectPrev";
import Footer from "../components/Footer";
import Blogpreview from "../components/BlogPrev";

function Home() {
  return (
    <div className="home-body">
      <Navbar />
      <Blogpreview />
      <Project />
      <ProfileSec />
      <Footer />
    </div>
  );
}

export default Home;
