import React from 'react';
import MoviePoster from './MoviePoster';

const MovieList = ({movies, onPageChange}) => (
  <div className="movie-list">
    {movies.map((movie) => (
      <MoviePoster key={movie.id}
                  title={movie.title}
                  genres={movie.genres}
                  posterUrl={movie.poster_path}
                  releaseDate={movie.release_date}
                  onPageChange={onPageChange} />
    ))}
  </div>
);

export default MovieList;