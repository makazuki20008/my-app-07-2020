import { combineReducers } from 'redux';
import mainReducer from './main/reducer';

// Kết hợp các reducer
export default combineReducers({
  main: mainReducer,
});