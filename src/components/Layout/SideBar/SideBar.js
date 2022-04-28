import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

/*components*/
import Avatar from "../../Avatar/Avatar";
/*hooks*/
import { useAuthContext } from "../../../hooks/useAuthContext";
/*icons*/
import DashboardIcon from "../../../assets/dashboard_icon.svg";
import AddIcon from "../../../assets/add_icon.svg";
/*styles*/
import "./SideBar.css";

function SideBar() {
  const { user } = useAuthContext();
  // console.log("aaaa", user);

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <NavLink to="/profile">
          <div className="user">
            <Avatar src={user.photoURL} />
            <p>{user.displayName} </p>
          </div>
        </NavLink>

        <nav className="links">
          <ul>
            <li>
              <NavLink exact to="/">
                <img src={DashboardIcon} alt="DashboardIcon" />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/create">
                <img src={AddIcon} alt="Icon" />
                <span>New Project</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default SideBar;
