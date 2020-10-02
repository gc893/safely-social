import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarText
} from 'reactstrap';
import './NavBar.css'


const NavBar = ({ user, handleLogout }) => {
    return (
    <>
      {user ?
        <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">SafelySocial</NavbarBrand>
            <Nav className="mr-auto" navbar>
              <a href=" " className="nav-link">Welcome, {user.name}</a>
              <a href=" " className="nav-link" onClick={handleLogout}>Log Out</a>
            </Nav>
          <NavbarText>Simple Text</NavbarText>
      </Navbar>
    </div>
      :
      <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">SafelySocial</NavbarBrand>
          <Nav className="mr-auto" navbar>
              <a href="/login" className="nav-link">Log In</a>
              <a href="/signup" className="nav-link">Sign Up</a>
              </Nav>
          <NavbarText>Simple Text</NavbarText>
      </Navbar>
    </div>
      }
    </>
  )
}

export default NavBar;
