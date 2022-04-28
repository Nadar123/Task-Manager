import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
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
import "./App.css";

function App() {
  const { authIsReady, user } = useAuthContext();

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          {user && <SideBar />}
          <div className="container">
            <NavBar />
            <Switch>
              <Route exact path="/">
                {!user && <Redirect to="/login" />}
                {user && <Dashboard />}
              </Route>
              <Route path="/create">
                {!user && <Redirect to="/login" />}
                {user && <Create />}
              </Route>
              <Route path="/projects/:id">
                {!user && <Redirect to="/login" />}
                {user && <Project />}
              </Route>
              <Route path="/profile">
                {!user && <Redirect to="/login" />}
                {user && <ProfilePage />}
              </Route>
              <Route path="/login">
                {user && <Redirect to="/" />}
                {!user && <Login />}
              </Route>
              <Route path="/signup">
                {user && <Redirect to="/" />}
                {!user && <Signup />}
              </Route>
            </Switch>
          </div>
          {user && <OnlineUsers />}
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;

// const AppWrapper = styled.div`
//   /* display: flex; */
// `;

// const AppContainer = styled.div`
//   padding: 0 60px;
// `;
