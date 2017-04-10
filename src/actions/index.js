import axios from 'axios';

export const FETCH_CAMPERS = 'FETCH_CAMPERS';
export const SORT_CAMPERS = 'SORT_CAMPERS';

export function fetchCampers() {
	const URL = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
	const request = axios.get(URL);
	return {
		type: FETCH_CAMPERS,
		payload: request
	}
}

export function sortCampers(which) {
	console.log(which);
	return { 
		type: SORT_CAMPERS,
		which: which
	};
}