import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Color from 'color';

const DEFAULT_COLOR = 'violet';

const getColor = color => {
	return color ? color : DEFAULT_COLOR;
};

const getDarkColor = color => {
	return Color(color).darken(0.2).hex();
};

const ButtonLinkElement = styled(Link)`
	display: ${props => props.btnBlock ? 'block' : 'inline-block'};
	padding: ${props => props.btnLarge ? '8px 24px' : '6px 18px'};
	border: 2px solid ${props => getColor(props.color)}
	border-radius: 4px;
	color: ${props => props.btnPrimary ? '#ffffff' : getColor(props.color)};
	background-color: ${props => props.btnPrimary ? getColor(props.color) : 'transparent'};
	cursor: pointer;
	text-decoration: none;
	transition: background-color 0.25s ease, border-color 0.25s ease;

	:hover {
		background-color: ${props => getDarkColor(getColor(props.color))};
		border-color: ${props => getDarkColor(getColor(props.color))};
		color: #ffffff;
		text-decoration: none;
	}
`;

ButtonLinkElement.propTypes = {
	to: PropTypes.string.isRequired,
	btnBlock: PropTypes.bool,
	btnLarge: PropTypes.bool,
	color: PropTypes.string,
	btnPrimary: PropTypes.bool,
};

export default (props) => <ButtonLinkElement {...props} />;