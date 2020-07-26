import { UPDATE_MAIN } from './actionTypes';

const initialState = {
  show: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_MAIN:
      return {
        ...state,
        show: action.payload
      };
    default:
      return state;
  }
  return state;
}
