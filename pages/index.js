import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'next/router';
//import queryString from 'query-string';

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
    console.log(this.props);
    const query = this.props.router.query.searchBy;
    const searchBy = this.props.router.query.searchBy || 'title';
    //const searchBy = queryString.parse(this.props.location.search).searchBy || '';

    this.fetchMovies(query, searchBy);

    // this.unlisten = this.props.history.listen((location) => {
    //   if(location.pathname.match(/\/search/)) {
    //     const query = location.pathname.match(/search\/([\w ]*)/)[1];
    //     const searchBy = queryString.parse(location.search).searchBy || '';

    //     this.fetchMovies(query, searchBy);
    //   }
    // });
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
            <MovieList movies={movies}/>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchPage));
