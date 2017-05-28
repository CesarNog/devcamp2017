import React, { Component } from 'react';
import { Code, Heading, List, ListItem, Image, Appear, CodePane } from '../../src';
import Spacer from './spacer';
import LessonTitle from './lessonTitle';

import { images, colors } from './theme';

export const Lesson3Title = () => (
	<LessonTitle image={images.lesson3} title="Lição 3" >
		Make your state immutable
	</LessonTitle>
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
