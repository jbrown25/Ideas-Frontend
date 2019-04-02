import React from 'react';
import styled, {keyframes} from 'styled-components';
import {Transition} from 'react-transition-group';

const SpinnerWrapperFull = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(255, 255, 255, 0.75);
	z-index: 201;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const SpinnerWrapperPartial = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(255, 255, 255, 0.75);
	z-index: 201;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const rotate = keyframes`
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
`;

const AnimatedSpinner = styled.div`
	display: block;
	position: relative;
	width: 100px;
	height: 100px;
	background-color: red;
	animation: ${rotate} 1s linear infinite;
`;

export const SpinnerPartial = props => {
	const defaultStyle = {
	  transition: `opacity ${props.timeout}ms ease-in-out`,
	  opacity: 0
	};

	const transitionStyles = {
	  entering: { opacity: 0 },
	  entered:  { opacity: 1 },
	};

	return (
		<Transition {...props} unmountOnExit>
			{state => (
				<SpinnerWrapperPartial style={{
			        ...defaultStyle,
			        ...transitionStyles[state]
			    }}>
			      <AnimatedSpinner />
			    </SpinnerWrapperPartial>
			)}
		</Transition>
	);
};

export const SpinnerFull = props => {
	const defaultStyle = {
	  transition: `opacity ${props.timeout}ms ease-in-out`,
	  opacity: 0
	};

	const transitionStyles = {
	  entering: { opacity: 0 },
	  entered:  { opacity: 1 },
	};

	return (
		<Transition {...props} unmountOnExit>
			{state => (
				<SpinnerWrapperFull style={{
			        ...defaultStyle,
			        ...transitionStyles[state]
			    }}>
			      <AnimatedSpinner />
			    </SpinnerWrapperFull>
			)}
		</Transition>
	);
};