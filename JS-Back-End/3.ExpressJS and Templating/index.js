const express = require("express");
const path = require("path");
const app = express();

//Add middlewares
app.use((req, res, next) => {
  console.log('Middleware1');
  next()
})

app.use((req, res, next) => {
  console.log(`Http Request ${req.method}: ${req.path}`);
  next()
});

//Route based middleware / Partial route middleware
app.use('/cats', (req, res, next) => {
  console.log('Cats middleware');
  next()
})

//Express Router  / Actions
app.get("/", (req, res) => {
  res.status(200).send(`Hello from Express!`);
});

//Web Action:(req, res) => {
//   res.send("This page contains cats :)");
// });

// http method + path + handler = Ednpoint

app.get("/cats", (req, res) => {
  res.send("This page contains cats :)");
});

app.post("/cats", (req, res) => {
  res.status(201).send("Cat has been created!");
});

app.get("/cats/:catId", (req, res) => {
  const catId = Number(req.params.catId);
  if (!catId) {
    return res.status(404).send("Cannot find a cat");
  }
  console.log(req.params);
  res.send(`Request with parameter - ${req.params.catId}`);
});

// Download file
app.get("/download", (req, res) => {
  // res.download("./ResumeFrontEndDeveloper.pdf");

  res.attachment("./ResumeFrontEndDeveloper.pdf").end();

  res.sendFile(path.resolve(__dirname, "./ResumeFrontEndDeveloper.pdf"));
});

// Redirect to another page
app.get("/old-route", (req, res) => {
  res.redirect("/cats");
});

// 404 is written at the end
app.get("*", (req, res) => {
  res.status(404).send("Not Found 404");
});
//Express Router / Actions

app.listen(5000, () => console.log("Server is listening on port 5000..."));
