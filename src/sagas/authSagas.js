import {takeLatest, put, call} from 'redux-saga/effects';
import axios from 'axios';

import {
	SIGNUP_REQUEST,
	SIGNUP_SUCCESS,
	SIGNUP_ERROR,
	SIGNIN_REQUEST,
	SIGNIN_SUCCESS,
	SIGNIN_ERROR,
	CHECK_TOKEN,
	CHECK_TOKEN_SUCCESS,
	CHECK_TOKEN_ERROR
} from '../actions/Authentication/types';

//actually make axios request
const attemptSignup = credentials => {
	const {username, email, password} = credentials;
	return axios.post('http://localhost:8080/auth/signup', {
		username,
		email,
		password
	});
};

export function* signupWatcher(){
	yield takeLatest(SIGNUP_REQUEST, signupWorker);
}

//worker function for signing up new user
function* signupWorker(action){
	const credentials = action.payload;
	try {
		const response = yield(call(attemptSignup, credentials));
		console.log(response);

		yield put({
			type: SIGNUP_SUCCESS,
			payload: response
		});
		//localstorage
		localStorage.setItem('token', response.data.token);

		//do callback. This is redirect on successful signup
		action.callback();

	} catch(error) {
		console.log(error);
		yield put({
			type: SIGNUP_ERROR,
			payload: error
		});
	}
}

const attemptSignin = credentials => {
	const {username, password} = credentials;
	return axios.post('http://localhost:8080/auth/signin', {
		username,
		password
	});
};

export function* signinWatcher(){
	yield takeLatest(SIGNIN_REQUEST, signinWorker);
}

function* signinWorker(action){
	const credentials = action.payload;
	try {
		const response = yield(call(attemptSignin, credentials));

		yield put({
			type: SIGNIN_SUCCESS,
			payload: response
		});

		//localstorage
		localStorage.setItem('token', response.data.token);

		//redirect
		action.callback();
	} catch(error) {
		console.log(error);
		yield put({
			type: SIGNIN_ERROR,
			payload: error
		});
	}
}

const attemptCheckToken = token => {
	return axios.get('http://localhost:8080/user', {
		headers: {
			authorization: token
		}
	});
};

export function* checkTokenWatcher(){
	yield takeLatest(CHECK_TOKEN, checkTokenWorker);
}

function* checkTokenWorker(action){
	const token = action.payload;
	try {
		const response = yield(call(attemptCheckToken, token));

		yield put({
			type: CHECK_TOKEN_SUCCESS,
			payload: response
		});

		//redirect
		action.callback();
	}catch(error){
		yield put({
			type: CHECK_TOKEN_ERROR,
			payload: error
		});
	}
}