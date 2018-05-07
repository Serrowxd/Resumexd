import React, { Component } from 'react';
import './AboutMe.css';

import NavButton from '../NavButton/NavButton';
import Filler from '../Filler';

const AboutMeStyles = {
  position: 'absolute',
  width: '100%',
  height: '20%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  fontWeight: 800,
  fontSize: '16em',
};

const StyledText = {
  position: 'absolute',
  width: '100%',
  height: '90%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  fontWeight: 800,
  fontSize: '1em',
};

const StyledButton = {
  position: 'absolute',
  width: '100%',
  height: '180%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  fontWeight: 800,
  fontSize: '16em',
};

class AboutMe extends Component {
  render() {
    return (
      <div>
        <NavButton />
        <div style={{ ...AboutMeStyles }}>
          <h1>Stuff about me goes here.</h1>
        </div>
        <div style={{ ...StyledText }}>
          <Filler />
        </div>
      </div>
    );
  }
}

// This whole page is currently broken, need to come back and fix it. Probably has something to do with the "Absolute Positioning".

export default AboutMe;
