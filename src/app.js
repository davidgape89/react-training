import React from "react";
import ReactDOM from "react-dom";
import {SearchHeader} from './components/SearchHeader';

import 'normalize.css/normalize.css';
import './styles.scss';

const App = () => (
  <div className="App">
    <SearchHeader />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));