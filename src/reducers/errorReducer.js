import { HANDLE_ERROR } from '../actions/types';

const errorReducer = (state = [], action) => {
  switch(action.type) {
    case HANDLE_ERROR:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default errorReducer;