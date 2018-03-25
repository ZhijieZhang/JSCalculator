import React, {Component} from 'react';

class History extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div className="history"> 
				<p>{this.props.history}</p>
			</div>
		);
	}
}

export default History;