const userService = require('../services/user.service');

const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const { status, message } = await userService.login(email, password);
    return res.status(status).json(message);
  } catch (error) {
    next(error);
  }
};

const newUser = async (req, res, next) => {
  try {
    const user = await userService.newUser(req.body);
    return res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

const getUsers = async (req, res, _next) => {
  const users = await userService.getUsers();
  return res.status(200).json(users);
};

module.exports = { login, newUser, getUsers };
