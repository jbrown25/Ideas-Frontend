import React, {Component} from 'react';
import {connect} from 'react-redux';

import {signoutAction} from '../../../actions/Authentication';

class Logout extends Component {
	componentDidMount(){
		this.props.signoutAction();
	}

	render(){
		return (
			<div>
				<h1>You are logged out.</h1>
			</div>
		);
	}
}

export default connect(null, {signoutAction})(Logout);