import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({query, placeholder, onChange, onKeyPress}) => (
  <input type="text" value={query} 
         onChange={onChange}
         onKeyPress={onKeyPress} 
         placeholder={placeholder} />
)

SearchBar.propTypes = {
  query: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func
};

export default SearchBar;