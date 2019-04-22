import React from 'react';
import {connect} from 'react-redux';
import queryString from 'query-string';

import {startMoviesRequest} from '../actions/movies';
import moviesSelector from '../selectors/movies';
import SearchHeader from '../components/SearchHeader';
import ResultHeader from '../components/ResultHeader';
import MovieList from '../components/MovieList';
import Footer from '../components/Footer';

export class SearchPage extends React.PureComponent {

  fetchMovies(query, searchBy) {
    if(query) 
      this.props.startMoviesRequest(query, searchBy);
  }
  
  componentDidMount() {
    const query = this.props.match.params.query;
    const searchBy = queryString.parse(this.props.location.search).searchBy || '';

    this.fetchMovies(query, searchBy);

    this.unlisten = this.props.history.listen((location, action) => {
      const query = location.pathname.match(/search\/([\w ]*)/)[1];
      const searchBy = queryString.parse(location.search).searchBy || '';

      this.fetchMovies(query, searchBy);
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }

  render() {
    const {movies} = this.props;
    // Uncomment this line to test ErrorBoundary component
    // throw new Error('Something went wrong');
    return (
      <div className="search-page">
        <SearchHeader />
        {!!movies.length && (
          <React.Fragment>
            <ResultHeader resultNumber={movies.length} />
            <MovieList movies={movies} 
                  handleMovieSelected={this.props.handleMovieSelected}/>
          </React.Fragment>
        )}
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = ({movies, filters: {sortBy}}) => {
  return {
    movies: moviesSelector(movies, sortBy)
  };
}

const mapDispatchToProps = {
  startMoviesRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
