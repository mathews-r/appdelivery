const userService = require('../services/user.service');

const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const { status, token } = await userService.login(email, password);
    return res.status(status).json({ token });
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

module.exports = { login, newUser };
