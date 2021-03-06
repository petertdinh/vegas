import axios from 'axios';
import * as TYPES from './types';

export const fetchHotels = () => {
	return (dispatch) => {
		axios.get('http://localhost:8888/api/hotels')
			.then(resp => {
				dispatch({type: TYPES.FETCH_HOTELS, payload: resp.data.list});
			})
			.catch(err => {
				console.error(err);
			})
	}
};

export const fetchCurrentHotel = () => {
	return (dispatch) => {
		axios.get('http://localhost:8888/api/hotels/venetian')
			.then(resp => {
				dispatch({type: TYPES.FETCH_CURRENT_HOTEL, payload: resp.data});
			})
			.catch(err => {
				console.error(err);
			})
	}
};

export const forceLocationTab = () => {
	return (dispatch) => {
		dispatch({type: TYPES.FORCE_LOCATION_TAB});
	}
}

export const onTabChange = (value) => {
	return (dispatch) => {
		dispatch({type: TYPES.ON_TAB_CHANGE, payload: value});
	}
}