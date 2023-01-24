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
    // console.log(user);
    return res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

module.exports = { login, newUser };
