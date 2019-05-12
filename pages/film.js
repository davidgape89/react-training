import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'next/router';
import {startSuggestionsRequest} from '../actions/suggestions';
import {startMovieRequest} from '../actions/movie';
import MovieDetailsHeader from '../components/MovieDetailsHeader';
import GenreHeader from '../components/GenreHeader';
import MovieList from '../components/MovieList';
import Footer from '../components/Footer';

export class DetailsPage extends React.PureComponent {
  fetchMovie(id) {
    this.props.startMovieRequest(id).then(data => {
      this.props.startSuggestionsRequest(data.genres[0]);
      window.scrollTo(0, 0);
    });
  }

  componentDidMount() {
    this.fetchMovie(this.props.router.query.id);
  }

  render() {
    return (this.props.movie && (
      <div className="details-page">
        <MovieDetailsHeader title={this.props.movie.title}
                            genres={this.props.movie.genres}
                            releaseDate={this.props.movie.release_date}
                            posterUrl={this.props.movie.poster_path}
                            runtime={this.props.movie.runtime}
                            voteAverage={this.props.movie.vote_average}
                            overview={this.props.movie.overview} 
                            onPageChange={this.props.onPageChange}/>
        <GenreHeader genre={this.props.movie.genres[0]}/>
        <MovieList movies={this.props.suggestions} />
        <Footer />
      </div>
    ));
  }
}

const mapStateToProps = ({movie, suggestions}) => ({
  movie,
  suggestions
});

const mapDispatchToProps = {
  startMovieRequest,
  startSuggestionsRequest
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DetailsPage));