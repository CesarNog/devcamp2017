import preloader from '../../src/utils/preloader';
import createTheme from '../../src/themes/default';

const _images = {
	title: require('../assets/title.jpg'),
	acmeshop: require('../assets/mockup_easm5.png'),
	tree: require('../assets/compontent_tree.png'),
	treestate: require('../assets/compontent_tree_appstate.png'),
	treestate_inv: require('../assets/compontent_tree_appstate_inv.png'),
	lesson1: require('../assets/lesson1.jpg'),
	lesson2: require('../assets/lesson2.jpg'),
	lesson3: require('../assets/lesson3.png'),
	lesson4: require('../assets/lesson4.png'),
	todolist: require('../assets/todolist.png')
};

preloader(_images);

require('normalize.css');
require('../../src/themes/default/index.css');

export const theme = createTheme({
	txtPrimary: 'rgba(255,255,255,0.8)',
	txtSecondary: 'rgba(53,37,33,0.8)',
	bgPrimary: '#352521',
	bgLesson1: '#41bae9',
	bgLesson2: '#ff8500',
	bgLesson3: '#1D8B00',
	bgLesson4: '#7D000F',
	bgLesson5: '#052456'
});

export const images = _images;
