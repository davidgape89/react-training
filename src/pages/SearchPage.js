import React from 'react';
import movies from '../mocks/movie';
import SearchHeader from '../components/SearchHeader';
import ResultHeader from '../components/ResultHeader';
import MovieList from '../components/MovieList';
import Footer from '../components/Footer';

export default class SearchPage extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      sortBy: 'release_date'
    }
  }

  onSortChange = (sortBy) => {
    this.setState({sortBy: sortBy});
  }

  render() {
    // Uncomment this line to test ErrorBoundary component
    // throw new Error('Something went wrong');
    return (
      <div className="search-page">
        <SearchHeader />
        <ResultHeader resultNumber={movies.length}
                      sortBy={this.state.sortBy}
                      onChange={this.onSortChange} />
        <MovieList movies={movies} 
                   onPageChange={this.props.onPageChange}/>
        <Footer />
      </div>
    )
  }
}
