import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavbarText
} from 'reactstrap';


const NavBar = ({ user, handleLogout }) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
    return (
    <>
      {user ?
        <div>
        <Navbar color="light" light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <a href=" " className="nav-link">Welcome, {user.name}</a>
              <a href=" " className="nav-link" onClick={handleLogout}>Log Out</a>
            </Nav>
        </Collapse>
      </Navbar>
    </div>
      :
      <div>
      <Navbar color="light" light expand="md">
      <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
        <NavbarBrand href="/">SafelySocial</NavbarBrand>
          <Nav className="mr-auto" navbar>
              <a href="/login" className="nav-link">Log In</a>
              <a href="/signup" className="nav-link">Sign Up</a>
              </Nav>
          </Collapse>
      </Navbar>
    </div>
      }
    </>
  )
}

export default NavBar;
