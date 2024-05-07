const jwt = require("jsonwebtoken");

exports.auth = (req, res, next) => {
  const token = req.header("X-Authorization");
  if (token) {
    try {
      const decodedToken = jwt.verify(token, "SECRETSECRET");
      req.user = decodedToken;
      next();
    } catch (err) {
      res.status(401).json({ 
        message: "You are not authorized!",
     });
    }
  } else {
    next();
  }
};
