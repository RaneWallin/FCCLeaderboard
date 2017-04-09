import { FETCH_CAMPERS } from '../actions/index';

export default function (state = null, action) {
	switch(action.type) {
		case FETCH_CAMPERS:
			return action.payload.data;
			break;
		default:
			return state;
	}
}