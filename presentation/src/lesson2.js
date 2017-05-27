import React, {Component} from 'react';
import {Heading, List, ListItem, Image, Appear, CodePane} from '../../src';
import {images, colors} from './theme';

import "./lesson2.css";

export const Lesson2Title = () => (
	<div>
		<Heading size={1} caps textColor="txtPrimary" textFont="primary">
			Lição 2
		</Heading>
		<Image src={images.lesson2} />
		<Heading size={4} textColor="txtPrimary" textFont="primary">
			Compose your state
		</Heading>
	</div>
);

export const Lesson2Page1 = () => (
	<div>
		<Heading size={4} caps textColor="txtPrimary" textFont="primary">
			Bad 🙅
		</Heading>
		<CodePane
			lang="js"
			source={require('raw-loader!../assets/code/lesson1.1.code')}
			margin="20px auto"
		/>
	</div>
);

export const Lesson2Page2 = () => (
	<div>
		<Heading size={4} caps textColor="txtPrimary" textFont="primary">
			Good 👍
		</Heading>
		<CodePane
			lang="js"
			source={require('raw-loader!../assets/code/lesson1.2.code')}
			margin="20px auto"
		/>
	</div>
);

export const Lesson2Page3 = () => (
	<div>
		<CodePane
			lang="js"
			source={require('raw-loader!../assets/code/lesson1.3.code')}
			margin="20px auto"
		/>
	</div>
);

export const Lesson2Page4 = () => (
	<div>
		<Heading size={4} fit textColor="txtPrimary" textFont="primary">
			⭐ Mantenha mais simples possível, p.e. booleano
		</Heading>
		<div style={{marginBottom:"2em"}} />
		<Appear fid="1">
			<Heading  size={4} fit textColor="txtPrimary" textFont="primary">
				⭐ Extrair como estado só se for necessário (DRY)
			</Heading>
		</Appear>
	</div>
);
