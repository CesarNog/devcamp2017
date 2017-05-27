import React from 'react';
import {Heading, Text, Image, Appear} from '../../src';
import {images, colors} from './theme';

const Introduction = () => (
	<div>
		<Heading size={1} fit textColor="primary" textFont="primary">
			O que é o estado de aplicação?
		</Heading>
		<Appear fid="1">
			<Image src={images.acmeshop} height="40%"/>
		</Appear>
	</div>

);




export default Introduction;


