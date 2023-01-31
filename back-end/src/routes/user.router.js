const express = require('express');
const userController = require('../controllers/user.controller');
const { tokenValidation } = require('../middlewares/tokenValidation');

const userRouter = express.Router();

userRouter.delete('/admin/:id', userController.deleteUser);
userRouter.post('/admin', tokenValidation, userController.newAdminUser);
userRouter.post('/', userController.newUser);
userRouter.get('/', userController.getUsers);


module.exports = userRouter;
