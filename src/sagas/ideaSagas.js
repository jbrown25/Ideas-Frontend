import {takeLatest, put, call} from 'redux-saga/effects';
import axios from 'axios';

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

//do the request
const requestIdeas = token => {
	return axios.get('http://localhost:8080/idea', {
		headers: {
			authorization: token
		}
	});
};

//ideas request watcher
export function* requestIdeasWatcher(){
	yield takeLatest(IDEAS_REQUEST, requestIdeasWorker);
}

//request ideas
function* requestIdeasWorker(action){
	const token = action.payload;
	try {
		const response = yield(call(requestIdeas, token));

		yield put({
			type: IDEAS_SUCCESS,
			payload: response
		});
		//do callback
		if(action.callback) action.callback();
	}catch(error){
		yield put({
			type: IDEAS_ERROR,
			payload: error
		});
	}
}

const requestIdeaBySlug = (token, slug) => {
	return axios.get(`http://localhost:8080/idea/${slug}`, {
		headers: {
			authorization: token
		}
	});
};

export function* requestIdeaBySlugWatcher(){
	yield takeLatest(IDEA_SLUG_REQUEST, requestIdeaBySlugWorker);
}

function* requestIdeaBySlugWorker(action){
	const {slug, token} = action.payload;

	try {
		const response = yield(call(requestIdeaBySlug, token, slug));

		yield put({
			type: IDEA_SLUG_SUCCESS,
			payload: response
		});
		//console.log(response.data.id);
		action.callback(response.data.id); //send idea id back to component

	}catch(error){
		yield put({
			type: IDEA_SLUG_ERROR,
			payload: error
		});
	}
}

const createIdea = (token, idea) => {
	return axios.post('http://localhost:8080/idea', idea, {
		headers: {
			authorization: token
		}
	});
};

export function* createIdeaWatcher(){
	yield takeLatest(IDEA_CREATE_REQUEST, createIdeaWorker);
}

function* createIdeaWorker(action){
	const {idea, token} = action.payload;

	try{
		const response = yield(call(createIdea, token, idea));

		yield put({
			type: IDEA_CREATE_SUCCESS,
			payload: response
		});
		action.callback();
	}catch(error){
		yield put({
			type: IDEA_CREATE_ERROR,
			payload: error
		});
	}
}