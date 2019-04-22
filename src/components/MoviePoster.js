import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const MoviePoster = ({
  id,
  title, 
  genres,
  release_date,
  poster_path,
}) => {
  const year = release_date.split('-')[0];
  const genre = genres.join(' & ');
  return (
    <Link to={`/film/${id}`}>
      <div className="movie-poster">
        <img src={poster_path} />
        <div>
          <div className="movie-poster__info">
            <div className="title">{title}</div>
            <div className="year">{year}</div>
          </div>
          <div className="genre">{genre}</div>
        </div>
      </div>
    </Link>
  );
}

MoviePoster.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  genres: PropTypes.array,
  release_date: PropTypes.string,
  poster_path: PropTypes.string
};

export default MoviePoster;