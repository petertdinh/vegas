import * as TYPES from '../actions/types';

export default (state = {
	hotels: []
}, action) => {
	switch(action.type) {
		case (TYPES.FETCH_HOTELS):
			const { list } = action.payload;
			return {...state, hotels: list};
		default:
			return state;
	}
}