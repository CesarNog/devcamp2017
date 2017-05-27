import React from 'react';

import {
	Appear, BlockQuote, Cite, CodePane, ComponentPlayground, Deck, Fill, Fit,
	Heading, Image, Layout, Link, ListItem, List, Markdown, MarkdownSlides, Quote, Slide, SlideSet,
	TableBody, TableHeader, TableHeaderItem, TableItem, TableRow, Table, Text
} from '../../src';

import Title from './title';

import {images, theme} from './theme';
import Introduction from "./introduction";
import AcmeShop from "./acmeshop";
import {Lesson1Title, Lesson1Page1, Lesson1Page2, Lesson1Page3, Lesson1Page4} from "./lesson1";
import {Lesson2Title, Lesson2Page1, Lesson2Page2, Lesson2Page3, Lesson2Page4} from "./lesson2";

require('normalize.css');
require('../../src/themes/default/index.css');
require('../assets/custom.css');

const notes = {
	introduction: '',
	acmeshop: 'Click image to show component tree',
	treestate: '',
	lesson1: [
		'',
		'',
		'Boolean is most simple state',
		'Extract as state, if needed more than once - DRY principle',
		'Resume'
	],
	lesson2: [
		'',
		'',
		'Boolean is most simple state',
		'Extract as state, if needed more than once - DRY principle',
		'Resume'
	],
	lesson3: '',
	lesson4: '',
	lesson5: '',
	lesson6: '',
	lesson7: '',
	lesson8: ''
};

export default class Presentation extends React.Component {
	render() {
		return (
			<Deck transition={['zoom', 'slide']} theme={theme} transitionDuration={500} progress="bar">
				<Slide transition={['fade']} bgImage={images.title}>
					<Title/>
				</Slide>
				<Slide transition={['slide']}
				       bgColor="bgPrimary"
				       notes={notes.introduction}
				>
					<Heading size={1} fit textColor="txtPrimary" textFont="primary">
						O que é o estado de aplicação?
					</Heading>
				
				</Slide>
				<Slide transition={['fade']}
				       bgColor="bgPrimary"
				       notes={notes.acmeshop}
				>
					<AcmeShop />
				</Slide>
				<Slide transition={['fade']}
				       bgColor="bgPrimary"
				       notes={notes.treestate}
				>
					<Image src={images.treestate} width="100%"/>
					<Appear fid={1}>
						<Heading size={1} fit textColor="txtPrimary" textFont="primary">
							Diretamente acessível por todos os componentes
						</Heading>
					</Appear>
				</Slide>
				<Slide transition={['zoom', 'fade']} bgColor="bgLesson1"
				       notes={notes.lesson1[0]} >
					<Lesson1Title/>
				</Slide>
				<Slide transition={['fade']} bgColor="bgLesson1"
				       notes={notes.lesson1[1]} >
					<Lesson1Page1/>
				</Slide>
				<Slide transition={['fade']} bgColor="bgLesson1"
				       notes={notes.lesson1[2]} >
					<Lesson1Page2/>
				</Slide>
				<Slide transition={['zoom','fade']} bgColor="bgLesson1"
				       notes={notes.lesson1[3]} >
					<Lesson1Page3/>
				</Slide>
				<Slide transition={['zoom','fade']} bgColor="bgLesson1"
				       notes={notes.lesson1[4]} >
					<Lesson1Page4/>
				</Slide>
				
				<Slide transition={['zoom', 'fade']} bgColor="bgLesson2"
				       notes={notes.lesson2[0]} >
					<Lesson2Title/>
				</Slide>
				
				<Slide transition={['fade']} bgColor="bgLesson2"
				       notes={notes.lesson2[1]} >
					<Lesson2Page1/>
				</Slide>
				
			</Deck>
		);
	}
}
