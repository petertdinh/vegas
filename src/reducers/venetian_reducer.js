import * as TYPES from '../actions/types';

export default (state = {
	description: '',
	details: [],
	location: '',
	name: '',
	price: 0,
	phone: '',
}, action) => {
	switch(action.type) {
		case (TYPES.FETCH_VENETIAN):
			const { 
				description,
				details, 
				location, 
				name, 
				price, 
				phone 
			} = action.payload;
			return {...state, description, details, name, price, phone, location: location.address};
		default:
			return state;
	}
}