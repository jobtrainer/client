import React from "react";

class StepPage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>Hello world this is my step: {this.props.params.step}</div> 
		);
	}
}

export default StepPage;