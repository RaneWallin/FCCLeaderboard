import { FETCH_CAMPERS } from '../actions/index';
import { SORT_CAMPERS } from '../actions/index';


export default function (state = {}, action) {
	let newState = {};

	switch(action.type) {
		// This only happens once when the app initially
		// loads. Called from componentDidMount
		case FETCH_CAMPERS:

			newState = {
					data: action.payload.data,
					which: 'recent', // initial data is sorted recent by default
					way: 1
				};
		
			return newState;
		
		case SORT_CAMPERS:
			const which = action.which;


			// cloning the whole state object is problematic
			// so just pulling out the parts we need to
			// build the newwState
			newState.data = [...state.data];
			newState.which = which;
			newState.way = state.way;
			
			if(which == state.which) newState.way *= -1;
				else newState.way = 1;
			// Sort the new state based on which
			// If the user has clicked the same sorting
			// tav state.which == which will be true
			// and this will reverse the sort order for
			// that tab
			newState.data = sortMe(newState.data, 
									which, 
									newState.way);

			return newState;
			
		default:
			return state;
	}
}

function sortMe(data, type, way) {


	switch(type) {
		case 'username':
			data = data.sort(function(a, b) {
				if (b[type].toLowerCase() > a[type].toLowerCase())
					return -way;
				if (b[type].toLowerCase() < a[type].toLowerCase())
					return way;
				else
					return 0;
			});
			break;
		case 'alltime':
		case 'recent':
			data = data.sort(function(a, b) {
				if (b[type] > a[type])
					return way;
				if (b[type] < a[type])
					return -way;
				else
					return 0;
			});
	}

	return data;
}