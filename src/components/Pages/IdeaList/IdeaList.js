import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {Transition} from 'react-transition-group';
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';

import {getIdeasAction} from '../../../actions/Idea';

import FlexContainer from '../../UI/FlexContainer';
import IdeaColumn from './IdeaColumn';
import IdeaQuickView from '../../Modals/IdeaQuickView';

const PageContainer = styled.div`
	padding: 0 15px;
`;

class IdeaList extends Component {
	state = {
		modalOpen: false,
		modalIdea: null
	};

	componentDidMount(){
		const {authenticated} = this.props.auth;
		console.log(authenticated);
		if(!this.props.idea.ideas.length){
			this.props.getIdeasAction(authenticated);
		}
	}

	handleCloseModal = () => {
		this.setState({modalOpen: false});
	}

	handleOpenModal = idea => {
		this.setState({
			modalOpen: true,
			modalIdea: idea
		});

		this.setState({
			modalIdea: idea
		}, () => {
			this.setState({
				modalOpen: true
			});
		});
	}

	//user navigates to full page for idea, but from the modal link
	handleClickFullEntry = () => {
		this.setState({
			modalOpen: false
		}, () => {
			this.props.history.push(`/ideas/idea/${this.state.modalIdea.slug}`);
		});
	}

	render(){
		if(this.props.idea.ideas.length > 0){
			return (
				<PageContainer>
					<FlexContainer>
						{this.props.idea.ideas.map((idea, i) => {
							return (
								<IdeaColumn
									key={i}
									title={idea.title}
									short_description={idea.short_description}
									slug={idea.slug}
									difficulty={idea.difficulty}
									rating={idea.rating}
									handleClick={() => this.handleOpenModal(idea)} />
							);
						})}
					</FlexContainer>
					<Transition
						timeout={100}
						in={this.state.modalOpen}
						unmountOnExit={true}
					>
					  {state => (
					    <IdeaQuickView
					    	className={`fade fade-${state}`}
							idea={this.state.modalIdea}
							onCloseModal={this.handleCloseModal}
							onClickFullEntry={this.handleClickFullEntry} />
					  )}
					</Transition>
				</PageContainer>
			);
		}
		return (
			<PageContainer>
				<FlexContainer>
					<h1>No Ideas yet.</h1>
				</FlexContainer>
			</PageContainer>
		);
	}
}

const mapStateToProps = state => {
	return {
		auth: state.auth,
		idea: state.idea
	};
};

export default compose(
	connect(mapStateToProps, {getIdeasAction}),
	withRouter
)(IdeaList);