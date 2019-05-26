import React from 'react';
import Link from 'next/link';
import {withRouter} from 'next/router';

import SearchBar from './SearchBar';
import SearchByToggle from './SearchByToggle';

export class SearchHeader extends React.PureComponent {
  constructor(props) {
    super(props);
    
    this.state = {
      query: props.router.query.searchQuery || '',
      searchBy: props.router.query.searchBy || 'title'
    }
  }

  onQueryChange = (event) => {
    this.setState({query: event.target.value});
  }

  changeSearchBy = (criteria) => {
    this.setState({searchBy: criteria});
  }

  onKeyPress = (event) => {
    if(event.key === "Enter") {
      this.props.router.push(`/search/${this.state.query}?searchBy=${this.state.searchBy}`);
    }
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
          <Link href={`/search/${this.state.query}?searchBy=${this.state.searchBy}`}>
            <button className="button button--red">SEARCH</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(SearchHeader);