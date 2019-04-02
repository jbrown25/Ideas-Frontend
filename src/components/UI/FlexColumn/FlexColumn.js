import React from 'react';
import styled from 'styled-components';

const FlexColumnElement = styled.div`
	flex: 0 0 32.4%;
	max-width: 32.4%;
	margin-bottom: 15px;
	overflow: visible;

	@media (max-width: 767px){
		flex: 0 0 49%;
		max-width: 49%;
	}

	@media (max-width: 550px){
		flex: 0 0 100%;
		max-width: 100%;
	}
`;

export default (props) => <FlexColumnElement {...props} />;