const User = require("../models/User");
exports.register = (userData) => User.create(userData);
 