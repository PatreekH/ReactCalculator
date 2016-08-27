// Include React 
var React = require('react');

// Here we include all of the sub-components
var Adder = require('./Panels/Adder');
var Multiplier = require('./Panels/Multiplier');
var Imgr = require('./Panels/Imgr');

// This is the main component. It includes the banner and button.
// Whenever you click the button it will communicate the click event to all other sub components.
var Main = React.createClass({

	// Here we set a generic state associated with the number of clicks
	getInitialState: function(){
		return {
			number: 0
		}
	},

	// Here we render the function
	render: function(){

		return(

			<div className="container">

				<div className="row">

					<div className="jumbotron">
						<h1>Calculater</h1>
					</div>


					{/*Below we add each of the sub components. Note how we "pass" in the click count*/}
					<div className="col-md-12">
				
						<Adder buildEquation = {this.buildEquation} />

					</div>


				</div>

			</div>
		)
	}
});

// Export the componen back for use in other files
module.exports = Main;