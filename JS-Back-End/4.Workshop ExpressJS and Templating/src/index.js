const express = require("express");

// require('./config/expressConfig')(app)
const expressConfig = require("./config/expressConfig");
const handlebarsConfig = require("./config/handlebarsConfig");
const routes = require('./routes')
const app = express();
const PORT = 5000;

expressConfig(app);
handlebarsConfig(app);
app.use(routes)


app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
