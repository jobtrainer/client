import React from "react";

import "./index.scss";

export default class App extends React.Component {
	render() {
		return (
			<div className="application">
				<div className="header">This is the header</div>
				<div className="content">
					{this.props.children}
				</div>
				<div className="footer">This is the header</div>
			</div>
		)
	}
}