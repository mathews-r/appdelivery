const md5 = require("md5");

const mockCustomer = [
  {
    name: "Joãozinho",
    email: "joao@dev.com",
    password: "123456",
  },
  {
    name: "Joãozinho",
    email: "joao@dev.com",
    password: "e10adc3949ba59abbe56e057f20f883e",
  },
];

const mockUserAdmin = [{
  name: "Fulana",
  email: "fulana@delivery.com",
  password: "123456",
  role: "admin"
},
{
  name: "Fulana",
  email: "fulana@delivery.com",
  password: md5("123456"),
  role: "admin"
}]

module.exports = { mockCustomer, mockUserAdmin };
