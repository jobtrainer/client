import React from "react";

import InputGroup from "../../components/Controls/InputGroup";

import "./index.scss";

export default class Login extends React.Component {
	render() {
		return (
			<div className="login_page">
				<div className="login_container">
					<h1>Login</h1>
					<form onSubmit={(e) => { e.preventDefault(); }}>
						{/*<div className="input_group">
							<label htmlFor="username">Username:</label>
							<input id="username" type="text" className="text_field" />
						</div>*/}
						<InputGroup labelText="Username" inputName="username" inputType="text" />
						<InputGroup labelText="Password" inputName="password" inputType="password" />
						{/*<div className="input_group">
							<label htmlFor="password">Password:</label>
							<input id="password" type="password" className="text_field" />
						</div>*/}
						<button type="submit">Submit</button>
					</form>
				</div>
			</div>
		)
	}
}