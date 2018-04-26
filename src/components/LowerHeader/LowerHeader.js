import React, { Component } from 'react';
import { Button } from 'reactstrap';

import './LowerHeader.css';

class LowerHeader extends Component {
  render() {
    return (
      <div>
        <h1 className="lowerHead">Kevin Jolley</h1>
        <h2 className="lowerText">Developer / Programmer</h2>
        <h4 className="lowerGoal"> Avid Writer, JavaScript Fanatic </h4>
        <Button> Henlo (OvO") </Button>
      </div>
    );
  }
}

export default LowerHeader;
