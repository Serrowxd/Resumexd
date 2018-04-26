import React, { Component } from 'react';
import Center from 'react-center';

import './App.css';

// Imports
import LowerHeader from './components/LowerHeader/LowerHeader';
import Filler from './components/Filler';

class App extends Component {
  render() {
    return (
      <div className="containerDiv">
        <LowerHeader />
      </div>
    );
  }
}

export default App;
