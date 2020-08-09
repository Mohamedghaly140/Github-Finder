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

  // Search Users
  const searchUsers = text => {
    setLoading();
    axios
      .get(
        `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ECRET}`
      )
      .then(response => {
        // console.log(response.data.items);
        dispatch({ type: SEARCH_USERS, payload: response.data.items });
      })
      .catch(err => console.log(err));
  };

  // Get Users

  // Get User

  // Get Repos

  // Clear Users

  // Set Loading
  const setLoading = () => dispatch({ type: setLoading });
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
