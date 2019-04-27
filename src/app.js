import React from "react";
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ReactDOM from "react-dom";
import configureStore from './store/configureStore';
import {ErrorBoundary} from './components/ErrorBoundary';
import SearchPage from './pages/SearchPage';
import DetailsPage from './pages/DetailsPage';
import NotFoundPage from './pages/NotFoundPage';

import 'normalize.css/normalize.css';
import './styles.scss';

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <ErrorBoundary>
        <Router>
          <Provider store = {store}>
            <div className="App">
              <Switch>
                <Route exact={true} path={['/','/search']} component={SearchPage} />
                <Route path="/search/:query" component={SearchPage} />
                <Route path="/film/:id" component={DetailsPage} />
                <Route path="*" component={NotFoundPage} />
              </Switch>
            </div>
          </Provider>
        </Router>
      </ErrorBoundary>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));