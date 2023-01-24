const express = require('express');
const loginRouter = require('./login.router');
const productRouter = require('./product.router');
const userRouter = require('./user.router');

const routers = express.Router();

routers.use('/login', loginRouter);
routers.use('/customer', userRouter);
routers.use('/products', productRouter);

module.exports = routers;
