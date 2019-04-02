import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const NavItemElement = styled.li`
	display: inline-block;
	padding: 0 15px;
`;

const NavLinkElement = styled(Link)`
	color: yellow;
	padding: 8px 15px;
	border-radius: 4px;
	background-color: orange;
	text-decoration: none;

	:hover {
		text-decoration: none;
	}
`;

export default props => (
	<NavItemElement {...props}>
		<NavLinkElement to={props.to}>
			{props.children}
		</NavLinkElement>
	</NavItemElement>
);