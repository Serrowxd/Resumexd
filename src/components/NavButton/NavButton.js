import React, { Component } from 'react';
import { Transition, animated } from 'react-spring';
import { Button } from 'reactstrap';

import Filler from '../Filler';
import UpperHeader from '../UpperHeader/UpperHeader';

const FillerButton = styles => (
  <animated.div>
    <Filler />
  </animated.div>
);

const About = styles => (
  <animated.div>
    <UpperHeader />
  </animated.div>
);

class NavButton extends Component {
  state = { toggled: true };
  toggle = e => this.setState(state => ({ toggled: !state.toggled }));
  render() {
    return (
      <div>
        <Transition
          native
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0, pointerEvents: 'none' }}
          config={{ tension: 5, friction: 10 }}
        >
          {this.state.toggled ? Filler : About}
        </Transition>
        <Button onClick={this.toggle}>About Me</Button>
      </div>
    );
  }
}

export default NavButton;
