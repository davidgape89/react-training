import React from 'react';
import PropTypes from 'prop-types';

import './SearchByToggle.scss';

const SearchByToggle = (props) => {

  // Assign the color to the button according to whether it is
  // active or not
  const getClassList = (criteria) => {
    const color = props.value === criteria? 'button--red': 'button--grey';
    return `button button--small ${color}`;
  }

  return (
    <div className="search-by-toggle">
      <span>SEARCH BY:</span>
      <button className={getClassList('title')}
              onClick={() => props.onChange('title')}>
        TITLE
      </button>
      <button className={getClassList('genre')}
              onClick={() => props.onChange('genre')}>
        GENRE
      </button>
    </div>
  )
};

SearchByToggle.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
};

export {SearchByToggle};