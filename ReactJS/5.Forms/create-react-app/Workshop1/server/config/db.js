const mongoose = require('mongoose');

const options = { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false };

module.exports = (dbConnection) => mongoose.connect(dbConnection, options);

