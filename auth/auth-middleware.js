const jwt = require("jsonwebtoken");
const secrets = require("../config/secrets");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
    if (err) {
      res.status(401).json({ message: "Invalid Credentials. Please Log In" });
    } else {
      req.decodedToken = decodedToken;
      next();
    }
  });
};
