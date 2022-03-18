import { useRouter } from "next/router";

//components
import Navbar from "../../components/Navbar";
import Dashboard from "../../components/Dashboard";
import Footer from "../../components/Footer";
import ContentManagement from "../../components/ContentManagement";
import Course from "../../components/CoursePrev";
import ProfileSec from "../../components/ProfilePrev";
import BlogCompose from "../../components/BlogCompose";
import ProjectCompose from "../../components/ProjectCompose";
import CourseCompose from "../../components/CourseCompose";
import styles from "../../styles/nav.module.css";

function AdminDashboard() {
  let body = "";
  const router = useRouter();
  const { params = [] } = router.query;
  switch (true) {
    case params.length === 0:
      body = <Footer />;
      break;
    case params[0] === "profile":
      body = <ProfileSec />;
      break;
    case params[0] === "content":
      switch (true) {
        case params[1] === undefined:
          body = <ContentManagement />;
          break;
        case params[1] === "blog-compose":
          body = <BlogCompose />;
          break;
        case params[1] === "course-compose":
          body = <CourseCompose />;
          break;
        case params[1] === "project-compose":
          body = <ProjectCompose />;
          break;
        default:
          body = <h1>Error Site. page does not exist</h1>;
      }
      break;
    case params[0] === "settings":
      body = <Course />;
      break;
    default:
      body = <h1>Error Site. page does not exist</h1>;
  }

  return (
    <>
      <Navbar navBox={[styles.adminNav].join(" ")} />
      <Dashboard body={body} />
      <Footer />
    </>
  );
}

export default AdminDashboard;
