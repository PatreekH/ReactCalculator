// Include React 
var React = require('react');
var Imgr = require('./Imgr');

// Create the Adder Component
var Adder = React.createClass({

	// Adder has a state that follows the number of clicks
	getInitialState: function(){
		return {
			buttons: [1,1,1,1,1,1,1,1,1,1],
			number: " ",
			number2: " ",
			firstNum: false,
			operator: " "
		}
	},

	handleClick: function(event){
		var firstNum = this.state.firstNum;
		var num1 = this.state.number;
		var num2 = this.state.number2;
		if (firstNum == false){
			this.setState({
				number: num1 + event.target.value
			})
		} else if (firstNum  == true){
			this.setState({
				number2: num2 + event.target.value
			})
		}
	},

	handleOperator: function(event){
		console.log('fire')
		console.log(event.target)
		console.log(event.target.value)
		this.setState({
			firstNum: true,
			operator: event.target.value
		})
	},

	render: function(){

		return(

			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title">Calc numbers</h3>
				</div>
				<div className="panel-body text-center">
					{this.state.buttons.map(function (button, i) {
   						return <button key={i} id="button{i}" className="btn btn-primary number" value={i} onClick={this.handleClick}>{i}</button>
					}.bind(this))}
					<br/><br/>
					<button id="buttonPlus" className="btn btn-danger operator" onClick={this.handleOperator} value="+">+</button>
					<button id="buttonMultiply" className="btn btn-danger operator" onClick={this.handleOperator} value="*">x</button>
					<button id="buttonMinus" className="btn btn-danger operator" onClick={this.handleOperator} value="-">-</button>
					<button id="buttonDivide" className="btn btn-danger operator" onClick={this.handleOperator} value="/">/</button>
					<button id="buttonPower" className="btn btn-danger operator" onClick={this.handleOperator} value="^">^</button>
					<br/><br/>
					<Imgr num1={this.state.number} op={this.state.operator} num2={this.state.number2} />
				</div>
			</div>
		)
	}
});

// Export the componen back for use in other files
module.exports = Adder;