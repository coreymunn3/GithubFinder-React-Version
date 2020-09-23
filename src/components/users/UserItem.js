import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, avatar_url, repos_url } }) => {
  return (
    <div className='card text-center'>
      <h3>{login}</h3>
      <img
        src={avatar_url}
        alt='user avatar'
        className='round-img'
        style={imgStyle}
      ></img>
      <div>
        <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>
          More...
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};
const imgStyle = {
  width: '50%',
};

export default UserItem;
