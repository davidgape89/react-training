import React from "react";
import ReactDOM from "react-dom";
import {ErrorBoundary} from './components/ErrorBoundary';
import {SearchPage} from './pages/SearchPage';
import {DetailsPage} from './pages/DetailsPage';

import 'normalize.css/normalize.css';
import './styles.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    // For shocasing purposes
    this.state = {
      page: 'details'
    };
  }

  onPageChange = (page) => {
    this.setState({page});
  }

  render() {
    return (
      <div className="App">
        <ErrorBoundary>
          {this.state.page === 'search'? 
            <SearchPage onPageChange={this.onPageChange}/>: 
            <DetailsPage onPageChange={this.onPageChange}/>}
        </ErrorBoundary>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));