// Include React 
var React = require('react');

// Create the Imgr Component
var Imgr = React.createClass({

	getInitialState: function(){
		return {
			solution: " "
		}
	},

	equal: function(){
		var op = this.props.op
		var num1 = this.props.num1
		var num2 = this.props.num2
		if (op === "-"){
			var solution = parseInt(num1) - parseInt(num2);
			this.setState({
				solution: solution
			})
		} else if (op === "+"){
			var solution = parseInt(num1) + parseInt(num2);
			this.setState({
				solution: solution
			})
		} else if (op === "*"){
			var solution = parseInt(num1) * parseInt(num2);
			this.setState({
				solution: solution
			})
		} else if (op === "/"){
			var solution = parseInt(num1) / parseInt(num2);
			this.setState({
				solution: solution
			})
		}

	},


	render: function(){

		return(
				<div>
					<br /><br />
					<button id="buttonEqual" className="btn btn-success equal" onClick={this.equal} value="equals"><h1>=</h1></button>
					<button id="buttonClear" className="btn btn-default clear" value="clear"><h1>clear</h1></button>
					<hr />

					<h2>{this.props.num1}{this.props.op}{this.props.num2}</h2>
					<br />
					<h1>{this.state.solution}</h1>

				</div>
		)
	}
});

// Export the componen back for use in other files
module.exports = Imgr;