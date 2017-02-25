import React from "react";

import InputGroup from "../../components/Controls/InputGroup";
import MainButton from "../../components/Controls/MainButton";

import "./index.scss";

export default class Login extends React.Component {
	render() {
		return (
			<div className="login_page">
				<div className="login_container">
					<h1 className="title">Login</h1>
					<form onSubmit={(e) => { e.preventDefault(); }}>
						<InputGroup labelText="Username" inputName="username" inputType="text" />
						<InputGroup labelText="Password" inputName="password" inputType="password" />						
						<MainButton buttonText="Login" isSubmit={true} isDisabled={false} />
					</form>
				</div>
			</div>
		)
	}
}