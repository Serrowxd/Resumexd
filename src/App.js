import React, { Component } from 'react';
import { Transition, animated } from 'react-spring';
import { Button } from 'reactstrap';

import Home from './components/Home/Home';
import UpperHeader from './components/UpperHeader/UpperHeader';

const defaultStyles = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  fontWeight: 800,
  fontSize: '16em',
};

const Homexd = styles => (
  <animated.div style={{ ...defaultStyles, ...styles }}>
    <Home />
  </animated.div>
);

const AboutButton = styles => (
  <animated.div style={{ ...defaultStyles, ...styles }}>
    <UpperHeader />
  </animated.div>
);

class App extends Component {
  state = { toggled: true };
  toggle = e => this.setState(state => ({ toggled: !state.toggled }));
  render() {
    return (
      <div onClick={this.toggle}>
        <Transition
          native
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0, pointerEvents: 'none' }}
          config={{ tension: 5, friction: 10 }}
        >
          {this.state.toggled ? Homexd : AboutButton}
        </Transition>
      </div>
    );
  }
}

export default App;
