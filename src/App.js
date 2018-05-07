import React, { Component } from 'react';
import { Transition } from 'react-spring';
import { Button } from 'reactstrap';

import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';

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
  <div style={{ ...defaultStyles, ...styles }}>
    <Home />
  </div>
);

const AboutButton = styles => (
  <div style={{ ...defaultStyles, ...styles }}>
    <AboutMe />
  </div>
);

class App extends Component {
  render() {
    return (
      <div>
        <Homexd />
      </div>
    );
  }
}

export default App;
