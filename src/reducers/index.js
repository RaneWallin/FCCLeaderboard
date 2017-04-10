import { combineReducers } from 'redux';
import Campers from './reducer_camper_list';
import ActiveSorter from './reducer_which_sorter';

const rootReducer = combineReducers({
  campers: Campers
  //activeSorter: ActiveSorter
});

export default rootReducer;
