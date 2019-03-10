import React from "react";
import ReactDOM from "react-dom";
import { CreateElementComponent } from "./CreateElementComponent";
import { ClassComponent } from "./ClassComponent";
import { PureClassComponent } from "./PureClassComponent";
import { FunctionalComponent } from "./FunctionalComponent";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <CreateElementComponent />
      <ClassComponent />
      <PureClassComponent />
      <FunctionalComponent />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
