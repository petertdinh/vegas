import { combineReducers } from 'redux';
import Hotels from './hotels_reducer';
import CurrentHotel from './current_hotel_reducer';

const rootReducer = combineReducers({
	hotels: Hotels,
	currentHotel: CurrentHotel
});

export default rootReducer;