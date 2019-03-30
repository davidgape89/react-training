import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = (props) => (
  <input type="text" value={props.query} 
         onChange={props.onChange}
         onKeyPress={props.onKeyPress} 
         placeholder={props.placeholder} />
)

SearchBar.propTypes = {
  query: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func
};

export {SearchBar};