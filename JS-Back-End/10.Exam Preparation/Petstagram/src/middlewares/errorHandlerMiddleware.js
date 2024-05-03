const { getErrorMessage } = require("../utils/errorHelpers");

exports.errorHandler = (err, req, res, next) => {
  res.render("404", { error: getErrorMessage(err) });
};