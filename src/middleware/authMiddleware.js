// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const config = require('../config/db');

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  // if (!token) {
  //   return res.status(401).json({ error: 'Unauthorized' });
  // }

  try {
    const decoded = jwt.verify(token, config.jwtSecret);
    req.userId = decoded.userId;
    console.log(decoded);
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ error: 'Middleware Unauthorized' });
  }
};

module.exports = {verifyToken}
