import { useRouter } from "next/router";
import Link from "next/link";
import { useAuth } from "../../pages/utils/AuthContext";

export default function Dashboard(props) {
  const router = useRouter();
  const { logout } = useAuth();
  function logoutHandler(e) {
    e.preventDefault();
    logout();
    router.push("/dashboard/login");
  }
  return (
    <div className="dashboardContainer">
      <div className="dashboardSidebarContainer">
        <Link href="/dashboard/profile">
          <button className="dashboardMenuParent">Profile</button>
        </Link>
        <Link href="/dashboard/article">
          <button className="dashboardMenuParent">Article</button>
        </Link>
        <Link href="/dashboard/project">
          <button className="dashboardMenuParent">Project</button>
        </Link>
        <hr />
        <Link href="/dashboard/settings">
          <button className="dashboardMenuParent">Settings</button>
        </Link>
        <button className="dashboardMenuParent" onClick={logoutHandler}>
          Logout
        </button>
      </div>
      <div className="dashboardContentContainer">{props.body}</div>
    </div>
  );
}
