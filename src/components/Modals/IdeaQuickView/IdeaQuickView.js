import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Button from '../../UI/Button';

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

class IdeaQuickView extends Component {

	componentDidMount(){
		document.querySelector('body').style.overflow = 'hidden';
	}

	componentWillUnmount(){
		document.querySelector('body').style.overflow = 'auto';
	}

	render(){
		if(!this.props.idea){
			return <div>no idea yet</div>;
		}

		const {
			title,
			short_description,
			rating,
			difficulty,
			slug
		} = this.props.idea;

		return (
			<ModalBackground onClick={this.props.onCloseModal}>
				<ModalBody onClick={e => e.stopPropagation()}>
					<h1>{title}</h1>
					<p>{short_description}</p>
					<p>Rating: {rating}</p>
					<p>{difficulty}</p>
					<Button onClick={this.props.onClickFullEntry}>
						Full Entry
					</Button>
				</ModalBody>
			</ModalBackground>
		);
	}
}

//probably all required?
IdeaQuickView.propTypes = {
	onCloseModal: PropTypes.func.isRequired
};

export default IdeaQuickView;