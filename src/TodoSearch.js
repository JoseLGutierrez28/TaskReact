import React from 'react';
import './Css/TodoSearch.css';

function TodoSearch({
  searchValue, setSearchValue
}) {

  return (
    <input placeholder="Search Task"
      className='TodoSearch'
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value)
      }} />
  );
}

export {
  TodoSearch
}