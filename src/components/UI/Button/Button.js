import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {getColor, getDarkColor} from '../../../utils/colors';

const ButtonElement = styled.button`
	display: ${props => props.btnBlock ? 'block' : 'inline-block'};
	padding: ${props => props.btnLarge ? '8px 24px' : '6px 18px'};
	border: 2px solid ${props => getColor(props.color)}
	border-radius: 4px;
	color: ${props => props.btnPrimary ? '#ffffff' : getColor(props.color)};
	background-color: ${props => props.btnPrimary ? getColor(props.color) : 'transparent'};
	cursor: pointer;
	transition: background-color 0.25s ease, border-color 0.25s ease;

	:hover {
		background-color: ${props => getDarkColor(getColor(props.color))};
		border-color: ${props => getDarkColor(getColor(props.color))};
		color: #ffffff;
	}
`;

ButtonElement.propTypes = {
	btnBlock: PropTypes.bool,
	btnLarge: PropTypes.bool,
	color: PropTypes.string,
	btnPrimary: PropTypes.bool
};

export default props => <ButtonElement {...props} />;