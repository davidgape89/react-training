const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('/search/:query', (req, res) => {
      console.log('> handled by search handler');
      const actualPage = '/';
      const queryParams = {searchBy: req.params.query};
      app.render(req, res, actualPage, queryParams);
    });

    server.get('*', (req, res) => {
      console.log('> handled by general handler');
      return handle(req, res)
    });

    server.listen(3000, err => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });