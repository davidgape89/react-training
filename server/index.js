const app = require('./app.js');

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Express listening on port ${port}`);
});