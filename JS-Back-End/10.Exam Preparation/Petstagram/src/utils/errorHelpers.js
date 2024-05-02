const { MongooseError } = require("mongoose");

exports.getErrorMessage = (err) => {
  if (err instanceof MongooseError) {
    return Object.values(err.errors).at(0).message;
  } else if (err instanceof ValidationError) {
    console.log(err);
    return err.message;
  } else {
    return err.message;
  }
};
