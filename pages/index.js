//components
import Navbar from "../components/Navbar";
import ProfileSec from "../components/ProfilePrev";
import Course from "../components/CoursePrev";
import Project from "../components/ProjectPrev";
import Footer from "../components/Footer";
import Blogpreview from "../components/BlogPrev";
import styles from "../styles/nav.module.css";

function Home() {
  return (
    <div className="home-body">
      <Navbar navBox={styles.navBox} />
      <Course />
      <Blogpreview />
      <Project />
      <ProfileSec />
      <Footer />
    </div>
  );
}

export default Home;
