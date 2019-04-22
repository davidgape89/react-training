import React from 'react';
import PropTypes from 'prop-types';

const SearchByToggle = ({onChange, value}) => {

  // Assign the color to the button according to whether it is
  // active or not
  const getClassList = (criteria) => {
    const color = value === criteria? 'button--red': 'button--grey';
    return `button button--small ${color}`;
  }

  return (
    <div className="search-by-toggle">
      <span>SEARCH BY:</span>
      <button className={getClassList('title')}
              onClick={() => onChange('title')}>
        TITLE
      </button>
      <button className={getClassList('genres')}
              onClick={() => onChange('genres')}>
        GENRE
      </button>
    </div>
  )
};

SearchByToggle.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default SearchByToggle;