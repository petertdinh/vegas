import * as TYPES from '../actions/types';

export default (state = {
	description: '',
	details: [],
	location: ''
}, action) => {
	switch(action.type) {
		case (TYPES.FETCH_VENETIAN):
			const { description, details, location } = action.payload;
			return {...state, description, details, location: location.address};
		default:
			return state;
	}
}