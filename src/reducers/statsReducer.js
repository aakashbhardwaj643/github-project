import { FETCH_LANGUAGES, FETCH_REPOS } from '../actions/types';

const statsReducer = (state = [], action) => {
  switch(action.type) {
    case FETCH_LANGUAGES:
      return [...state, action.payload];
    case FETCH_REPOS:
      return [...state, action.payload];
    default:
      return state;
  }
}

export default statsReducer;