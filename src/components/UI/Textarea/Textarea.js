import React from 'react';
import styled from 'styled-components';import Color from 'color';

import {getColor, getDarkColor} from '../../../utils/colors';

const TextareaElement = styled.textarea`
	display: block;
	width: 100%;
	padding: 6px 12px;
	border-radius: 4px;
	border-width: 2px;
	border-style: solid;
	border-color: ${props => getColor(props.color)};
	height: ${props => `${props.height}px` || '200px'};
	transition: border-color 0.25s ease;
	margin-bottom: 12px;

	:focus {
		outline: transparent;
		border-color: ${props => getDarkColor(getColor(props.color))};
	}
`;

export default (props) => <TextareaElement {...props} />