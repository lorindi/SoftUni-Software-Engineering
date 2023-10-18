const userRouter = require('./user.js');

module.exports = (app) => {
  app.use('/api/users', userRouter);
};
