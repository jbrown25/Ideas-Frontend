import React from 'react';
import styled from 'styled-components';
import Color from 'color';
import PropTypes from 'prop-types';

const DEFAULT_COLOR = 'violet';

const getColor = color => {
	return color ? color : DEFAULT_COLOR;
};

const getDarkColor = color => {
	return Color(color).darken(0.2).hex();
};

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