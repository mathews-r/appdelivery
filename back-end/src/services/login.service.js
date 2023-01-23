const { User } =  require('../database/models');

const validateLogin = async (email, password) => {
  const user = await User.findOne({ where: { email } });

  if (!user || user.password != password) {
    const throwError = { status: 404, message: 'Invalid email or password' };
    throw throwError;
  }

  return null;
};

module.exports = { validateLogin };
