import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import './Home.css';

// import NavButton from '../NavButton/NavButton';

class Home extends Component {
  render() {
    return (
      <div>
        <h1 className="lowerHead">Kevin Jolley</h1>
        <h2 className="lowerText">Developer / Programmer</h2>
        <h4 className="lowerGoal">
          Freelance Developer and JavaScript Fanatic
        </h4>

        <Button outline className="MainButton">
          Projects
        </Button>
        <Link to={'/AboutMe'}>
          <Button outline className="MainButton">
            About
          </Button>
        </Link>
        <Button outline className="MainButton">
          Resume
        </Button>
        <Button outline className="MainButton">
          Github
        </Button>
      </div>
    );
  }
}

export default Home;
