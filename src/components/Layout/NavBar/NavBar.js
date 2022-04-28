import { useLogout } from "../../../hooks/useLogout";
import { useAuthContext } from "../../../hooks/useAuthContext";
/*icon*/
import { Link } from "react-router-dom";
import Task from "../../../assets/task.jpeg";

/*styles*/
import "./NavBar.css";
function NavBar() {
  const { user } = useAuthContext();
  const { logout, isPending } = useLogout();
  return (
    <nav className="navbar">
      <ul>
        <li className="logo">
          <img src={Task} alt="" />
          <span>Task Manager</span>
        </li>
        {!user && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}

        <li>
          {!isPending && (
            <>
              <button className="btn" onClick={logout}>
                Logout
              </button>
            </>
          )}
          {isPending && (
            <button className="btn" disabled>
              Logging out...
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
