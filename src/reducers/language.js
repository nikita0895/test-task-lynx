const initState = 'RU';

const language = (state = initState, action) => {
	switch (action.type) {
		case 'SWITCH_LANGUAGE':
			return action.payload;
		default:
			return state;
	}
};

export default language;
