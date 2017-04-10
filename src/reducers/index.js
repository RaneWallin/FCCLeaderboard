import { combineReducers } from 'redux';
import Campers from './reducer_camper_list';

const rootReducer = combineReducers({
  campers: Campers
});

export default rootReducer;
