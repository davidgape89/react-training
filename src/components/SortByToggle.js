import React from 'react';
import PropTypes from 'prop-types';

import './SortByToggle.scss';

const SortByToggle = ({sortBy, onChange}) => {
  // Assign the color to the button according to whether it is
  // active or not
  const getClassList = (criteria) => {
    const classes = ['sort-by-toggle__button'];
    if(sortBy === criteria) classes.push('active');
    return classes.join(' ');
  }

  return (
    <div className="sort-by-toggle">
      <div>Sort by</div>
      <div onClick={() => onChange('release_date')}
           className={getClassList('release_date')}>
        release date
      </div>
      <div onClick={() => onChange('rating')}
           className={getClassList('rating')}>
        rating
      </div>
    </div>
  );
}

SortByToggle.propTypes = {
  sortBy: PropTypes.string,
  onChange: PropTypes.func
};

export {SortByToggle};