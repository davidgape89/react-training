import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import withReduxStore from '../lib/with-redux-store';
import App, { Container } from 'next/app';

import '../styles.scss';

class NetflixRoulette extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <div className="App">
        <Container>
          <Provider store={reduxStore}>
            <Component {...pageProps} />
          </Provider>
        </Container>
      </div>
    );
  }
}

export default withReduxStore(NetflixRoulette);
