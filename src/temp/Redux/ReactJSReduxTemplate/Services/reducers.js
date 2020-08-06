import { combineReducers } from 'redux';
import mainReducer from './main/reducer';
 
// K?t h?p các reducer
export default combineReducers({
  main: mainReducer,
});