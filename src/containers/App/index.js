import React from "react";

import "./index.scss";

export default class App extends React.Component {
	render() {
		return (
			<div className="application">
				<div className="header">
					<div className="logo">
						<img className="logo_image" src="https://cdn1.iconfinder.com/data/icons/mix-color-3/502/Untitled-35-512.png"/>
						<span className="company_name">jobTrainer</span>
					</div>
				</div>
				<div className="content">
					{this.props.children}
				</div>
				<div className="footer">This is the header</div>
			</div>
		)
	}
}