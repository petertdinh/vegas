import axios from 'axios';
import * as TYPES from './types';

export const fetchHotels = () => {
	return (dispatch) => {
		axios.get('localhost:8888/api/hotels')
			.then((resp) => {
				dispatch({type: TYPES.FETCH_HOTELS, payload: resp.list});
			})
			.catch((err) => {
				console.error(err);
			})
	}
}

export const fetchVenetian = () => {
	return (dispatch) => {
		axios.get('localhost:8888/api/hotels/venetian')
			.then((resp) => {
				dispatch({type: TYPES.FETCH_VENETIAN, payload: resp});
			})
			.catch((err) => {
				console.error(err);
			})
	}
}