function isDigit(input) {
	return '0123456789'.indexOf(input) !== -1;
}

function isOperation(input) {
	return '+−×÷'.indexOf(input) !== -1;
}

export default function handleClick(e) {
	let userInput = e.target.textContent;

	if (isDigit(userInput)) {
		this.setState((prevState) => {
			let {answer: prevAns, history: prevHis} = prevState;

			return {
				answer: prevAns === '0' || isOperation(prevAns) ?
										userInput 
									: prevAns.concat(userInput),
				history: prevHis === '0' ?
										userInput 
									: prevHis.concat(userInput)
			};
		});
	} else if (isOperation(userInput)) { 
		this.setState((prevState) => {
			let {answer: prevAns, history: prevHis} = prevState;

			return {
				answer: prevAns === '0' ?
									'0'
								: userInput,
				history: prevHis === '0' ?
									'0'
								: prevHis.concat(userInput)
			};
		})
	} else if (userInput === 'AC') {
		this.setState({
			answer: '0',
			history: '0'
		});
	} else if (userInput === '←') {
		this.setState((prevState) => {
			let {answer: prevAns, history: prevHis} = prevState;

			return {
				answer: prevAns.length === 1 ?
									'0'
								: prevAns.slice(0, prevAns.length-1),
				history: prevHis.length === 1 ?
									'0'
								: prevHis.slice(0, prevHis.length-1)
			};
		});
	} else { // userInput === '='
		this.setState((prevState) => {
			let {answer: prevAns, history: prevHis} = prevState;
			let result = String(eval(prevHis));

			return {
				answer: result,
				history: result
			};
		});
	}

	e.stopPropagation();
}


