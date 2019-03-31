import React from 'react';
import PropTypes from 'prop-types';
import SortByToggle from './SortByToggle';

const ResultHeader = ({resultNumber, sortBy, onChange}) => (
  <div className="result-header">
    <div className="result-header__number">
      {resultNumber} {resultNumber !== 1? 'movies': 'movie'} found
    </div>
    <SortByToggle sortBy={sortBy}
                  onChange={onChange}/>
  </div>
)

ResultHeader.propTypes = {
  sortBy: PropTypes.string,
  resultNumber: PropTypes.number,
  onChange: PropTypes.func
};

export default ResultHeader;