import React, { Component } from 'react';
import { Transition, animated } from 'react-spring';

import LowerHeader from './components/LowerHeader/LowerHeader';

const defaultStyles = {
  cursor: 'pointer',
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

const Home = styles => (
  <animated.div style={{ ...defaultStyles, ...styles }}>
    <LowerHeader />
  </animated.div>
);

const B = styles => (
  <animated.div style={{ ...defaultStyles, ...styles }}>B</animated.div>
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
          {this.state.toggled ? Home : B}
        </Transition>
      </div>
    );
  }
}

export default App;
