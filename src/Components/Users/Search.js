import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import GithubContext from '../../Context/github/githubContext';

const Search = ({ setAlert }) => {
  const githubContext = useContext(GithubContext);

  const { searchUsers, users, clearUsers } = githubContext;

  const [text, setText] = useState('');

  const onChangeHandler = event => setText(event.target.value);

  const onSubmitHandler = event => {
    event.preventDefault();
    if (text === '') {
      setAlert('Please Enter Somthing', 'light');
    }
    searchUsers(text);
    setText('');
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          value={text}
          onChange={onChangeHandler}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {users.length > 0 && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default Search;
