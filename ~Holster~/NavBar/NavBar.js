import React, { Component } from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div className="NavBarBackground">
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Serrow</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/Resume/">Resume</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Projects/">Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/Serrowxd">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
