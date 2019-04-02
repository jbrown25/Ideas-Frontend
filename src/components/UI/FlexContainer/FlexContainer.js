import React from 'react';
import styled from 'styled-components';

const ContainerElement = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
	width: 1170px;
	margin: 0 auto;
	max-width: 100%;

	::after {
		content: "";
		flex: 0 0 32.4%;
	}
`;

export default (props) => <ContainerElement {...props} />;