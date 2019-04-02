import {
	IDEAS_REQUEST,
	IDEAS_SUCCESS,
	IDEAS_ERROR,
	IDEA_REQUEST,
	IDEA_SUCCESS,
	IDEA_ERROR,
	IDEA_UPDATE_REQUEST,
	IDEA_UPDATE_SUCCESS,
	IDEA_UPDATE_ERROR,
	IDEA_SLUG_REQUEST,
	IDEA_SLUG_SUCCESS,
	IDEA_SLUG_ERROR,
	IDEA_CREATE_REQUEST,
	IDEA_CREATE_SUCCESS,
	IDEA_CREATE_ERROR
} from '../actions/Idea/types';

const INITIAL_STATE = {
	ideas: [],
	idea: null,
	createdIdea: null,
	fetching: false,
	errorMessage: null
};

export default (state = INITIAL_STATE, action) => {
	switch(action.type){
		case IDEAS_REQUEST:
			return {
				...state,
				fetching: true,
				ideas: [],
				errorMessage: null
			};
		case IDEAS_SUCCESS:
			return {
				...state,
				fetching: false,
				ideas: action.payload.data,
				errorMessage: null
			};
		case IDEAS_ERROR:
			return {
				...state,
				fetching: false,
				ideas: [],
				errorMessage: action.payload
			};
		case IDEA_SLUG_REQUEST:
			return {
				...state,
				fetching: true,
				errorMessage: null,
				idea: null
			};
		case IDEA_SLUG_SUCCESS:
			return {
				...state,
				fetching: false,
				idea: action.payload.data,
				errorMessage: null
			};
		case IDEA_SLUG_ERROR:
			return {
				...state,
				fetching: false,
				errorMessage: action.payload,
				idea: null
			};
		case IDEA_CREATE_REQUEST:
			return {
				...state,
				fetching: true,
				createdIdea: null,
				errorMessage: null
			};
		case IDEA_CREATE_SUCCESS:
			return {
				...state,
				fetching: false,
				createdIdea: action.payload.data,
				errorMessage: null
			};
		case IDEA_CREATE_ERROR:
			return {
				...state,
				fetching: false,
				createdIdea: null,
				errorMessage: action.payload.data
			};
		default:
			return state;
	}
}