import React, { Component } from 'react';

import { images } from './theme';
import { Image, Heading, Text } from '../../src';

import './acmeshop.css';

const imageStyle = {
	imageStyle
};

class AcmeShop extends Component {

	constructor() {
		super();
		this.onClick = this.onClick.bind(this);
		this.state = {
			show: false
		};
	}

	onClick() {
		this.setState({ show: !this.state.show });
	}

	render() {
		return (
			<span className="acmeshop-slide" onClick={this.onClick} >
				<img src={images.acmeshop} className={this.state.show ? "shop show" : "shop"}/>
				<img src={images.tree} className={this.state.show ? "tree show" : "tree"}/>
				}
			</span>
		);
	}
}

export default AcmeShop;
