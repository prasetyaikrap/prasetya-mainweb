import { useRouter } from "next/router";

//components
import Navbar from "../../components/Navbar";
import Dashboard from "../../components/Dashboard";
import Footer from "../../components/Footer";
import Compose from "../../components/Compose";
import Skill from "../../components/Skill";
import ProfileSec from "../../components/Profile";
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
    case params[0] === "compose":
      body = <Compose />;
      break;
    case params[0] === "settings":
      body = <Skill />;
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
