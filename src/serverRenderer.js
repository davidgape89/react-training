import React from 'react';
import {renderToString} from 'react-dom/server';
import Root from './root';

function renderHTML(html) {
  return `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
        <meta charset=utf-8>
        <title>Netflixroulette server side</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script src="/js/main.js"></script>
      </body>
    </html>
  `
}

export default function serverRenderer() {
  return (req,res) => {
    const htmlString = renderToString(<Root />);

    res.send(renderHTML(htmlString));
  }
}