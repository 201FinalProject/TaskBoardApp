import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Navbar.css";

import AuthService from "./services/auth.service";

import Login from "./components/login.component.jsx";
import Register from "./components/register.component";
import HomePage from "./Pages/HomePage/HomePage";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";

// import AuthVerify from "./common/auth-verify";
import EventBus from "./common/EventBus";
import GroupHome from "./Pages/GroupHome/GroupHome";
import HistoryTask from "./common/HistoryTask/HistoryTask";
import HistoryPage from "./Pages/History/HistoryPage";
import CreateTaskComponent from "./components/Task/CreateTaskComponent/CreateTaskComponent";
import ListTaskComponent from "./components/Task/ListTaskComponent/ListTaskComponent";
import ViewTaskComponent from "./components/Task/ViewTaskComponent/ViewTaskComponent";
import Chat from "./Pages/ChatPage/Chat";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
    
    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    AuthService.logout();
    this.setState({
      currentUser: undefined,
      showModeratorBoard: false,
      showAdminBoard: false,
    });
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
      <div id="BIGDIV">
        <nav id="entirebar">
          {currentUser ? (
            <span >
              <Link to={"/home"} id="logo">Vision</Link>
            </span>
          ) : (
            <Link to={"/login"} id="logo">Vision</Link>
          )}
          <ul>
            <li>
              {currentUser ? (
                <Link to={"/login"} className="login-button" onClick={this.logOut}>
                  Logout, {currentUser.username}
                </Link>
              ) : (
                <Link to={"/login"} className="login-button">
                  Login
                </Link>
              )}
            </li>
            <li>
              <Link to="/Chat" t>Global Chat</Link>
            </li>
          </ul>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/HomePage", "/home"]} component={HomePage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} />\
            <Route path="/GroupHome" component={GroupHome}/>
            <Route path="/history" component={HistoryPage}/>
            <Route path="/add-task/:id" component={CreateTaskComponent}/>
            <Route path="/view-task/:id" component={ViewTaskComponent}/>
            <Route path = "/Chat" component = {Chat }></Route>
          </Switch>
        </div>
        <div>
        </div>

        { /*<AuthVerify logOut={this.logOut}/> */ }
      </div>
    );
  }
}

export default App;
