import React, {Component} from 'react';

import './Keypad.css'

class Keypad extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div onClick={this.props.handleClick} className="keypad">
				<button>AC</button>
				<button>&larr;</button>
				<button>&divide;</button>
				<button className="last-btn">&times;</button>

				<button>7</button>
				<button>8</button>
				<button>9</button>
				<button className="last-btn">&minus;</button>

				<button>4</button>
				<button>5</button>
				<button>6</button>
				<button className="last-btn">+</button>

				<button>1</button>
				<button>2</button>
				<button>3</button>
				<button id="equal-btn" className="last-btn">=</button>

				<button id="zero-btn">0</button>
				<button>.</button>
			</div>
		);
	}
}

export default Keypad;