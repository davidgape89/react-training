import React from "react";

/**
 * Class component, has an internal state and will rerender whenever
 * the state or the props change. We can implement the function
 * shouldComponentUpdate() to prevent it from rerendering.
 */
export class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  increaseCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  }

  /**
   * This function can be used in case we don't want to rerender
   * in some situations when the state or the props change
   */
  // shouldComponentUpdate() {
  //   return false;
  // }

  render() {
    return (
      <div className="class-component">
        <p>
          This is a class component with internal state keeping a counter, we
          can prevent it from rerendering overwriting the shouldComponentUpdate
          function.
        </p>
        <p>
          <strong> The counter is set to {this.state.counter}</strong>
        </p>
        <button onClick={this.increaseCounter}>Increase</button>
      </div>
    );
  }
}
