import React from 'react';
import {Link} from 'react-router-dom';

export default () => (
  <div className="not-found-page">
    <h1>Page not found!</h1>
    <Link to="/">
      <button className="button button--red">
        Go to the home page
      </button>
    </Link>
  </div>
);