import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
  GET_USER,
  CLEAR_USERS,
  GET_REPOS,
  SEARCH_USERS,
  SET_LOADING,
  SET_ALERT,
  REMOVE_ALERT,
} from '../types';
import githubContext from './githubContext';

const GithubState = props => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(initialState, GithubReducer);

  // Get Users

  // Get User

  // Get Repos

  // Clear Users

  // Set Loading
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
