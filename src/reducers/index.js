import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import profileReducer from './profileReducer';
import statsReducer from './statsReducer';
import errorReducer from './errorReducer';
import { SESSION_CLEAR } from '../actions/types';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['profile', 'stats', 'errors']
}

const appReducer = combineReducers({
  form: formReducer,
  profile: profileReducer,
  stats: statsReducer,
  errors: errorReducer
});

const rootReducer = (state, action) => {
  if(action.type === SESSION_CLEAR) {
    const { form } = state;
    state = { form };
  }

  return appReducer(state, action);
}

export default persistReducer(persistConfig ,rootReducer);

