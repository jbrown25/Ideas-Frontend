import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Transition} from 'react-transition-group';
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';

//import {getIdeasAction} from '../../../actions/Idea';
import {getSubmissionsByTagAction} from '../../../actions/Submission';

import FlexContainer from '../../UI/FlexContainer';
import SubmissionColumn from './SubmissionColumn';

class SubmissionsByTag extends Component {
	componentDidMount(){
		const {authenticated} = this.props.auth;
		const {tag} = this.props.match.params;

		//invoke action to get the submissions
		this.props.getSubmissionsByTagAction(tag, authenticated);
	}

	render(){
		console.log(this.props.submission);
		if(!this.props.submission.errorMessage){
			//no error, still fetching. show spinner
			if(this.props.submission.fetching){
				return <div>fetching...</div>;
			}
			//no error, not fetching, but no submissions. Ideally this should never happen
			if(this.props.submission.submissionsByTag.length === 0){
				return <div>no submissions with this tag</div>;
			};

			//show the submissions
			return (
				<div>
					<FlexContainer>
						{
							this.props.submission.submissionsByTag.map((submission, i) => {
								return (
									<SubmissionColumn
										key={i}
										repo_link={submission.repo_link}
										live_link={submission.live_link}
										description={submission.description}
										tags={submission.tag}
										idea_title={submission.idea_title}
										username={submission.username} />
								);
							})
						}
					</FlexContainer>
				</div>
			);
		}

		//there's an error
		return (
			<div>{this.props.submission.errorMessage}</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		auth: state.auth,
		submission: state.submission
	};
};

export default compose(
	connect(mapStateToProps, {getSubmissionsByTagAction}),
	withRouter
)(SubmissionsByTag);