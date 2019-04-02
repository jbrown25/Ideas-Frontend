import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {compose, bindActionCreators} from 'redux';

import Button from '../../UI/Button';
import CreateSubmission from '../../Modals/CreateSubmission';
import IdeaSubmissions from './IdeaSubmissions';
import {getIdeaBySlugAction} from '../../../actions/Idea';
import {getSubmissionsByIdeaAction} from '../../../actions/Submission';

class IdeaDetail extends Component {

	state={modalOpen: false}
	
	componentDidMount(){
		const {slug} = this.props.match.params;
		const {authenticated} = this.props.auth;
		this.props.getIdeaBySlugAction(slug, authenticated, (id) => {
			this.props.getSubmissionsByIdeaAction(id, authenticated);
		});
	}

	handleModalOpenClick = () => {
		this.setState({modalOpen: true});
	}

	handleModalClose = () => {
		this.setState({modalOpen: false});
	}

	render(){
		if(!this.props.idea.idea){
			return (
				<div>
					<h3>Fetching data...</h3>
				</div>
			);
		}

		const {
			title,
			short_description,
			description,
			difficulty,
			rating,
			slug
		} = this.props.idea.idea;

		const {user} = this.props.auth;

		return (
			<div>
				<h2>{title}</h2>
				<p>{description}</p>
				<p>{difficulty}</p>
				<p>{rating}</p>
				<p>{slug}</p>
				<p>{JSON.stringify(this.props.idea.idea)}</p>
				<IdeaSubmissions submissions={this.props.submission.submissionsByIdea} />
				{user ? <Button onClick={this.handleModalOpenClick}>Submit your attempt</Button> : ''}
				<CreateSubmission
					onCloseModal={this.handleModalClose}
					in={this.state.modalOpen}
					timeout={100}
					idea={this.props.idea.idea} />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		auth: state.auth,
		idea: state.idea,
		submission: state.submission
	};
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators({getIdeaBySlugAction, getSubmissionsByIdeaAction}, dispatch);
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withRouter
)(IdeaDetail);