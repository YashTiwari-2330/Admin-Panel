import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>🩸 Blood Bank</h2>
        <p>Admin Panel</p>
      </div>
      <nav>
        <ul className="nav-menu">
          <li>
            <NavLink to="/" className="nav-link">
              📊 Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/donors" className="nav-link">
              🧑🤝🧑 Donors
            </NavLink>
          </li>
          <li>
            <NavLink to="/hospitals" className="nav-link">
              🏥 Hospitals
            </NavLink>
          </li>
          <li>
            <NavLink to="/blood-inventory" className="nav-link">
              🩸 Blood Inventory
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;