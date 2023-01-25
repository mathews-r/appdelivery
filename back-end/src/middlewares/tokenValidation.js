const jwt = require('jsonwebtoken');
const fs = require('fs');

const JWT_SECRET = fs.readFileSync('jwt.evaluation.key');

const tokenValidation = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const user = jwt.verify(authorization, JWT_SECRET);
    req.body.user = user;
    return next();
  } catch (error) {
    const e = res.status(401).json({ message: 'Expired or invalid token ' });
    next(e);
  }
};

module.exports = { tokenValidation };
