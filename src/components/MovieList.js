import React from 'react';
import MoviePoster from './MoviePoster';

export default ({movies}) => (
  <div className="movie-list">
    {movies.map((movie) => (
        <MoviePoster key={movie.id}
                    {...movie} />
    ))}
  </div>
);