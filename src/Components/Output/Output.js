import React from 'react';

import Answer from './Answer/Answer.js'
import History from './History/History.js'

import './Output.css';

function Output(props) {
	let {answer, history} = props;

	return(
		<div className="output">
			<Answer answer={answer}/>
			<History history={history}/>
		</div>
	);
}

export default Output;