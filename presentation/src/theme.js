import preloader from '../../src/utils/preloader';
import createTheme from '../../src/themes/default';

const _images = {
	title: require('../assets/title.jpg'),
	acmeshop: require('../assets/mockup_easm5.png'),
	tree: require('../assets/compontent_tree.png')
};

preloader(_images);

require('normalize.css');
require('../../src/themes/default/index.css');

export const theme = createTheme({
	primary: 'rgba(255,255,255,0.8)'
});

export const colors = {
	largeText: 'rgba(255,255,255,0.8)'
};


export const images = _images;
