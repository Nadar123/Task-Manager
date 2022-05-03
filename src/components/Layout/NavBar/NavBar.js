import { useLogout } from "../../../hooks/useLogout";
import { useAuthContext } from "../../../hooks/useAuthContext";
/*icon*/
import { Link } from "react-router-dom";
import Task from "../../../assets/task.jpeg";

/*styles*/

import styled from "styled-components";

function NavBar() {
  const { user } = useAuthContext();
  const { logout, isPending } = useLogout();
  return (
    <NavBarStyled>
      <NavList>
        <Logo>
          <LogoImage src={Task} alt="" />
          <span>Task Manager</span>
        </Logo>
        {!user && (
          <>
            <NavLink className="nav-link">
              <Link to="/login">Login</Link>
            </NavLink>
            <NavLink className="nav-link">
              <Link to="/signup">Signup</Link>
            </NavLink>
          </>
        )}

        <li>
          {user && (
            <>
              <button className="btn" onClick={logout}>
                Logout
              </button>
            </>
          )}
        </li>
      </NavList>
    </NavBarStyled>
  );
}

export default NavBar;

const NavBarStyled = styled.nav`
  width: 100%;
  padding: 30px 0;
  box-sizing: border-box;
  margin-bottom: 80px;
`;
const NavList = styled.ul`
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: flex-end;
`;

const Logo = styled.li`
  font-weight: bold;
  color: var(--heading-color);
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  margin-right: auto;
`;

const LogoImage = styled.img`
  margin-right: 10px;
  width: 25px;
  margin-top: -8px;
`;

const NavLink = styled.li`
  a {
    color: #333;
    text-decoration: none;
    margin-right: 20px;

    &:hover {
      color: #000;
      border-bottom: 1px solid #000;
    }
  }
`;
