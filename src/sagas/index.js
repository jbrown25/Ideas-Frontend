import {all} from 'redux-saga/effects';

import {
	signupWatcher,
	signinWatcher,
	checkTokenWatcher
} from './authSagas';

import {
	requestIdeasWatcher,
	requestIdeaBySlugWatcher,
	createIdeaWatcher
} from './ideaSagas';

import {
	requestSubmissionByIdeaWatcher,
	createSubmissionWatcher,
	getSubmissionsByTagWatcher
} from './submissionSagas';

export default function* rootSaga(){
	yield all([
		signupWatcher(),
		signinWatcher(),
		checkTokenWatcher(),
		requestIdeasWatcher(),
		requestIdeaBySlugWatcher(),
		createIdeaWatcher(),
		requestSubmissionByIdeaWatcher(),
		createSubmissionWatcher(),
		getSubmissionsByTagWatcher()
	]);
}