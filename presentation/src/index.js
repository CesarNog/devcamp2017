import React from 'react';

import {
	Appear, BlockQuote, Cite, CodePane, ComponentPlayground, Deck, Fill, Fit,
	Heading, Image, Layout, Link, ListItem, List, Markdown, MarkdownSlides, Quote, Slide, SlideSet,
	TableBody, TableHeader, TableHeaderItem, TableItem, TableRow, Table, Text
} from '../../src';

import Title from './title';

import { images, theme } from './theme';

import AcmeShop from './acmeshop';
import { Lesson1Title, Lesson1Page1, Lesson1Page2, Lesson1Page3, Lesson1Page4 } from './lesson1';
import { Lesson2Title, Lesson2Page1, Lesson2Page2, Lesson2Page3, Lesson2Page4 } from './lesson2';
import {
	Lesson3Title, Lesson3Page1, Lesson3Page2, Lesson3Page3, Lesson3Page4, Lesson3Page5,
	Lesson3Page6, Lesson3Page7, Lesson3Page6a, Lesson3Page8
} from './lesson3';
import {Lesson4Title} from "./lesson4";

require('normalize.css');
require('../../src/themes/default/index.css');
require('../assets/custom.css');

export default class Presentation extends React.Component {
	render() {
		return (
			<Deck transition={['zoom', 'slide']} theme={theme} transitionDuration={500} progress="bar">
				<Slide transition={['fade']} bgImage={images.title}>
					<Title/>
				</Slide>
				<Slide transition={['slide']} bgColor="bgPrimary">
					<Heading size={1} fit textColor="txtPrimary" textFont="primary">
						O que é o estado de aplicação?
					</Heading>
				</Slide>
				<Slide transition={['fade']} bgColor="bgPrimary">
					<AcmeShop />
				</Slide>
				<Slide transition={['fade']} bgColor="bgPrimary" >
					<Image src={images.treestate} width="100%"/>
					<Appear fid={1}>
						<Heading size={1} fit textColor="txtPrimary" textFont="primary">
							Diretamente acessível por todos os componentes
						</Heading>
					</Appear>
				</Slide>




				<Slide transition={['slide', 'fade']} bgColor="bgLesson1" >
					<Lesson1Title/>
				</Slide>
				<Slide transition={['fade']} bgColor="bgLesson1">
					<Lesson1Page1/>
				</Slide>
				<Slide transition={['fade']} bgColor="bgLesson1">
					<Lesson1Page2/>
				</Slide>
				<Slide transition={['zoom', 'fade']} bgColor="bgLesson1">
					<Lesson1Page3/>
				</Slide>
				<Slide transition={['zoom', 'fade']} bgColor="bgLesson1">
					<Lesson1Page4/>
				</Slide>

				
				
				
				
				<Slide transition={['slide', 'fade']} bgColor="bgLesson2">
					<Lesson2Title/>
				</Slide>

				<Slide transition={['fade']} bgColor="bgLesson2">
					<Lesson2Page1/>
				</Slide>

				<Slide transition={['fade']} bgColor="bgLesson2">
					<Lesson2Page2/>
				</Slide>

				<Slide transition={['fade']} bgColor="bgLesson2">
					<Lesson2Page3/>
				</Slide>

				
				
				
				<Slide transition={['slide', 'fade']} bgColor="bgLesson3">
					<Lesson3Title/>
				</Slide>
				<Slide transition={['zoom', 'fade']} bgColor="bgLesson3">
					<Lesson3Page1/>
				</Slide>
				<Slide transition={['fade']} bgColor="bgLesson3">
					<Lesson3Page2/>
				</Slide>
				<Slide transition={['fade']} bgColor="bgLesson3">
					<Lesson3Page3/>
				</Slide>
				<Slide transition={['fade']} bgColor="bgLesson3">
					<Lesson3Page4/>
				</Slide>
				<Slide transition={['fade']} bgColor="bgLesson3">
					<Lesson3Page5/>
				</Slide>
				<Slide transition={['fade']} bgColor="bgLesson3">
					<Lesson3Page6/>
				</Slide>
				<Slide transition={['fade']} bgColor="bgLesson3">
					<Lesson3Page6a/>
				</Slide>
				<Slide transition={['zoom','fade']} bgColor="bgLesson3">
					<Lesson3Page7/>
				</Slide>
				<Slide transition={['zoom','fade']} bgColor="bgLesson3">
					<Lesson3Page8/>
				</Slide>
				
				<Slide transition={['slide', 'fade']} bgColor="bgLesson4">
					<Lesson4Title/>
				</Slide>
			
			
			</Deck>
		);
	}
}
