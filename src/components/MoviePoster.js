import React from 'react';
import PropTypes from 'prop-types';

const MoviePoster = ({
  id,
  title, 
  genres,
  releaseDate,
  posterUrl,
  handleMovieSelected
}) => {
  const year = releaseDate.split('-')[0];
  const genre = genres.join(' & ');
  return (
    <div className="movie-poster" 
         onClick={() => handleMovieSelected(id)}>
      <img src={posterUrl} />
      <div>
        <div className="movie-poster__info">
          <div className="title">{title}</div>
          <div className="year">{year}</div>
        </div>
        <div className="genre">{genre}</div>
      </div>
    </div>
  );
}

MoviePoster.propTypes = {
  title: PropTypes.string,
  genres: PropTypes.array,
  releaseDate: PropTypes.string,
  posterUrl: PropTypes.string
};

export default MoviePoster;