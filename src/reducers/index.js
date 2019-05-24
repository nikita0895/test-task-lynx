import { combineReducers } from 'redux';
import menu from './menu';
import language from './language';

const rootReducer = combineReducers({
	language,
	menu
});

export default rootReducer;
