import React from "react";

const childComponent = React.createElement(
  "p",
  {},
  "Child element created with createElement"
);

const createElementComponent = React.createElement(
  "div",
  { className: "create-element-component" },
  childComponent,
  <p>Another child created with jsx</p>
);

/**
 * This exports a component created with React.createElement
 * with a child that is also created with said function and another
 * child using regular jsx
 */
export const CreateElementComponent = () => createElementComponent;
