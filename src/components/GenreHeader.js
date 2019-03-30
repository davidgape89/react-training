import React from 'react';
import PropTypes from 'prop-types';

import './GenreHeader.scss';

const GenreHeader = ({genre}) => (
  <div className="genre-header">
    <div className="genre-header__genre">
      Films by {genre}
    </div>
  </div>
)

GenreHeader.propTypes = {
  genre: PropTypes.string
};

export {GenreHeader};