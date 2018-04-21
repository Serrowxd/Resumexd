import React, { Component } from 'react';

import './App.css';

// Imports
import NavBar from './components/NavBar/NavBar';
import Filler from './components/Filler';
import LowerHead from './components/LowerHeader/LowerHeader';

class App extends Component {
  render() {
    return (
      <div>
        <div className="containerDiv">
          <NavBar />
        </div>
        <div className="lowerHeadDiv">
          <LowerHead />
        </div>
        <div>
          <Filler />
          <Filler />
          <Filler />
          <Filler />
        </div>
      </div>
    );
  }
}

export default App;
