const md5 = require("md5");


const userMock = {
  id: 3,
  name: 'Cliente Zé Birita',
  email: 'zebirita@email.com',
  password: md5('123456'),
  role: 'customer',
};

const tokenMock = 'token';

const userMockWithToken = {
  id: 3,
  name: 'Cliente Zé Birita',
  email: 'zebirita@email.com',
  password: 'e10adc3949ba59abbe56e057f20f883e',
  role: 'customer',
  token: {}
}

const userMockInput = {
  email: "zebirita@email.com",
  password: '123456',
}

const userMockInputInvalid = {
  email: "zebirita@email.com",
  password: 'xablau123',
}

module.exports = { userMock, userMockInput, tokenMock, userMockWithToken, userMockInputInvalid };
