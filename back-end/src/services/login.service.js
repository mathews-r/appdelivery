const { User } =  require('../database/models');
const md5 = require('md5')

const findUser = async (email) => {
  return await User.findOne({ where: { email } });
}

const validateLogin = async (user, password) => {
  if (!user || user.password != md5(password)) {
    const throwError = { status: 404, message: 'Invalid email or password' };
    throw throwError;
  }
};

const login = async (email, password) => {
  const user = await findUser(email);
  await validateLogin(user, password)
  return { status: 200, message: 'Successful' };
}

module.exports = { validateLogin, login };
