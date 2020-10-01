import React, { Component } from "react";
import userService from "../../services/userService";

class Users extends Component {
  state = {
    users: [],
  };

  async componentDidMount() {
    const users = await userService.getAllUsers();
    this.setState({ users });
  }

  render() {
    return (
      <>
        <h1>Hello. This is a list of all the users.</h1>
        {this.state.users.map((user) => (
          <p>{user.name}</p>
        ))}
      </>
    );
  }
}

export default Users;