import * as TYPES from '../actions/types';

export default (state = {
	description: '',
	details: [],
	location: '',
	name: '',
	price: 0,
	phoneNumber: '',
	activeTab: 0,
}, action) => {
	switch(action.type) {
		case (TYPES.FETCH_CURRENT_HOTEL):
			const { 
				description,
				details, 
				location, 
				name, 
				price, 
				phoneNumber,
				starRating,
			} = action.payload;
			return {...state, description, details, name, price, phoneNumber, starRating, location: location.address};
		case (TYPES.FORCE_LOCATION_TAB):
			return {...state, activeTab: 2 };
		case (TYPES.ON_TAB_CHANGE):
			return {...state, activeTab: action.payload};
		default:
			return state;
	}
}