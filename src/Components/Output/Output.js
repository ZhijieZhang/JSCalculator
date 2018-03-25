import React, {Component} from 'react';

import Answer from './Answer/Answer.js'
import History from './History/History.js'

import './Output.css';

class Output extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let {answer, history} = this.props;
		return(
			<div className="output">
				<Answer answer={answer}/>
				<History history={history}/>
			</div>
		);
	}
}

export default Output;