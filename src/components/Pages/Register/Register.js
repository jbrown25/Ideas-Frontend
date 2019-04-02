import React, {Component} from 'react';
import {signupAction, clearErrorAction} from '../../../actions/Authentication';
import {connect} from 'react-redux';
import {compose, bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';

import Input from '../../UI/Input';
import Button from '../../UI/Button';
import Container from '../../UI/Container';

const RegisterWrapper = styled.div`
	padding: 20px;
	width: 600px;
	max-width: 100%;
	display: block;
	margin: 0 auto;
	box-shadow: 5px 5px 25px 0px rgba(46, 61, 73, 0.2);
`;

class Register extends Component {
	state = {
		username: '',
		email: '',
		password: ''
	}

	handleSubmit = e => {
		e.preventDefault();
		this.props.signupAction({
			username: this.state.username,
			email: this.state.email,
			password: this.state.password
		}, () => this.props.history.push('/ideas')); //callback, redirect if registration successful
	}

	handleUsernameChange = e => {
		this.setState({username: e.target.value});
	}

	handleEmailChange = e => {
		this.setState({email: e.target.value});
	}

	handlePasswordChange = e => {
		this.setState({password: e.target.value});
	}

	getErrorMessage = () => {
		const {errorMessage} = this.props.auth;
		//have server error
		if(errorMessage){
			if(errorMessage.response){
				return errorMessage.response.data.error;
			}else{
				return 'Server not responding';
			}
		}
		return '';
	}

	//clears the error. prevents login and register pages from sharing error message
	componentWillUnmount(){
		this.props.clearErrorAction();
	}

	render(){
		const errorMessage = this.getErrorMessage();
		return (
			<Container>
				<RegisterWrapper>
					<h1>Register here.</h1>
					<form onSubmit={this.handleSubmit}>
						<Input
							type='text'
							value={this.state.username}
							placeholder='username'
							onChange={this.handleUsernameChange} />
						<Input
							type='email'
							value={this.state.email}
							placeholder='email'
							onChange={this.handleEmailChange} />
						<Input
							type='password'
							value={this.state.password}
							placeholder='password'
							onChange={this.handlePasswordChange} />
						<Button type='submit'>submit</Button>
					</form>
					{errorMessage ? <p>{errorMessage}</p> : ''}
				</RegisterWrapper>
			</Container>
		);
	}
}

const mapStateToProps = state => {
	return {
		auth: state.auth
	};
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators({signupAction, clearErrorAction}, dispatch);
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withRouter
)(Register);