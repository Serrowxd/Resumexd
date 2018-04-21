import React, { Component } from 'react';

import './LowerHead.css';

class LowerHead extends Component {
  render() {
    return (
      <div>
        <h1 className="lowerHead">My Goal</h1>
        <h2 className="lowerText">
          Full-Stack JavaScript Developement - React/Node.js
        </h2>
        <h4 className="lowerGoal">
          {' '}
          I started my coding journey in December of 2017; this page is
          dedicated to my progress as a developer.{' '}
        </h4>
      </div>
    );
  }
}

export default LowerHead;
