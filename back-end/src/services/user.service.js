const md5 = require('md5');
const { User } = require('../database/models');
const { generateToken } = require('../utils/tokenGenerate');

const findUserByEmail = (email) => User.findOne({ where: { email } });
const findUserByName = (name) => User.findOne({ where: { name } });

const validateLogin = async (user, password) => {
  if (!user || user.password !== md5(password)) {
    const throwError = { status: 404, message: 'Invalid email or password' };
    throw throwError;
  }
  return true;
};

const login = async (email, password) => {
  const user = await findUserByEmail(email);
  await validateLogin(user, password);
  const token = generateToken(email, user.id, user.role);

  return {
    status: 200,
    message: {
      name: user.name,
      email: user.email,
      role: user.role,
      token,
    },
  };
};

const newUser = async (body) => {
  const role = 'customer';
  const password = md5(body.password);

  const findName = await findUserByName(body.name);
  const findEmail = await findUserByEmail(body.email);

  if (findName || findEmail) {
    const throwError = { status: 409, message: 'User already registred' };
    throw throwError;
  }

  const { dataValues } = await User.create({ ...body, password, role });

  return { name: dataValues.name, email: dataValues.email, password: dataValues.password };
};

const getUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: 'password' } });
  return users;
};

module.exports = { validateLogin, login, newUser, getUsers };
