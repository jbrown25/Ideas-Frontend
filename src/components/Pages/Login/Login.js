import React, {Component} from 'react';
import Input from '../../UI/Input';
import Button from '../../UI/Button';
import Container from '../../UI/Container';
import {signinAction, clearErrorAction} from '../../../actions/Authentication';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {compose, bindActionCreators} from 'redux';

import styled from 'styled-components';

const LoginWrapper = styled.div`
	padding: 20px;
	width: 600px;
	max-width: 100%;
	display: block;
	margin: 0 auto;
	box-shadow: 5px 5px 25px 0px rgba(46, 61, 73, 0.2);
`;

class Login extends Component {
	state = {
		username: '',
		password: ''
	};

	handleUsernameChange = e => {
		this.setState({username: e.target.value});
	}

	handlePasswordChange = e => {
		this.setState({password: e.target.value});
	}

	handleSubmit = e => {
		e.preventDefault();
		//could just pass the state obj but I con't like doing that
		this.props.signinAction({
			username: this.state.username,
			password: this.state.password
		}, () => this.props.history.push('/ideas'));
	}

	getErrorMessage = () => {
		const {errorMessage} = this.props.auth;
		//have server error
		if(errorMessage){
			if(errorMessage.response) return errorMessage.response.data.error;
			return 'server not responding';
		}
		return '';
	}

	//clear error message when navigating away from this page.
	//if we don't clear the error, it will show on the register page
	componentWillUnmount(){
		this.props.clearErrorAction();
	}

	render(){
		const {fetching, authenticated} = this.props.auth;
		const errorMessage = this.getErrorMessage();
		return (
			<Container>
				<LoginWrapper>
					<h1>Log in here.</h1>
					<form onSubmit={this.handleSubmit}>
						<Input
							type='text'
							value={this.state.username}
							placeholder='Username'
							onChange={this.handleUsernameChange} />
						<Input
							type='password'
							value={this.state.password}
							placeholder='Password'
							onChange={this.handlePasswordChange} />
						<Button
							type='submit'
							btnBlock
							btnLarge
						>
							Submit
						</Button>
						{errorMessage ? <p>{errorMessage}</p> : ''}
					</form>
				</LoginWrapper>
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
	return bindActionCreators({signinAction, clearErrorAction}, dispatch);
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withRouter
)(Login);