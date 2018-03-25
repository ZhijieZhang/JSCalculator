import React, { Component } from 'react';

import Output from './Components/Output/Output.js';
import Keypad from './Components/Keypad/Keypad.js';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="calculator">
      	<Output/>
      	<Keypad/>
      </div>
    );
  }
}

export default App;
