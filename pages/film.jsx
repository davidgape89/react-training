import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';
import { startSuggestionsRequest } from '../actions/suggestions';
import { startMovieRequest } from '../actions/movie';
import MovieDetailsHeader from '../components/MovieDetailsHeader';
import GenreHeader from '../components/GenreHeader';
import MovieList from '../components/MovieList';
import Footer from '../components/Footer';

export class DetailsPage extends React.PureComponent {
  componentDidMount() {
    this.fetchMovie(this.props.router.query.id);
  }

  fetchMovie(id) {
    this.props.startMovieRequest(id).then(data => {
      this.props.startSuggestionsRequest(data.genres[0]);
      window.scrollTo(0, 0);
    });
  }

  render() {
    const { movie, onPageChange, suggestions } = this.props;
    return (movie && (
      <div className="details-page">
        <MovieDetailsHeader title={movie.title}
                            genres={movie.genres}
                            releaseDate={movie.release_date}
                            posterUrl={movie.poster_path}
                            runtime={movie.runtime}
                            voteAverage={movie.vote_average}
                            overview={movie.overview} 
                            onPageChange={onPageChange}/>
        <GenreHeader genre={movie.genres[0]}/>
        <MovieList movies={suggestions} />
        <Footer />
      </div>
    ));
  }
}

const mapStateToProps = ({movie, suggestions}) => ({
  movie,
  suggestions,
});

const mapDispatchToProps = {
  startMovieRequest,
  startSuggestionsRequest,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DetailsPage));