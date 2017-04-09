import axios from 'axios';

export const FETCH_CAMPERS = 'FETCH_CAMPERS';

const URL = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';

export function fetchCampers() {
	const request = axios.get(URL);
	return {
		type: FETCH_CAMPERS,
		payload: request
	}
}