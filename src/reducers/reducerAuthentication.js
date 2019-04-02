import {
	SIGNUP_REQUEST,
	SIGNUP_SUCCESS,
	SIGNUP_ERROR,
	SIGNIN_REQUEST,
	SIGNIN_SUCCESS,
	SIGNIN_ERROR,
	CHECK_TOKEN,
	CHECK_TOKEN_SUCCESS,
	CHECK_TOKEN_ERROR,
	SIGNOUT,
	CLEAR_ERROR_MESSAGE
} from '../actions/Authentication/types';

const INITIAL_STATE = {
	authenticated: '',
	user: null,
	fetching: false,
	errorMessage: null
};

export default (state = INITIAL_STATE, action) => {
	switch(action.type){
		case SIGNUP_REQUEST:
			return {
				...state,
				authenticated: '',
				errorMessage: null,
				fetching: true
			};
		case SIGNUP_SUCCESS:
			return {
				...state,
				authenticated: action.payload.data.token,
				user: action.payload.data.user,
				errorMessage: null,
				fetching: false
			};
		case SIGNUP_ERROR:
			return {
				...state,
				authenticated: '',
				errorMessage: action.payload,
				fetching: false
			};
		case SIGNIN_REQUEST:
			return {
				...state,
				authenticated: '',
				errorMessage: null,
				fetching: true
			};
		case SIGNIN_SUCCESS:
			return {
				...state,
				authenticated: action.payload.data.token,
				user: action.payload.data.user,
				errorMessage: null,
				fetching: false
			};
		case SIGNIN_ERROR:
			return {
				...state,
				authenticated: '',
				errorMessage: action.payload,
				fetching: false
			};
		case CHECK_TOKEN:
			return {
				...state,
				fetching: true
			};
		case CHECK_TOKEN_SUCCESS:
			return {
				...state,
				user: action.payload.data.user,
				errorMessage: null,
				fetching: false
			};
		case CHECK_TOKEN_ERROR:
			return {
				...state,
				authenticated: '',
				errorMessage: action.payload,
				fetching: false
			};
		case SIGNOUT:
			return {
				...state,
				authenticated: '',
				user: null,
				fetching: false,
				errorMessage: null
			};
		case CLEAR_ERROR_MESSAGE:
			return {...state, errorMessage: null};
		default:
			return state;
	}
}