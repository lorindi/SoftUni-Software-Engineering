# Cheat Sheet
1. Initialize project - *npm init --yes and structure: Create a src folder and inside it create index.js
2. Setup dev environment - *npm i nodemon -D  =>   "scripts": {"start": "nodemon src/index.js"},

3. Install and setup express => *npm install express:
    #index.js
    const express = require("express");

    const app = express();

    app.get("/", (req, res) => {
        res.send('First action')
    });
    
    app.listen(5000, console.log(`Server is listening on port 5000...`));

    * add static middleware
    #index.js
    Create folder: public
    const path = require('path')
    app.use(express.static(path.resolve(__dirname, "public")));

    * add body parser
    #index.js
    app.use(express.urlencoded({ extended: false }));

    * add routes
     Create routes.js

     #routes.js
     const router = require("express").Router();
     router.get("/", (req, res) => {
        res.send('First action')
    });
     module.exports = router;

     #index.js
     const routes = require('./routes')
     app.use(routes);

     Delete: app.get("/", (req, res) => {
        res.send('First action')
     });


4. Add static resources in public folder => css,images
    Create a public folder in the src folder, and in it we put all the styling and images


5. Add views folder with ready html's: 
    Create a views folder in the src folder, and in it we put all the templates


6. Add express-handlebars view engine

    * install => *npm i express-handlebars

    * add to express
    #index.js
    const handlebars = require("express-handlebars");

    * config extension
    #index.js
    app.engine(
    "hbs",
    handlebars.engine({
        extname: "hbs",
    })
    );
    app.set("view engine", "hbs");
    
    * config views folder (only for src)
    app.set("views", "src/views");

    * add main layout => Create a folder named layout and inside it main.hbs
    In main.hbs we put a header, {{{body}}} and a footer

    * add partials template folder => Create a folder with partial names in the folder views

    * fix styles and images
        <link rel="stylesheet" href="/css/styles.css" />
        <img width="50px" src="/images/free-30-instagram-stories-icons23_122570.png" alt="img1"/>

    * fix navigation to home:
        <a href="/">
        <a href="/users/logout">
        <a href="/users/login">
        <a href="/users/register">
    

    * render home page
    #routes.js
     const router = require("express").Router();
     router.get("/", (req, res) => {
        res.render('home')
    });
     module.exports = router;

     home.hbs

    * fix static paths


7. Add controllers folder with home controller
    Create a controllers folder in the src folder and in it create a homeController.js

    #homeController.js
    const router = require("express").Router();
    router.get("/", (req, res) => {
        res.render('home')
    });

    module.exports = router;


    #routes.js

    Delete:
     router.get("/", (req, res) => {
        res.render('home')
    });


    #routes.js
    const router = require("express").Router();

    const homeController = require("./controllers/homeController");
    router.use(homeController);

    module.exports = router;

8. Add database

    * install mongoose => *npm i mongoose

    * connect database
    #index.js
    const mongoose = require("mongoose");
    mongoose
    .connect(`mongodb://127.0.0.1:27017/petstagram`)
    .then(() => {
        console.log("DB Connected successfully");
    })
    .catch((err) => console.log(`Db Error`, err));


9. Authentication
    * add user controller
    In controllers folder, create userController.js

    * add controller to routes
    * fix header navigation to login, register and logout
    * render login page
    * render register page

10. Add user model
    * add unique index for username
    * validate repeat password

11. Modify login and register forms

12. Add login and register post actions

13. Add user manager
    * require in user controller
    * add register method
    * add login method
    * validate if user already exists

14. Hash password
    * install bcrypt => *npm i bcrypt
    * hash password

15. Login
    * Find user by username
    * Validate password with hash

16. Generate jwt token
    * install jsonwebtoken => *npm i jsonwebtoken
    * promisify jsonwebtoken (optional)
    * create SECRET => 09ad1d6b-23b0-4399-a112-f2187ac607c5
    * generate token in manager.login

17. Return token in cookie
    * install cookie parser => *npm i cookie-parser
    * config cookie parser
    * set cookie with token

18. Logout

19. Authentication middleware
    * create base middleware
    * use middleware
    * implement auth middleware
    * attach decoded token to request
    * handle invalid token

20. Authorization middleware

21. Dynamic navigation
    * add conditional in main layout
    * add res locals
22. Error handling
    * add 404 page
    * redirect missing route to 404
    * add global error handler (optional)
    * use global error handler after routes (optional)
    * add error message extractor

23. Show error notifications
    * add error container to main layout
    * show error container conditionaly
    * pass error to render
    * add local error handler

24. Automatically login after register