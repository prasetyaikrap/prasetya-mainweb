function SidebarDashboard() {
  return (
    <div className="sidebar-container">
      <ul className="sidebar-menu">
        <li>
          <a href="/dashboard/profile">Profile</a>
        </li>
        <li>
          <a href="/dashboard/compose">Compose</a>
        </li>
        <li>
          <a href="/dashboard/settings">Settings</a>
        </li>
      </ul>
    </div>
  );
}

export default SidebarDashboard;
