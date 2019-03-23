import React from 'react';
import {movies} from '../mocks/movie';
import {MovieDetailsHeader} from '../components/MovieDetailsHeader';
import {GenreHeader} from '../components/GenreHeader';
import {MovieList} from '../components/MovieList';
import {Footer} from '../components/Footer';

export class DetailsPage extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
     
    }
  }

  render() {
    return (
      <div className="details-page">
        <MovieDetailsHeader title={movies[0].title}
                            genres={movies[0].genres}
                            releaseDate={movies[0].release_date}
                            posterUrl={movies[0].poster_path}
                            runtime={movies[0].runtime}
                            voteAverage={movies[0].vote_average}
                            overview={movies[0].overview} 
                            onPageChange={this.props.onPageChange}/>
        <GenreHeader genre={movies[0].genres[0]}/>
        <MovieList movies={movies} />
        <Footer />
      </div>
    )
  }
}