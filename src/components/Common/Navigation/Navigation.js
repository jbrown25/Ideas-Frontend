import React from 'react';
import {connect} from 'react-redux';

import Navbar from '../../UI/Navbar';
import NavItem from '../../UI/NavItem';

const Navigation = props => (
	<Navbar>
		{props.auth.user ?
			<div>
				<NavItem to='/ideas/create'>
					New Idea
				</NavItem>
				<NavItem to='/logout'>
					Logout
				</NavItem>
			</div>
			:
			<div>
				<NavItem to='/login'>
					Login
				</NavItem>
				<NavItem to='/register'>
					Register
				</NavItem>
			</div>
		}
	</Navbar>
);

const mapStateToProps = state => {
	return {
		auth: state.auth
	};
};

export default connect(mapStateToProps, null)(Navigation);