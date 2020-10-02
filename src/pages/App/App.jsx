import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Dropdown from "../../components/Dropdown/Dropdown";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import authService from "../../services/authService";
import userService from "../../services/userService";
import covidDataService from "../../services/covidDataService";
import Users from "../Users/Users";
import Profile from '../Profile/Profile'


import "./App.css";

class App extends Component {
  state = {
    user: authService.getUser(),
    userData: null,
    resources: null,
    stats: null
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
    let resourceData = await covidDataService.getStateResources()
      this.setState({resources: resourceData})

      let stats = await covidDataService.getStateData()
      this.setState({stats: stats})
  }

  handleUpdateUser = async userData => {
    const updatedUser = await userService.updateUserInfo(userData)
    this.setState({updatedUser})
  }

  render() {
    const {userData} = this.state
    return (
      <>
        <NavBar user={userData} handleLogout={this.handleLogout} />
        <Route
          exact
          path="/"
          render={({history}) => (
            <main className='flex-centered'>
              {this.state.user ? 
                <Dropdown resources={this.state.resources} stats={this.state.stats}
                id={this.state.user}
                userData={userData}
                history={history}
                /> : <>
                <h1 style={{width:'100%', margin: '2em'}}>Welcome to Safely Social!</h1>
                <img style={{display:'block'}} width='200px' src="https://i.imgur.com/AW8Lq0K.jpg" alt=""/>
                <p>Safely plan your travel throughout the US</p>
                <p>with state-by-state COVID-19 resources.</p>
                </>
              }
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

        <Route 
        exact path='/profile'
        render={() => (
        this.state.user ? <Profile
        userData = {userData} 
        // user={this.state.updatedUser._id ? this.state.updatedUser : ''}
        // handleUpdateUser={this.handleUpdateUser}
        />
        : 
        <Redirect to="/login" />
        )}/>
      </>
    );
  }
}

export default App;
