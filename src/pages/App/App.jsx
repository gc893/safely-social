import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import authService from "../../services/authService";
import userService from "../../services/userService";
import Users from "../Users/Users";
import "./App.css";

class App extends Component {
  state = {
    user: authService.getUser(),
    userData: null
  };

  handleLogout = () => {
    authService.logout();
    this.setState({ user: null, userData: null });
  };

  handleSignupOrLogin = async () => {
    let u = await authService.getUser();
    let uData = await userService.getOne(u);
    this.setState({ user: u, userData: uData });
  };

  async componentDidMount() {
    if (this.state.user) {
      let uData = await userService.getOne(this.state.user);
      this.setState({userData: uData})
    }
  }

  render() {
    const {userData} = this.state
    return (
      <>
        <NavBar user={userData} handleLogout={this.handleLogout} />
        <Route
          exact
          path="/"
          render={() => (
            <main>
              <h1>Welcome. This is an authorization template.</h1>
            </main>
          )}
        />
        <Route
          exact
          path="/signup"
          render={({ history }) => (
            <Signup
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={({ history }) => (
            <Login
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/users"
          render={() => (userData ? <Users /> : <Redirect to="/login" />)}
        />
      </>
    );
  }
}

export default App;
