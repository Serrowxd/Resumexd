import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import './NavButton.css';

// import NavButton from '../NavButton/NavButton';

class NavButton extends Component {
  render() {
    return (
      <div className="buttonNav">
        <Link to={'/'} className="link">
          <Button outline className="navButton">
            Take Me Back
          </Button>
        </Link>
      </div>
    );
  }
}

export default NavButton;
