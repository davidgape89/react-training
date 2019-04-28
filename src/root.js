import React from 'react';
//import {Provider} from 'react-redux';
//import {startMovieRequest} from './actions/movie';
import ReactDOM from "react-dom";
//import configureStore from './store/configureStore';
//import {ErrorBoundary} from './components/ErrorBoundary';
//import SearchPage from './pages/SearchPage';
//import DetailsPage from './pages/DetailsPage';
import {hot} from 'react-hot-loader';

//import 'normalize.css/normalize.css';
//import './styles.scss';

//const store = configureStore();

class Root extends React.Component {
  constructor(props) {
    super(props);

    // For shocasing purposes
    this.state = {
      page: 'search'
    };
  }

  // handleMovieSelected = (movieId) => {
  //   store.dispatch(startMovieRequest(movieId)).then(() => {
  //     this.setState({selectedMovieId: movieId, page: 'details'});
  //   });
  // }

  // onPageChange = (page) => {
  //   this.setState({page});
  // }

  render() {
    return (
      <div>
        Rendered!
      </div>
      // <Provider store = {store}>
      //   <div className="App">
      //     <ErrorBoundary>
      //       {this.state.page === 'search' && <SearchPage handleMovieSelected={this.handleMovieSelected}/>}
      //       {this.state.page === 'details' && <DetailsPage onPageChange={this.onPageChange} id={this.state.selectedMovieId}/>}   
      //     </ErrorBoundary>
      //   </div>
      // </Provider>
    );
  }
}

export default hot(module)(Root);