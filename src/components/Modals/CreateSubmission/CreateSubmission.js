import React, {Component} from 'react';
import styled from 'styled-components';
import {Transition} from 'react-transition-group';
import {connect} from 'react-redux';
import {WithContext as ReactTags} from 'react-tag-input';

import '../../../styles/tagsinput.css';
import {createSubmissionAction} from '../../../actions/Submission';
import Button from '../../UI/Button';
import Input from '../../UI/Input';
import Textarea from '../../UI/Textarea';

const ModalBackground = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 200;
	overflow-y: auth;
`;

const ModalBody = styled.div`
	display: block;
	position: relative;
	margin: 50px auto;
	background-color: #fff;
	width: 50%;

	@media (max-width: 800px){
		width: 75%;
	}
`;

const TagsInput = styled(ReactTags)`
	display: block;
	width: 100%;
	padding: 6px 12px;
	border-radius: 4px;
	border-width: 2px;
	border-style: solid;
	border-color: violet;
	transition: border-color 0.25s ease;
	margin-bottom: 12px;
`;

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

class CreateSubmission extends Component {
	state = {
		repo_link: '',
		live_link: '',
		description: '',
		tags: []
	};

	handleSubmit = e => {
		e.preventDefault();
		const {
			repo_link,
			live_link,
			description,
			tags
		} = this.state;
		if(!repo_link || !description){
			console.log('repo link and description required at minimum.');
			return;
		}
		//(id, token, submission)
		const token = this.props.auth.authenticated;
		const {id} = this.props.idea;
		const filteredTags = tags.map(tag => tag.text);
		this.props.createSubmissionAction(id, token, {
			repo_link,
			live_link,
			description,
			tags: filteredTags
		});
		//this.props.createSubmissionAction
	}

	handleRepoLinkChange = e => {
		this.setState({repo_link: e.target.value});
	}

	handleLiveLinkChange = e => {
		this.setState({live_link: e.target.value});
	}

	handleDescriptionChange = e => {
		this.setState({description: e.target.value});
	}

	//tag methods
    handleDeleteTag = i => {
        const { tags } = this.state;
        this.setState({
         tags: tags.filter((tag, index) => index !== i),
        });
    }
 
    handleTagAddition = tag => {
        this.setState(state => ({ tags: [...state.tags, tag] }));
    }
 
    handleDrag = (tag, currPos, newPos) => {
        const tags = [...this.state.tags];
        const newTags = tags.slice();
 
        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);
 
        // re-render
        this.setState({ tags: newTags });
    }

	render(){
		const {
			tags
		} = this.state;

		return (
			<Transition
				in={this.props.in}
				timeout={this.props.timeout || 300}
				unmountOnExit
			>
				{state => (
					<ModalBackground onClick={this.props.onCloseModal}>
						<ModalBody onClick={e => e.stopPropagation()}>
							<form onSubmit={this.handleSubmit}>
								<Input
									type='text'
									placeholder='Repo Link'
									value={this.state.repo_link}
									onChange={this.handleRepoLinkChange}
									autoFocus />
								<Input
									type='text'
									placeholder='Live Link'
									value={this.state.live_link}
									onChange={this.handleLiveLinkChange} />
								<Textarea
									placeholder='Description'
									value={this.state.description}
									onChange={this.handleDescriptionChange} />
				                <ReactTags tags={tags}
				                    handleDelete={this.handleDeleteTag}
				                    handleAddition={this.handleTagAddition}
				                    delimiters={delimiters}
				                    handleDrag={this.handleDrag}
				                    placeholder='Add tags. Press "Enter" or "," to add another.'
				                    style={{borderColor: 'red'}}
				                    allowDragDrop={false}
				                    autofocus={false} />
								<Button type='submit'>Submit</Button>
							</form>
						</ModalBody>
					</ModalBackground>
				)}
			</Transition>
		);
	}
}

const mapStateToProps = state => {
	return {
		auth: state.auth,
		submission: state.submission
	};
};

export default connect(mapStateToProps, {createSubmissionAction})(CreateSubmission);