import {combineReducers} from 'redux';
import AuthenticationReducer from './reducerAuthentication';
import IdeaReducer from './reducerIdea';
import SubmissionReducer from './reducerSubmission';

const rootReducer = combineReducers({
	auth: AuthenticationReducer,
	idea: IdeaReducer,
	submission: SubmissionReducer
});

export default rootReducer;