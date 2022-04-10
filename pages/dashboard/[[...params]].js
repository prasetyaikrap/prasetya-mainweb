import { useRouter } from "next/router";
import { useAuth } from "../../middleware/AuthContext";

//components
import Dashboard from "../../components/Dashboard";
import ProfileDashboard from "../../components/ProfileDashboard";
import Footer from "../../components/Footer";
import Course from "../../components/CoursePrev";
import BlogPost from "../../components/BlogPost";

function AdminDashboard() {
  const router = useRouter();
  const { user } = useAuth();
  //check user
  if (!user) {
    router.push("/login");
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
        body = <ProfileDashboard />;
        break;
      case params[0] === "article":
        body = <BlogPost />;
        break;
      case params[0] === "project":
        break;
      case params[0] === "settings":
        body = <Course />;
        break;
      default:
        body = <h1>Error Site. page does not exist</h1>;
    }
    return body;
  };

  return (
    <>
      <Dashboard body={bodyDashboard()} />
      <Footer />
    </>
  );
}

export default AdminDashboard;
