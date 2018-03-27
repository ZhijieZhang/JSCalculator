import React from 'react';

import './Answer.css';

function Answer(props) {
	return(
		<div className="answer"> 
			<p>{props.answer}</p>
		</div>
	);
}

export default Answer;