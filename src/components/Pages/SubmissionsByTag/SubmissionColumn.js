import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import FlexColumn from '../../UI/FlexColumn';
import ButtonLink from '../../UI/ButtonLink';
import Button from '../../UI/Button';

const ContentContainer = styled.div`
	box-shadow: 5px 5px 25px 0px rgba(46, 61, 73, 0.2);
	padding: 15px;
	background-color: #f7f7f7;
`;

const SubmissionHeading = styled.h4`
	display: block;
`;

const UserHeading = styled.h5`
	display: block;
	color: orange;
`;

const SubmissionImage = styled.img`
	width: 600px;
	max-width: 100%;
	height: auto;
	margin: 0 auto;
`;

const SubmissionColumn = props => {

	const {
		repo_link,
		live_link,
		description,
		tags,
		idea_title,
		username
	} = props;

	const renderTags = tags => {
		if(!tags) return <div></div>;
		return tags.map((tag, i) => {
			return <li key={i}><Link to={`/submissions/tag/${tag}`}>{tag}</Link></li>;
		});
	};

	return (
		<FlexColumn>
			<ContentContainer>
				<SubmissionImage src='https://via.placeholder.com/600x400' alt='' />
				<SubmissionHeading>{idea_title}</SubmissionHeading>
				<UserHeading>by {username}</UserHeading>
				<a href='#'>{repo_link}</a>
				{live_link ? <a href='#'>{live_link}</a> : ''}
				<p>{description}</p>
				{renderTags(tags)}
			</ContentContainer>
		</FlexColumn>
	);
};

export default SubmissionColumn;