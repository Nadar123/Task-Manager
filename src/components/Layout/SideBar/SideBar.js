import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import Avatar from "../../Avatar/Avatar";
import { useAuthContext } from "../../../hooks/useAuthContext";
import DashboardIcon from "../../../assets/dashboard_icon.svg";
import AddIcon from "../../../assets/add_icon.svg";
/*styles*/
import styled from "styled-components";

function SideBar() {
  const { user } = useAuthContext();

  return (
    <SideBarStyled>
      <SideBarContent>
        <NavLink to="/profile">
          <SideBarUser>
            <Avatar src={user.photoURL} />
            <p>{user.displayName} </p>
          </SideBarUser>
        </NavLink>

        <Links>
          <ul>
            <li>
              <NavLink to="/">
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
        </Links>
      </SideBarContent>
    </SideBarStyled>
  );
}

export default SideBar;

const SideBarStyled = styled.div`
  width: 300px;
  min-width: 300px;
  background: var(--primary-color);
  min-height: 100vh;
  box-sizing: border-box;
  position: relative;
  color: #fff;
  &.links {
    margin-top: 80px;
    margin-left: 20px;
    li {
      margin-top: 10px;
    }
  }
`;

const SideBarContent = styled.div`
  position: fixed;
  width: inherit;
  a {
    text-decoration: none;
    color: var(--heading-color);

    a {
      display: flex;
      align-items: center;
      padding: 10px;
      text-decoration: none;
      width: 100%;
      color: #fff;
      box-sizing: border-box;
    }
  }
`;

const SideBarUser = styled.div`
  text-transform: capitalize;
  font-weight: bold;
  text-align: center;
  letter-spacing: 1px;
  padding: 40px 30px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

const Links = styled.nav`
  margin-top: 80px;
  margin-left: 20px;
  li {
    margin-top: 10px;
    a {
      display: flex;
      align-items: center;
      padding: 10px;
      text-decoration: none;
      width: 100%;
      color: #fff;
      box-sizing: border-box;
      &.active {
        color: #555;
        background: var(--bg-color);
        border-radius: 20px 0 0 20px;
      }
      &:hover {
        color: #555;
      }
      img {
        margin-right: 10px;
        filter: invert(100%);
      }
      &.active img {
        filter: invert(40%);
      }
    }
  }
`;
