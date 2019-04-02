import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Logout from './Pages/Logout';
import IdeaList from './Pages/IdeaList';
import IdeaDetail from './Pages/IdeaDetail';
import CreateIdea from './Pages/CreateIdea';
import SubmissionsByTag from './Pages/SubmissionsByTag';

export default () => (
	<Switch>
		<Route path='/login' component={Login} />
		<Route path='/register' component={Register} />
		<Route path='/logout' component={Logout} />
		<Route path='/ideas/idea/:slug' component={IdeaDetail} />
		<Route path='/ideas/tag/:tag' component={IdeaList} />
		<Route path='/ideas/create' component={CreateIdea} />
		<Route path='/ideas/:sort_by' component={IdeaList} />
		<Route path='/ideas' component={IdeaList} />
		<Route path='/submissions/tag/:tag' component={SubmissionsByTag} />
	</Switch>
);