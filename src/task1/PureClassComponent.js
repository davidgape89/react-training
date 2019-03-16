import React from "react";

/**
 * Class pure component, has an internal state and will rerender whenever
 * the state or the props change. As opposed to the regular component,
 * if we try to implement shouldCOmponentUpdate() here we will get an
 * error suggesting to use a regular component. Shallow comparison makes
 * it more optimal than the regular component
 */
export class PureClassComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  increaseCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  /**
   * This function cannot be used here
   */
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextState !== this.state? true: false;
  // }

  render() {
    return (
      <div className="class-pure-component">
        <p>
          This is a class pure component with internal state keeping a counter,
          it will only rerender when the props or the state changes.
        </p>
        <p>
          <strong> The counter is set to {this.state.counter}</strong>
        </p>
        <button onClick={this.increaseCounter}>Increase</button>
      </div>
    );
  }
}
