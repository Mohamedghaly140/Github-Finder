import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = props => {
  const { showClear, clearUsers, setAlert, searchUsers } = props;
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
      {showClear && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Search;
