import React from 'react';
import styled from 'styled-components';

import {getColor, getDarkColor} from '../../../utils/colors';

const InputElement = styled.input`
	display: block;
	width: 100%;
	padding: 6px 12px;
	border-radius: 4px;
	border-width: 2px;
	border-style: solid;
	border-color: ${props => getColor(props.color)};
	transition: border-color 0.25s ease;
	margin-bottom: 12px;

	:focus {
		outline: transparent;
		border-color: ${props => getDarkColor(getColor(props.color))};
	}
`;

export default (props) => <InputElement {...props} />;