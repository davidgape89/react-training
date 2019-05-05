import 'babel-polyfill';
import App, {Container} from 'next/app';
import React from 'react';
import withReduxStore from '../lib/with-redux-store';
import {Provider} from 'react-redux';

import '../styles.css';

class NetflixRoulette extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Container>
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withReduxStore(NetflixRoulette);