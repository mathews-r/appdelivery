const loginController = require("../services/login.service");

const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    await loginController.validateLogin(email, password);
  } catch (error) {
    next(error);
  }
};

module.exports = { login };
