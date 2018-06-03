import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';



import '../App.css';

import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';


class NavigationBar extends Component {
 


render() {
    return (

      <Navbar bsStyle='default' inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <LinkContainer to="/">
      <a className="brand" href="/">Twitchthroe</a>
      </LinkContainer>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.4}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.5}>Separated link</MenuItem>
      </NavDropdown>
    </Nav>
    <Nav pullRight>
      <LinkContainer to="/login">
      <NavItem href="/login">
        Login
      </NavItem>
      </LinkContainer>
      <LinkContainer to="/register">
      <NavItem eventKey={2} href="/register">
        Register
      </NavItem>
      </LinkContainer>
      </Nav>
  </Navbar.Collapse>
</Navbar>
    );
  }
}

export default NavigationBar;