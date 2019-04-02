import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {compose} from 'redux';
import styled from 'styled-components';

import {checkTokenAction} from '../actions/Authentication';
import Routes from './routes';
import Header from './Common/Header';
import Footer from './Common/Footer';
import {SpinnerFull} from './UI/LoadingAnimations';

const PageContainer = styled.main`
	padding: 100px 0;
`;

class App extends Component {

	componentDidMount(){
		if(this.props.auth.authenticated){
			this.props.checkTokenAction(this.props.auth.authenticated, () => {
				 //will want to check location before redirecting.
				//this.props.history.push('/loggedin');
				//for now, no redirect
				const {pathname} = this.props.location;
				if(
					pathname === '/login' ||
					pathname === '/register' ||
					pathname === '/'){
					this.props.history.push('/ideas');
				}
			});
		}
	}

	render(){
		return (
			<div>
				<SpinnerFull in={this.props.auth.fetching} timeout={100} />
				<Header />
				<PageContainer>
					<Routes />
				</PageContainer>
				<Footer />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		auth: state.auth
	};
};

export default compose(
	connect(mapStateToProps, {checkTokenAction}),
	withRouter
)(App);