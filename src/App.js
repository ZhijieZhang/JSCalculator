import React, { Component } from 'react';

import Output from './Components/Output/Output.js';
import Keypad from './Components/Keypad/Keypad.js';
import handleClick from './Actions/HandleClick.js';

import './App.css';


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			answer: '0',
			history: '0'
		};

		this.handleClick = handleClick.bind(this);
	}

  render() {
    return (
    	<div className="container">
	      <div className="calculator">
      		<Output {...this.state}/>
      		<Keypad handleClick={this.handleClick}/>
      	</div>

      	<footer>Coded By Zhijie Zhang</footer>
    	</div>

    );
  }
}

export default App;
