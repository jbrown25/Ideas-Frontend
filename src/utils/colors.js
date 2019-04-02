import Color from 'color';

const DEFAULT_COLOR = 'violet';

export const getColor = color => {
	return color ? color : DEFAULT_COLOR;
};

export const getDarkColor = color => {
	return Color(color).darken(0.2).hex();
};