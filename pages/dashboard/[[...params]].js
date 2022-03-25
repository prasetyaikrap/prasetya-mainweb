import { useRouter } from "next/router";
import { useAuth } from "../../middleware/AuthContext";

//components
import { NavbarAdmin } from "../../components/Navbar";
import Dashboard from "../../components/Dashboard";
import Footer from "../../components/Footer";
import ContentManagement from "../../components/ContentManagement";
import Course from "../../components/CoursePrev";
import ProfileSec from "../../components/ProfilePrev";
import BlogCompose from "../../components/BlogCompose";
import ProjectCompose from "../../components/ProjectCompose";
import CourseCompose from "../../components/CourseCompose";
import BlogPost from "../../components/BlogPost";
import { useState } from "react";

function AdminDashboard() {
  const router = useRouter();
  const { user, logout } = useAuth();
  //check user
  if (!user) {
    router.push("/admin/login");
  }
  const bodyDashboard = () => {
    //Re-Render Body
    let body = "";
    const { params = [] } = router.query;
    switch (true) {
      case params.length === 0:
        body = <Footer />;
        break;
      case params[0] === "profile":
        body = <ProfileSec />;
        break;
      case params[0] === "post":
        body = <BlogPost />;
        break;
      case params[0] === "content":
        switch (true) {
          case params[1] === undefined:
            router.push("/dashboard/content/blog-compose");
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
    return body;
  };

  function logoutHandler(e) {
    e.preventDefault();
    logout();
    router.push("/admin/login");
  }
  return (
    <>
      <NavbarAdmin logoutHandler={logoutHandler} />
      <Dashboard body={bodyDashboard()} />
      <Footer />
    </>
  );
}

export default AdminDashboard;
