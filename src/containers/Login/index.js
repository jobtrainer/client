import React from "react";

import InputGroup from "../../components/Controls/InputGroup";
import MainButton from "../../components/Controls/MainButton";

import "./index.scss";

export default class Login extends React.Component {
	handleUsernameChange(e) {
		this.setState({username: e.target.value});
	}

	handlePasswordChange(e) {
		this.setState({password: e.target.value});
	}
	
	handleLoginSubmit(e) {
		e.preventDefault();
		console.log('you tried to login!');
		console.log('username: ' + this.state.username);
		console.log('password: ' + this.state.password);
	}
	
	render() {
		return (
			<div className="login_page">
				<div className="login_container">
					<h1 className="title">Login</h1>
					<form onSubmit={this.handleLoginSubmit.bind(this)}>
						<InputGroup labelText="Username" inputName="username" inputType="text" onChange={this.handleUsernameChange.bind(this)} />
						<InputGroup labelText="Password" inputName="password" inputType="password" onChange={this.handlePasswordChange.bind(this)} />						
						<MainButton buttonText="Login" isSubmit={true} isDisabled={false} />
					</form>
				</div>
			</div>
		)
	}
}