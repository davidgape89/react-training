import React from 'react';
import PropTypes from 'prop-types';

const MovieDetailsHeader = ({
  title,
  genres,
  releaseDate,
  posterUrl,
  runtime,
  voteAverage,
  overview,
  onPageChange
}) => {
  const genre = genres.join(' & ');
  const year = releaseDate.split('-')[0];
  return (
    <div className="movie-details-header">
      <div className="movie-details-header__header">
        <div>netflixroulette</div>
        <button className="button button--white"
                onClick={() => onPageChange('search')}>
          Search
        </button>
      </div>
      <div className="movie-details-header__details">
        <div className="movie-details-header__image">
          <img src={posterUrl} />
        </div>
        <div className="movie-details-header__info">
          <div className="movie-details-header__first-row">
            <div className="movie-details-header__title">
              {title}
            </div>
            <div className="movie-details-header__vote-average">
              {voteAverage}
            </div>
          </div>
          <div>{genre}</div>
          <div className="movie-details-header__third-row">
            <span>{year}</span>
            <span>{runtime} min</span>
          </div>
          
          <div>{overview}</div>
        </div>
      </div>
    </div>
  );
}

// onPageChange excluded since it will be handled by the router
MovieDetailsHeader.propTypes = {
  title: PropTypes.string,
  genres: PropTypes.array,
  releaseDate: PropTypes.string,
  posterUrl: PropTypes.string,
  runtime: PropTypes.number,
  voteAverage: PropTypes.number,
  overview: PropTypes.string
};

export default MovieDetailsHeader;