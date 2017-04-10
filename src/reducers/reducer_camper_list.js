import { FETCH_CAMPERS } from '../actions/index';
import { SORT_CAMPERS } from '../actions/index';

export default function (state = null, action) {
	switch(action.type) {
		case FETCH_CAMPERS:
			return action.payload.data;
			break;
		case SORT_CAMPERS:
			//console.log(state);
			console.log(state[0])
			const which = action.which;
			let newState = state;
			console.log(which);
			newState = newState.sort(function(a, b) {
				if(b[which] > a[which])
					return 1;
				if(b[which] < a[which])
					return -1;
				else
					return 0;
			})
			console.log(newState[0]);
			return newState;
			break;
		default:
			return state;
	}
}