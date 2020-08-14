import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
  GET_USERS,
  GET_USER,
  CLEAR_USERS,
  GET_REPOS,
  SEARCH_USERS,
  SET_LOADING,
} from '../types';

const GithubState = props => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Get Users
  const getUsers = () => {
    setLoading();
    axios
      .get(
        `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ECRET}`
      )
      .then(response => {
        dispatch({ type: GET_USERS, payload: response.data });
      })
      .catch(err => console.log(err));
  };

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

  // Get User
  const getUser = username => {
    setLoading(true);
    axios
      .get(
        `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ECRET}`
      )
      .then(response => {
        // console.log(response.data);
        dispatch({ type: GET_USER, payload: response.data });
      })
      .catch(err => console.log(err));
  };

  // Get Repos
  const getUserRepos = username => {
    setLoading();
    axios
      .get(
        `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ECRET}`
      )
      .then(response => {
        // console.log(response.data);
        dispatch({ type: GET_REPOS, payload: response.data });
      })
      .catch(err => console.log(err));
  };

  // Clear Users
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        getUsers,
        getUser,
        clearUsers,
        searchUsers,
        getUserRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
