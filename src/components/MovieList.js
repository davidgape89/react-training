import React from 'react';
import MoviePoster from './MoviePoster';

export default ({movies, handleMovieSelected}) => (
  <div className="movie-list">
    {movies.map((movie) => (
      <MoviePoster key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  genres={movie.genres}
                  posterUrl={movie.poster_path}
                  releaseDate={movie.release_date}
                  handleMovieSelected={handleMovieSelected} />
    ))}
  </div>
);