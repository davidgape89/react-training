import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {setSortBy} from '../actions/filters';
import SortByToggle from './SortByToggle';

export const ResultHeader = ({resultNumber, sortBy, handleChange}) => (
  <div className="result-header">
    <div className="result-header__number">
      {resultNumber} {resultNumber !== 1? 'movies': 'movie'} found
    </div>
    <SortByToggle sortBy={sortBy}
                  onChange={handleChange}/>
  </div>
)

ResultHeader.propTypes = {
  sortBy: PropTypes.string,
  resultNumber: PropTypes.number,
  onChange: PropTypes.func
};

const mapStateToProps = ({filters}) => ({
  sortBy: filters.sortBy
});

const mapDispatchToProps = {
  handleChange: setSortBy
};

export default connect(mapStateToProps,mapDispatchToProps)(ResultHeader);