import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';

import { startMoviesRequest } from '../actions/movies';
import moviesSelector from '../selectors/movies';
import SearchHeader from '../components/SearchHeader';
import ResultHeader from '../components/ResultHeader';
import MovieList from '../components/MovieList';
import Footer from '../components/Footer';

export class SearchPage extends React.PureComponent {
  componentDidMount() {
    const { router } = this.props;
    const query = router.query.searchQuery;
    const searchBy = router.query.searchBy || 'title';

    this.fetchMovies(query, searchBy);
  }

  fetchMovies(query, searchBy) {
    const { startMoviesRequest } = this.props;

    if (query) {
      startMoviesRequest(query, searchBy);
    }
  }

  render() {
    const { movies } = this.props;
    return (
      <div className="search-page">
        <SearchHeader />
        <React.Fragment>
          <ResultHeader resultNumber={movies.length} />
          <MovieList movies={movies} />
        </React.Fragment>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: moviesSelector(state),
});

const mapDispatchToProps = {
  startMoviesRequest,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchPage));
