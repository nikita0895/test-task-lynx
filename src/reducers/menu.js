import translations from '../translations';

const initState = translations['RU'];

const menu = (state = initState, action) => {
	switch (action.type) {
		case 'SWITCH_LANGUAGE':
			return translations[action.payload];
		default:
			return state;
	}
};

export default menu;
