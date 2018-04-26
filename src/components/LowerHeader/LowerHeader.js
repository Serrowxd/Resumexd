import React, { Component } from 'react';

import './LowerHeader.css';

class LowerHeader extends Component {
  render() {
    return (
      <div className="lowerHeaderDiv">
        <h1 className="lowerHead">Kevin Jolley</h1>
        <h2 className="lowerText">Developer / Programmer</h2>
        <h4 className="lowerGoal"> Avid Writer, JavaScript Fnatic </h4>
      </div>
    );
  }
}

export default LowerHeader;
