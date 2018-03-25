import React, {Component} from 'react';

import './Answer.css';

class Answer extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div className="answer"> 
				<p>{this.props.answer}</p>
			</div>
		);
	}
}

export default Answer;