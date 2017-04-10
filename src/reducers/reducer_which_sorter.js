import { SORT_CAMPERS } from '../actions/index';

export default function(state = {}, action) {
	console.log("action is", action);
	newState = [...state];
	switch(action.which) {
		case 'recent':
		case 'alltime':
			return newState.which = action.which;
			break;
		default:
			return state;
	}

	return state;
}