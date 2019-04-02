import React, {Component} from 'react';
import styled from 'styled-components';
import {createIdeaAction, getIdeasAction} from '../../../actions/Idea';
import {connect} from 'react-redux';
import {bindActionCreators, compose} from 'redux';
import {withRouter} from 'react-router-dom';

import Input from '../../UI/Input';
import Textarea from '../../UI/Textarea';
import Select from '../../UI/Select';
import Button from '../../UI/Button';
import Container from '../../UI/Container';

class CreateIdea extends Component {

	state = {
		title: '',
		short_description: '',
		description: '',
		difficulty: 'easy'
	}

	handleSubmit = e => {
		e.preventDefault();
		const {
			title,
			short_description,
			description,
			difficulty
		} = this.state;
		if(!short_description || !description || !title){
			console.log('both descriptions and title');
			return;
		}
		const token = this.props.auth.authenticated;
		this.props.createIdeaAction({
			title,
			short_description,
			description,
			difficulty
		}, token, () => {
			console.log('idea created.');
			this.props.getIdeasAction(token, () => {
				const {slug} = this.props.idea.createdIdea;
				this.props.history.push(`/ideas/idea/${slug}`);
			});
		});
	}

	handleTitleChange = e => {
		this.setState({title: e.target.value});
	}

	handleShortDescriptionChange = e => {
		this.setState({short_description: e.target.value});
	}

	handleDescriptionChange = e => {
		this.setState({description: e.target.value});
	}

	handleDifficultyChange = e => {
		this.setState({difficulty: e.target.value});
	}

	render(){
		return (
			<div>
				<Container>
					<h1>Create Idea</h1>
					<form onSubmit={this.handleSubmit}>
						<Input
							type='text'
							placeholder='Name of idea'
							value={this.state.title}
							onChange={this.handleTitleChange} />
						<Textarea
							placeholder='Brief description of the idea'
							value={this.state.short_description}
							onChange={this.handleShortDescriptionChange}
							height={100} />
						<Textarea
							placeholder='Full description of the idea'
							value={this.state.description}
							onChange={this.handleDescriptionChange}
							height={200} />
						<label>Difficulty</label>
						<Select
							value={this.state.difficulty}
							onChange={this.handleDifficultyChange}
						>
							<option value='easy'>Easy</option>
							<option value='medium'>Medium</option>
							<option value='hard'>Hard</option>
						</Select>
						<Button type='submit'>Submit</Button>
					</form>
				</Container>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		auth: state.auth,
		idea: state.idea
	};
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators({createIdeaAction, getIdeasAction}, dispatch);
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withRouter
)(CreateIdea)