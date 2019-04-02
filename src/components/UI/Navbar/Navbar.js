import React from 'react';
import styled from 'styled-components';

const NavbarElement = styled.nav`
	display: inline-block;
	padding: 8px 0;
	background-color: red;
`;

const NavbarList = styled.ul`
	display: block;
	margin: 0;
	padding: 0;
`;

export default (props) => (
	<NavbarElement {...props}>
		<NavbarList>
			{props.children}
		</NavbarList>
	</NavbarElement>
);