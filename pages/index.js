import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'next/router';

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
    const query = this.props.router.query.searchQuery;
    const searchBy = this.props.router.query.searchBy || 'title';

    this.fetchMovies(query, searchBy);
  }

  componentWillUnmount() {
    this.unlisten();
  }

  render() {
    const {movies} = this.props;
    return (
      <div className="search-page">
        <SearchHeader />
          <React.Fragment>
            <ResultHeader resultNumber={movies.length} />
            <MovieList movies={movies}/>
          </React.Fragment>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchPage));
