import React from 'react';
import { Heading, Text } from '../../src';


const Title = ({ colors }) => (
	<div>
		<Heading size={1} caps lineHeight={1} textColor={colors.primary}>
			Effective Application State Management
		</Heading>
		<Text textSize="1.5em" margin="120px 0px 0px" bold textColor={colors.primary}>Oliver Hager - Dextra 🤘</Text>
	</div>

);


export default Title;


