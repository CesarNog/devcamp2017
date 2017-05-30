import React, {Component} from 'react';
import {Code, Heading, List, ListItem, Image, Appear, CodePane} from '../../src';
import Spacer from './spacer';
import LessonTitle from './lessonTitle';
import {CodeSlide} from 'spectacle-code-slide';

import {images, colors} from './theme';

export const Lesson4Title = () => (
	<LessonTitle image={images.lesson4} title="Lição 4">
		<div>Flatten the state</div>
		<small>Keep your state simple 2</small>
	</LessonTitle>
);

export const Lesson4Page1 = () => (
	<div>
		<CodePane
			lang="js"
			source={require('raw-loader!../assets/code/lesson3.2.code')}
			margin="20px auto"
		/>
	</div>
);

