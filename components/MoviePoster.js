import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const MoviePoster = ({
  id,
  title, 
  genres,
  releaseDate,
  posterUrl,
}) => {
  const year = releaseDate.split('-')[0];
  const genre = genres.join(' & ');
  return (
    <Link href={`/film/${id}`}>
      <div className="movie-poster">
        <img src={posterUrl} />
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
  title: PropTypes.string,
  genres: PropTypes.array,
  releaseDate: PropTypes.string,
  posterUrl: PropTypes.string
};

export default MoviePoster;