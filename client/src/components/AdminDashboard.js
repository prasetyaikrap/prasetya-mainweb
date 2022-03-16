//components
import Navbar from "./Navbar";
import SidebarDahsboard from "./SidebarDashboard";
import Footer from "./Footer";
import ProfileSec from "./Profile";
import Compose from "./Compose";

function menuRoute(menu) {
  let menuBody = "";
  switch (true) {
    case menu === "profile":
      menuBody = <ProfileSec />;
      break;
    case menu === "compose":
      menuBody = <Compose />;
      break;
    default:
  }
  return menuBody;
}
function AdminDashboard(props) {
  return (
    <div className="admin-dashboard">
      <Navbar />
      <div className="dashboard-body">
        <SidebarDahsboard />
        <div className="menu-section-dashboard">{menuRoute(props.menu)}</div>
      </div>
      <Footer className="footer-dashboard" />
    </div>
  );
}

export default AdminDashboard;
