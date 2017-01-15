import * as TYPES from '../actions/types';

export default (state = {
	hotels: []
}, action) => {
	switch(action.type) {
		case (TYPES.FETCH_HOTELS):
			return {...state, hotels: action.payload};
		default:
			return state;
	}
}