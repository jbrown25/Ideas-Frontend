import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import FlexColumn from '../../UI/FlexColumn';
import ButtonLink from '../../UI/ButtonLink';
import Button from '../../UI/Button';

const ContentContainer = styled.div`
	box-shadow: 5px 5px 25px 0px rgba(46, 61, 73, 0.2);
	padding: 15px;
	background-color: #f7f7f7;
`;

const IdeaHeading = styled.h4`
	display: block;
`;

const IdeaImage = styled.img`
	width: 600px;
	max-width: 100%;
	height: auto;
	margin: 0 auto;
`;

const IdeaColumn = props => {
	const {
		title,
		short_description,
		difficulty,
		rating,
		slug
	} = props;

	return (
		<FlexColumn>
			<ContentContainer>
				<IdeaImage src='https://via.placeholder.com/600x400' alt='' />
				<IdeaHeading>{title}</IdeaHeading>
				<p>{short_description}</p>
				<ButtonLink to={`/ideas/idea/${slug}`}>Full Entry</ButtonLink>
				<Button onClick={props.handleClick}>Quick View</Button>
			</ContentContainer>
		</FlexColumn>
	);
};

IdeaColumn.propTypes = {
	title: PropTypes.string,
	short_description: PropTypes.string,
	difficulty: PropTypes.string,
	rating: PropTypes.string
}

export default IdeaColumn;