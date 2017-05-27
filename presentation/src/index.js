import React from 'react';

import {
  Appear, BlockQuote, Cite, CodePane, ComponentPlayground, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Markdown, MarkdownSlides, Quote, Slide, SlideSet,
  TableBody, TableHeader, TableHeaderItem, TableItem, TableRow, Table, Text
} from '../../src';

import Title from './title';

import { images, theme } from './theme';
import Introduction from "./introduction";
import AcmeShop from "./acmeshop";

require('normalize.css');
require('../../src/themes/default/index.css');

const notes = {
	introduction: ''
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['zoom', 'slide']} theme={theme} transitionDuration={500} progress="bar">
	      <Slide transition={['fade']} bgImage={images.title}>
		      <Title/>
	      </Slide>
        <Slide transition={['slide']}
               bgColor="black"
               notes={notes.introduction}
        >
	        <Heading size={1} fit textColor="primary" textFont="primary">
		        O que é o estado de aplicação?
	        </Heading>

        </Slide>
        <Slide transition={['slide']}
               bgColor="black"
               notes={notes.introduction}
        >
	        <AcmeShop />
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/deck.example')}
            margin="20px auto"
          />
        </Slide>
      </Deck>
    );
  }
}
