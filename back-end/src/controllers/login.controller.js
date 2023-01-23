const loginService = require("../services/login.service");

const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const { status, message } = await loginService.login(email, password);
    return res.status(status).json({ message })
  } catch (error) {
    next(error);
  }
};

module.exports = { login };
