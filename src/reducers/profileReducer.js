import { FETCH_PROFILE } from '../actions/types';

const profileReducer = (state = [], action) => {
  switch(action.type) {
    case FETCH_PROFILE:
      return [...state, action.payload];
    default:
      return state;
  }
}

export default profileReducer;

