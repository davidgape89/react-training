import React from "react";
import ReactDOM from "react-dom";

import './styles.scss';

const App = () => (
  <div className="App">
    <h1>Hello World</h1>
    <p>
      This is awesome that everything is
      working so flawlessly
    </p>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));