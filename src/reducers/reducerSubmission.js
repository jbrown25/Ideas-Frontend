import {
	SUBMISSIONS_IDEA_REQUEST,
	SUBMISSIONS_IDEA_SUCCESS,
	SUBMISSIONS_IDEA_ERROR,
	CREATE_SUBMISSION_REQUEST,
	CREATE_SUBMISSION_SUCCESS,
	CREATE_SUBMISSION_ERROR,
	SUBMISSIONS_TAG_REQUEST,
	SUBMISSIONS_TAG_SUCCESS,
	SUBMISSIONS_TAG_ERROR
} from '../actions/Submission/types';

const INITIAL_STATE = {
	submissionsByTag: [],
	submissionsByIdea: [],
	createdSubmission: null,
	fetching: false,
	errorMessage: null
};

export default (state = INITIAL_STATE, action) => {
	switch(action.type){
		case SUBMISSIONS_IDEA_REQUEST:
			return {
				...state,
				submissionsByIdea: [],
				fetching: true,
				errorMessage: null
			};
		case SUBMISSIONS_IDEA_SUCCESS:
			return {
				...state,
				submissionsByIdea: action.payload.data,
				fetching: false,
				errorMessage: null
			};
		case SUBMISSIONS_IDEA_ERROR:
			return {
				...state,
				submissionsByIdea: [],
				fetching: false,
				errorMessage: action.payload
			};
		case CREATE_SUBMISSION_REQUEST:
			return {
				...state,
				fetching: true,
				errorMessage: null,
				createdSubmission: null
			};
		case CREATE_SUBMISSION_SUCCESS:
			return {
				...state,
				fetching: false,
				errorMessage: null,
				createdSubmission: action.payload
			};
		case CREATE_SUBMISSION_ERROR:
			return {
				...state,
				fetching: false,
				errorMessage: action.payload,
				createdSubmission: null
			};
		case SUBMISSIONS_TAG_REQUEST:
			return {
				...state,
				fetching: true,
				errorMessage: null,
				submissionsByTag: []
			};
		case SUBMISSIONS_TAG_SUCCESS:
			return {
				...state,
				fetching: false,
				errorMessage: null,
				submissionsByTag: action.payload.data
			};
		case SUBMISSIONS_TAG_ERROR:
			return {
				...state,
				fetching: false,
				errorMessage: action.payload.data
			};
		default:
			return state;
	}
}