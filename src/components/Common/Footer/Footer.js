import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
	display: block;
	padding: 20px 0;
	background-color: #555;
	text-align: center;
`;

const FooterText = styled.p`
	margin: 0;
	color: #fff;
`;

const FooterLink = styled.a`
	color: orange;

	:hover {
		color: yellow;
	}
`;

export default () => (
	<FooterContainer>
		<FooterText>
			Designed and developed by <FooterLink href='https://justinbrowndev.com' target='_blank' rel='noopener noreferrer'>Justin Brown</FooterLink>. Copyright {new Date().getFullYear()}
		</FooterText>
	</FooterContainer>
);