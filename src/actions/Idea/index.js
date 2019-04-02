import {
	IDEAS_REQUEST,
	IDEA_REQUEST,
	IDEA_SLUG_REQUEST,
	IDEA_UPDATE_REQUEST,
	IDEA_CREATE_REQUEST
} from './types';

export const getIdeasAction = (token, callback) => {
	return {
		type: IDEAS_REQUEST,
		payload: token,
		callback
	};
};

export const getIdeaAction = (id, token) => {
	return {
		type: IDEA_REQUEST,
		payload: {
			id,
			token
		}
	};
};

export const getIdeaBySlugAction = (slug, token, callback) => {
	return {
		type: IDEA_SLUG_REQUEST,
		payload: {
			slug,
			token
		},
		callback
	};
};

export const createIdeaAction = (idea, token, callback) => {
	return {
		type: IDEA_CREATE_REQUEST,
		payload: {
			idea,
			token
		},
		callback
	};
};