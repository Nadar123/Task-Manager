import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

/*pages*/
import Create from "./page/Create/Create";
import Dashboard from "./page/Dashboard/Dashboard";
import Login from "./page/Login/Login";
import Project from "./page/Project/Project";
import Signup from "./page/Signup/Signup";
import ProfilePage from "./page/ProfilePage/ProfilePage";
/*components*/
import NavBar from "./components/Layout/NavBar/NavBar";
import SideBar from "./components/Layout/SideBar/SideBar";
import OnlineUsers from "./components/OnlineUsers/OnlineUsers";
/*styles*/
import styled from "styled-components";

function App() {
  const { authIsReady, user } = useAuthContext();

  return (
    <AppWrapper>
      {authIsReady && (
        <BrowserRouter>
          {user && <SideBar />}
          <AppContainer>
            <NavBar />
            <Routes>
              <Route
                path="/"
                element={user ? <Dashboard /> : <Navigate to="/login" />}
              />
              {/* {!user && <Navigate to="/login" />}
                {user && <Dashboard />} */}

              <Route
                path="/create"
                element={user ? <Create /> : <Navigate to="/login" />}
              />

              <Route
                path="/projects/:id"
                element={user ? <Project /> : <Navigate to="/login" />}
              />

              <Route
                path="/profile"
                element={user ? <ProfilePage /> : <Navigate to="/login" />}
              />

              <Route
                path="/login"
                element={user ? <Navigate to="/" /> : <Login />}
              />

              <Route
                path="/signup"
                element={user ? <Navigate to="/" /> : <Signup />}
              />
            </Routes>
          </AppContainer>
          {user && <OnlineUsers />}
        </BrowserRouter>
      )}
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  display: flex;
`;

const AppContainer = styled.div`
  flex-grow: 1;
  padding: 0 60px;
`;
