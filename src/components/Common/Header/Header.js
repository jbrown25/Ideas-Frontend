import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import Navigation from '../Navigation';

const HeaderContainer = styled.header`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	background-color: #f7f7f7;
	width: 100%;
`;

const Header = () => {
	return (
		<HeaderContainer>
			<Link to='/ideas'><h1>Justin</h1></Link>
			<Navigation />
		</HeaderContainer>
	);
};

export default Header;