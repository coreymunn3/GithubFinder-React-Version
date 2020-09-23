import React, { useState, useContext } from 'react';
// state
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  // github state
  const githubContext = useContext(GithubContext);
  const { users, searchUsers, clearUsers } = githubContext;
  // alert state
  const alertContext = useContext(AlertContext);
  const { showAlert } = alertContext;
  // local state
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      showAlert('Please enter something', 'light');
    } else {
      searchUsers(text);
      setText('');
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='search users'
          value={text}
          onChange={onChange}
        ></input>
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        ></input>
      </form>
      {users.length > 0 && (
        <button className='btn btn-light btn-block' onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
