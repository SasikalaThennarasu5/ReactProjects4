import React from 'react';

const SearchBar = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search..."
      onChange={(e) => onSearch(e.target.value)}
      style={{ width: '100%', padding: '8px', margin: '10px 0' }}
    />
  );
};

export default SearchBar;
