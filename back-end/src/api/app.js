const express = require('express');
const cors = require('cors');
const errorMiddleware = require('../middlewares/errorMiddleware');
const routers = require('../routes/index.router');

const app = express();

app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Authorization, application/json',
  );
  next();
});
app.use(cors());

app.use(express.static('public'));
app.use(express.json());
app.use(routers);
app.use(errorMiddleware);

module.exports = app;
