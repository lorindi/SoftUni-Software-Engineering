const express = require("express");

// require('./config/expressConfig')(app)
const expressConfig = require("./config/expressConfig");
const handlebarsConfig = require("./config/handlebarsConfig");
const dbConnect = require("./config/dbConfig");
const routes = require("./routes");
const app = express();
const PORT = 5000;

expressConfig(app);
handlebarsConfig(app);

dbConnect()
  .then(() => console.log("DB Connected successfully"))
  .catch((error) => console.log("DB error", error.message));

app.use(routes);
app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
