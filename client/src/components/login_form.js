import React from 'react';
import { Link } from 'react-router-dom';
//import { connect } from 'react-redux';

class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email:'',
			password:''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {

	}

	handleSubmit(event) {
		event.preventDefault();
	}


	render() {
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					<input type="text"/>
				</form>
			</div>
		);
	}
}

export default LoginForm;