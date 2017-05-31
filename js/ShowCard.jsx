// @flow

import React from 'react';
// $FlowFixMe
import styled from 'styled-components';

const Wrapper = styled.div`
	width: 32%;
	float: left;
	border: 2px solid #333;
	border-radius: 4px;
	margin-bottom: 25px;
	padding-right: 10px;
	overflow: hidden;
`;

const Image = styled.img`
	float: left;
	width: 46%;
	margin-right: 10px;
`;

const ShowCard = (props: { poster: string, title: string, year: string, description: string }) => (
	<Wrapper className="show-card">
		<Image alt={`${props.title} Show Poster`} src={`/public/img/posters/${props.poster}`} />
		<div>
			<h3>{props.title}</h3>
			<h4>({props.year})</h4>
			<p>{props.description}</p>
		</div>
	</Wrapper>
);

export default ShowCard;
