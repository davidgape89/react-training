import React from 'react';
import {movies} from '../mocks/movie';
import {SearchHeader} from '../components/SearchHeader';
import {ResultHeader} from '../components/ResultHeader';
import {MoviePoster} from '../components/MoviePoster';
import {Footer} from '../components/Footer';

export class SearchPage extends React.PureComponent {

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
        <div className="search-page__movies">
          {movies.map((movie) => (
            <MoviePoster key={movie.id}
                         title={movie.title}
                         genres={movie.genres}
                         posterUrl={movie.poster_path}
                         releaseDate={movie.release_date} />
          ))}
        </div>
        <Footer />
      </div>
    )
  }
}
