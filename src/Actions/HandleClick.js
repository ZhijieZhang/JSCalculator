function isDigit(input) {
	return '0123456789'.indexOf(input) !== -1;
}

function isOperation(input) {
	return '+−×÷+-*/'.indexOf(input) !== -1;
}

function convertOperation(input) {
	let jsOperator = ['+','-','*','/'];
	return jsOperator['+−×÷'.indexOf(input)];
}

export default function handleClick(e) {
	if (e.target === e.currentTarget) return;

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
		let {history: currentHis} = this.state;
		let lastCharOfHis = currentHis.charAt(currentHis.length-1);
		
		if (isOperation(lastCharOfHis)) return; // Prevent situation like 1+++2 from happening

		this.state.history.charAt(this.state.history.length-1)
		this.setState((prevState) => {
			let {answer: prevAns, history: prevHis} = prevState;

			return {
				answer: prevAns === '0' ?
									'0'
								: userInput,
				history: prevHis === '0' ?
									'0'
								: prevHis.concat(convertOperation(userInput))
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
	} else if (userInput === '=') {
		this.setState((prevState) => {
			let {history: prevHis} = prevState;
			let result = String(eval(prevHis));

			return {
				answer: result,
				history: result
			};
		});
	} else { // userInput is .
		if (this.state.answer.indexOf('.') !== -1) return; // No more than one . in a number

		this.setState((prevState) => {
			let {answer: prevAns, history: prevHis} = prevState;

			return {
				answer: prevAns.concat(userInput),
				history: prevHis.concat(userInput)
			};
		})
	}

	e.stopPropagation();
}


