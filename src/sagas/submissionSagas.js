import {takeLatest, put, call} from 'redux-saga/effects';
import axios from 'axios';

import {
	SUBMISSIONS_IDEA_REQUEST,
	SUBMISSIONS_IDEA_SUCCESS,
	SUBMISSIONS_IDEA_ERROR,
	SUBMISSIONS_TAG_REQUEST,
	SUBMISSIONS_TAG_SUCCESS,
	SUBMISSIONS_TAG_ERROR,
	CREATE_SUBMISSION_REQUEST,
	CREATE_SUBMISSION_SUCCESS,
	CREATE_SUBMISSION_ERROR
} from '../actions/Submission/types';

//do the request. id belongs to idea
const getSubmissionByIdea = (id, token) => {
	return axios.get(`http://localhost:8080/submission/${id}`, {
		headers: {
			authorization: token
		}
	});
};

//submission by idea request watcher
export function* requestSubmissionByIdeaWatcher(){
	yield takeLatest(SUBMISSIONS_IDEA_REQUEST, requestSubmissionByIdeaWorker);
}

function* requestSubmissionByIdeaWorker(action){
	const {id, token} = action.payload;
	try {
		const response = yield(call(getSubmissionByIdea, id, token));

		yield put({
			type: SUBMISSIONS_IDEA_SUCCESS,
			payload: response
		});
	}catch(error){
		yield put({
			type: SUBMISSIONS_IDEA_ERROR,
			payload: error
		});
	}
}

const createSubmission = (id, token, submission) => {
	return axios.post(`http://localhost:8080/submission/${id}`, submission, {
		headers: {
			authorization: token
		}
	});
};

export function* createSubmissionWatcher(){
	yield takeLatest(CREATE_SUBMISSION_REQUEST, createSubmissionWorker);
}

function* createSubmissionWorker(action){
	const {id, token, submission} = action.payload;
	try {
		const response = yield(call(createSubmission, id, token, submission));

		yield put({
			type: CREATE_SUBMISSION_SUCCESS,
			payload: response
		});
	}catch(error){
		yield put({
			type: CREATE_SUBMISSION_ERROR,
			payload: error
		});
	}
}

const getSubmissionsByTag = (tag, token) => {
	return axios.get(`http://localhost:8080/submission/tags/${tag}`, {
		headers: {
			authorization: token
		}
	});
};

export function* getSubmissionsByTagWatcher(){
	yield takeLatest(SUBMISSIONS_TAG_REQUEST, getSubmissionsByTagWorker);
}

function* getSubmissionsByTagWorker(action){
	const {tag, token} = action.payload;
	try {
		const response = yield(call(getSubmissionsByTag, tag, token));

		yield put({
			type: SUBMISSIONS_TAG_SUCCESS,
			payload: response
		});
	}catch(error){
		yield put({
			SUBMISSIONS_TAG_ERROR,
			payload: error
		});
	}
}