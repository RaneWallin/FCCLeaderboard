import { FETCH_CAMPERS } from '../actions/index';
import { SORT_CAMPERS } from '../actions/index';

export default function (state = {}, action) {
	let newState = {};

	switch(action.type) {
		case FETCH_CAMPERS:

			newState = {
					data: action.payload.data
				};
		
			return newState;
			break;
		case SORT_CAMPERS:
			
			newState.data = [...state.data];
			newState.which = action.which;

			const which = action.which;
			
			newState.data = newState.data.sort(function(a, b) {
				if(b[which] > a[which])
					return 1;
				if(b[which] < a[which])
					return -1;
				else
					return 0;
			});

			return newState;
			break;
		default:
			return state;
	}
}