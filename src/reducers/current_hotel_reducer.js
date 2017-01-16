import * as TYPES from '../actions/types';

export default (state = {
	description: '',
	details: [],
	location: '',
	name: '',
	price: 0,
	phoneNumber: '',
}, action) => {
	switch(action.type) {
		case (TYPES.FETCH_CURRENT_HOTEL):
			const { 
				description,
				details, 
				location, 
				name, 
				price, 
				phoneNumber 
			} = action.payload;
			return {...state, description, details, name, price, phoneNumber, location: location.address};
		default:
			return state;
	}
}