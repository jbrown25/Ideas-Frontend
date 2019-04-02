import {
	SIGNUP_REQUEST,
	SIGNIN_REQUEST,
	CHECK_TOKEN,
	SIGNOUT,
	CLEAR_ERROR_MESSAGE
} from './types';

export const signupAction = (credentials, callback) => {
	return {
		type: SIGNUP_REQUEST,
		payload: credentials,
		callback
	};
};

export const signinAction = (credentials, callback) => {
	return {
		type: SIGNIN_REQUEST,
		payload: credentials,
		callback
	};
};

export const checkTokenAction = (token, callback) => {
	return {
		type: CHECK_TOKEN,
		payload: token,
		callback
	};
};

export const signoutAction = () => {
	localStorage.removeItem('token');
	return {
		type: SIGNOUT,
		payload: ''
	};
};

export const clearErrorAction = () => {
	return {
		type: CLEAR_ERROR_MESSAGE,
		payload: ''
	};
};