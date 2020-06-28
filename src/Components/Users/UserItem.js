import React from 'react';
import PropTypes from 'prop-types';

const UserItem = props => {
  const { login, avatar_url, htmt_url } = props.user;

  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt={login}
        className='round-img'
        style={{ width: '60px' }}
      />
      <h3>{login}</h3>
      <div>
        <a href={htmt_url} className='btn btn-dark btn-sm my-1'>
          More
        </a>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
}

export default UserItem;
