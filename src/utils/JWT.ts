import jwt = require('jsonwebtoken');

const TOKEN_SECRET_KEY = process.env.JWT_SECRET || 'blogsAPI';

const generateToken = (id: number, email: string) => {
  const payload = {
    id,
    email,
  };

  const token = jwt.sign(payload, TOKEN_SECRET_KEY);

  return token;
};

module.exports = generateToken;