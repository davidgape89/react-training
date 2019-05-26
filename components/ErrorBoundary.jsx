import React from 'react';

import './ErrorBoundary.scss';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log('Error catched');
    console.error(error);
    console.log(info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <div className="error-boundary">Something went wrong!</div>
        </div>
      );
    }

    return this.props.children; 
  }
}