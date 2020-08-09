import {
  GET_USER,
  CLEAR_USERS,
  GET_REPOS,
  SEARCH_USERS,
  SET_LOADING,
  SET_ALERT,
  REMOVE_ALERT,
} from '../types';

const reducer = (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default reducer;
