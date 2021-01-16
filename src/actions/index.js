import github from '../api/github';
import GhPolyglot from 'gh-polyglot';
import { FETCH_LANGUAGES, FETCH_REPOS, FETCH_PROFILE, SESSION_CLEAR, HANDLE_ERROR } from './types';
require('dotenv').config();

export const sessionClear = () => {
  return {
    type: SESSION_CLEAR
  };
};

export const fetchProfile = (formValues) =>  async (dispatch) => {
  const CLIENT_ID = process.env.CLIENT_ID;
  const CLIENT_SECRET = process.env.client_secret;

  const response = await github.get(`/${formValues}`, {
    params: {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET
    }
  }).catch(error => dispatch({ type: HANDLE_ERROR, payload: error }));

  dispatch({ type: FETCH_PROFILE, payload: response.data });
};

export const fetchRepos = (formValues) =>  async (dispatch) => {
  const CLIENT_ID = process.env.CLIENT_ID;
  const CLIENT_SECRET = process.env.client_secret;

  const response = await github.get(`/${formValues}/repos`, {
    params: {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET
    }
  }).catch(error => dispatch({ type: HANDLE_ERROR, payload: error }));

  dispatch({ type: FETCH_REPOS, payload: response.data });
};

export const fetchLanguages = (formValues) => (dispatch) => {
  const me = new GhPolyglot(`${formValues}`);

  me.userStats((err, stats) => {
    if(err) {
      dispatch({ type: HANDLE_ERROR, payload: err });
    }
    
    dispatch({ type: FETCH_LANGUAGES, payload: stats });
  });
};




