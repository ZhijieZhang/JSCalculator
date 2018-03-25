import React, {Component} from 'react';

import Answer from './Answer/Answer.js'
import History from './History/History.js'

import './Output.css';

class Output extends Component {
	render() {
		return(
			<div className="output">
				<Answer/>
				<History/>
			</div>
		);
	}
}

export default Output;