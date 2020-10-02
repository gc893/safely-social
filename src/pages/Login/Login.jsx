import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import authService from "../../services/authService"
import { Form, FormGroup } from 'reactstrap'

class LoginPage extends Component {
  state = {
    email: "",
    pw: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    const { history, handleSignupOrLogin } = this.props;
    e.preventDefault();
    try {
      await authService.login(this.state);
      // Let <App> know a user has signed up!
      handleSignupOrLogin();
      history.push("/");
    } catch (err) {
      // Use a modal or toast in your apps instead of alert
      alert('Invalid Credentials!');
    }
  };

  render() {
    const {email, pw} = this.state
    return (
      <body style={{
        marginLeft:'40%'
      }}>
        
      
        <Form autoComplete="off" onSubmit={this.handleSubmit} className='form'>
        <h5 className='title'>LOG IN</h5>
        <div>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <input
            type="text"
            autoComplete="off"
            id="email"
            value={email}
            name="email"
            onChange={this.handleChange}
            placeholder='Your Email'
            className='mr-sm-2 input'
          />
          </FormGroup>
          </div>
          <div>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <input
            type="password"
            autoComplete="off"
            id="password"
            value={pw}
            name="pw"
            onChange={this.handleChange}
            placeholder='Your Password'
            className='mr-sm-2 input'
          />
          </FormGroup>
          </div>
          <br></br>
          <br></br>
          <div>
          <button className='mr-sm-2' block>Log In</button>
          </div>
          <br></br>
          <br></br>
          Don't have an account? <Link to="/signup">Sign up here!</Link>
        </Form>

        </body>
      
    );
  }
}

export default LoginPage;
