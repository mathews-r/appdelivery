const express = require('express');
const errorMiddleware = require('../middlewares/errorMiddleware');
const routers = require('../routes/index.router');

const app = express();

app.use(express.json());
app.use(routers);
app.use(errorMiddleware);
module.exports = app;
