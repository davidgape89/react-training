import React from "react";
import ReactDOM from "react-dom";

import './styles.scss';

const App = () => (
  <div className="App">
    <h1>Hello World</h1>
    <p className="text">
      This is awesome that everything is
      working so flawlessly
    </p>
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);