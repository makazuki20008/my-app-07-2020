import { combineReducers } from 'redux';
import cartReducer from './cart/reducer';
import filtersReducer from './filters/reducer';
import mainReducer from './main/reducer';
import sortReducer from './sort/reducer';

// Kết hợp các reducer
export default combineReducers({
  cart: cartReducer,
  filters: filtersReducer,
  main: mainReducer,
  sort: sortReducer
});