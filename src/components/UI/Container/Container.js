import React from 'react';
import styled from 'styled-components';

const ContainerElement = styled.div`
	display: block;
	margin: 0 auto;
	width: 1170px;
	max-width: 100%;
`;

export default (props) => <ContainerElement {...props} />;