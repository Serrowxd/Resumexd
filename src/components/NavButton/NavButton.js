import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import './NavButton.css';

// import NavButton from '../NavButton/NavButton';

class NavButton extends Component {
  render() {
    return (
      <Link to={'/'}>
        <Button outline className="MainButton">
          Take Me Back
        </Button>
      </Link>
    );
  }
}

export default NavButton;
