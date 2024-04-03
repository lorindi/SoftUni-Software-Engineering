const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");
const app = express();

const { addCat, getCats } = require("./cats");

//Add handlebars to express
// handlebars || hbs
app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");

// app.engine("hbs", hbs.engine({ extname: "hbs" }));
// app.set("view engine", "hbs");

//Add third party middleware
// Is there any data in the request post that has been sent, and if there is,
// it parses it and attaches it to the request body,
//  and then from the slash url we get request.body.name
const bodyParser = express.urlencoded({ extended: false });
app.use(bodyParser);
// app.use(express.json())

// Every time there is a request first check
// if there is no static file with this address in the public folder,
// if there is then return the address and terminate the request
app.use(express.static("public"));

//Add middlewares
app.use((req, res, next) => {
  console.log(`Http Request ${req.method}: ${req.path}`);
  next();
});

app.use((req, res, next) => {
  console.log("Middleware1");
  next();
});

//Route based middleware / Partial route middleware
app.use("/cats", (req, res, next) => {
  console.log("Cats middleware");
  next();
});

//Route specific middleware
const specificMiddleware = (req, res, next) => {
  console.log("Specific middleware only for this route");
  next();
};

app.get("/specific", specificMiddleware, (req, res) => {
  res.send("Some specific route with middleware");
});

//Express Router  / Actions
app.get("/", (req, res) => {
  // res.status(200).send(`Hello from Express!`);
  // res.render('home', {layout: false})
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about");
});

//Don't do this at home!
// app.get("/css/style.css", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "public/css/style.css"));
// });

//Web Action:(req, res) => {
//   res.send("This page contains cats :)");
// });

// http method + path + handler = Ednpoint

// app.get("/cats", (req, res) => {
//   res.send(`
//   <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <link rel="stylesheet" href="/css/style.css">
//     <title>Document</title>
// </head>
// <body>
//   <form method="post" action="">
//     <div>
//         <label htmlFor="name">Name</label>
//         <input type="text" name="name" id="name"/>
//     </div>
//     <div>
//         <label htmlFor="age">Age</label>
//         <input type="number" id="age" name="age"/>
//     </div>
//     <input type="submit" value="create"/>
//   </form>
// </body>
// </html>
//   `);
// });

app.get("/cats", (req, res) => {
  const cats = getCats();
  const firstCat = cats[0];
  res.render("cats", {cats: cats});

  // res.render("cats", { name: "Simba", age: 20 });
});

app.post("/cats", (req, res) => {
  addCat(req.body.name, Number(req.body.age));
  // console.log(req.body.name);
  // res.status(201).send("Cat has been created!");
  res.redirect('/cats')
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
