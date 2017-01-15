import { combineReducers } from 'redux';
import Hotels from './hotels_reducer';
import Venetian from './venetian_reducer';

const rootReducer = combineReducers({
	hotels: Hotels,
	venetian: Venetian
});

export default rootReducer;