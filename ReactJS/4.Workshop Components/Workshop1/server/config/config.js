const { PORT, DB_NAME, DB_CONNECTION } = process.env;

module.exports = {
  port: PORT || 3005,
  dbConnection: `${DB_CONNECTION}/${DB_NAME}`,
};
