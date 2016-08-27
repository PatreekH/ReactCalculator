// Include React 
var React = require('react');

// Create the Multiplier Component
var Multiplier = React.createClass({

	getInitialState: function(){
		return {
			number: 30
		}
	},

	handleClick: function(){
		this.props.setParent(this.props.hungerlevel + this.state.number);
	},

	render: function(){

		return(

			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title">Food 2</h3>
				</div>
				<div className="panel-body text-center">

					{/*Multiplier takes the number of clicks and multiplies it by itself*/}
					<h1><button onClick={this.handleClick}>Eat me</button></h1>

				</div>
			</div>
		)
	}
});

// Export the component back for use in other files
module.exports = Multiplier;