import {
	SUBMISSIONS_IDEA_REQUEST,
	SUBMISSIONS_TAG_REQUEST,
	CREATE_SUBMISSION_REQUEST
} from './types';

export const getSubmissionsByIdeaAction = (id, token) => {
	return {
		type: SUBMISSIONS_IDEA_REQUEST,
		payload: {
			id,
			token
		}
	};
};

export const getSubmissionsByTagAction = (tag, token) => {
	return {
		type: SUBMISSIONS_TAG_REQUEST,
		payload: {
			tag,
			token
		}
	};
};

export const createSubmissionAction = (id, token, submission) => {
	return {
		type: CREATE_SUBMISSION_REQUEST,
		payload: {
			id,
			token,
			submission
		}
	};
};