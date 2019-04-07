import React from 'react';
import {connect} from 'react-redux';
import {startMoviesRequest} from '../actions/movies';
import SearchBar from './SearchBar';
import SearchByToggle from './SearchByToggle';

export class SearchHeader extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      searchBy: 'title'
    }
  }

  onQueryChange = (event) => {
    this.setState({query: event.target.value});
  }

  onKeyPress = (event) => {
    if(event.key === "Enter") {
      this.search();
    }
  }

  changeSearchBy = (criteria) => {
    this.setState({searchBy: criteria});
  }

  search = () => {
    const {query, searchBy} = this.state;
    this.props.handleSearch(query, searchBy);
  }

  render() {
    return (
      <div className="search-header">
        <div className="search-header__title">
          netflixroulette
        </div>
        <div className="search-header__search-bar">
          <label>FIND YOUR MOVIE</label>
          <SearchBar query={this.state.query} 
                      placeholder={'Some movie title or genre'}
                      onChange={this.onQueryChange}
                      onKeyPress={this.onKeyPress} />
        </div>
        <div className="search-header__bottom-bar">
          <SearchByToggle value={this.state.searchBy}
                          onChange={this.changeSearchBy}/>
          <button className="button button--red" 
                  onClick={this.search}>SEARCH</button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  handleSearch: startMoviesRequest
};

export default connect(null, mapDispatchToProps)(SearchHeader);