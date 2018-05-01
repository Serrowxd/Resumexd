import React, { Component } from 'react';
import { Button } from 'reactstrap';

import './Home.css';

// import NavButton from '../NavButton/NavButton';

class Home extends Component {
  render() {
    return (
      <div>
        <h1 className="lowerHead">Kevin Jolley</h1>
        <h2 className="lowerText">Developer / Programmer</h2>
        <h4 className="lowerGoal"> Avid Writer, JavaScript Fanatic </h4>
        <Button className="MainButton">About Me</Button>
        <Button className="MainButton">About Me</Button>
        <Button className="MainButton">About Me</Button>
        <Button className="MainButton">About Me</Button>
        {/* <NavButton className="MainButton" /> */}
      </div>
    );
  }
}

export default Home;
