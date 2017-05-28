import React, {Component} from 'react';
import {Code,Heading, List, ListItem, Image, Appear, CodePane} from '../../src';
import Spacer from "./spacer";

import {images, colors} from './theme';

export const Lesson3Title = () => (
	<div>
		<Heading size={1} caps textColor="txtPrimary" textFont="primary">
			Lição 3
		</Heading>
		<Image src={images.lesson3}/>
		<Heading size={4} textColor="txtPrimary" textFont="primary">
			Make your state immutable
		</Heading>
	</div>
);

export const Lesson3Page1 = () => (
	<div>
		<Heading size={4} caps textColor="txtPrimary" textFont="primary">
			Trivial 👍
		</Heading>
		<CodePane
			lang="js"
			source={require('raw-loader!../assets/code/lesson2.1a.code')}
			margin="20px auto"
		/>
		<Appear fid="2">
			<CodePane
				lang="js"
				source={require('raw-loader!../assets/code/lesson2.1b.code')}
				margin="20px auto"
			/>
		</Appear>
	</div>
);
