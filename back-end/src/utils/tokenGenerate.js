const jwt = require('jsonwebtoken');
const fs = require('fs');

const JWT_SECRET = fs.readFileSync('jwt.evaluation.key');

const generateToken = (data, id, role) => {
  const token = jwt.sign({ data, id, role }, JWT_SECRET, {
    expiresIn: '1d',
    algorithm: 'HS256',
  });
  return token;
};

module.exports = { generateToken };
