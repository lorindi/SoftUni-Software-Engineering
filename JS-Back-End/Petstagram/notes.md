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
    #userController.js
        const router = require("express").Router();
        

    * add controller to routes
    Create a user folder, in the views folder and put login, register in it

    #routes.js
        const userController = require("./controllers/userController");
        router.use("/users", userController);

    

    * fix header navigation to login, register and logout
    #main.hbs
        <a href="/users/logout">
        <a href="/users/login">
        <a href="/users/register">

    * render login page
    #userController.js

    router.get("/login", (req, res) => {
            res.render("users/login");
            });

    * render register page

    #userController.js
    router.get("/register", (req, res) => {
    res.render("users/register");
});

10. Add user model
    Create a models folder in the src folder and in it create a User.js
    #User.js

    const mongoose = require("mongoose");

    const userSchema = new mongoose.Schema({
     username: {
    type: String,
    required: [true, "Username is required"],
     },
     email: {
    type: String,
    required: [true, "Email is required"],
    },
     password: {
    type: String,
    required: [true, "Password is required"],
     },
    });

    const User = mongoose.model("User", userSchema);
    module.exports = User;

    * add unique index for username
    #User.js
    username: {
    type: String,
    required: [true, "Username is required"],
    unique: true,
     },


    * validate repeat password
    #User.js

    userSchema.virtual("repeatPassword").set(function (value) {
    if (this.password !== value) {
        throw new Error("Password missmatch!");
    }});
    <!-- userSchema.pre("save", async function () {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    }); -->

11. Modify login and register forms
    #login.hbs
    method="POST"
    name="username"
    name="password"
    <p>Don't have account? <a href="/users/register">Register</a></p>

    #register.hbs
    method="POST"
    name="username"
    name="email"
    name="password"
    name="repeatPassword"
    <p>Have an account? <a href="/users/login">LogIn</a></p>


12. Add login and register post actions
    #userController.js

        router.post("/login", async (req, res) => {
        const { username, password } = req.body;
        await userManager.login(username, password);
        res.send('Logged in')
        });

        router.post("/register", async (req, res) => {
        const { username, email, password, repeatPassword } = req.body;
        await userManager.register({ username, email, password, repeatPassword });
        res.send('Registered')

        });

13. Add user manager
    Create a managers folder in the src folder and in it create a userManager.js
    #userManager.js

    const User = require("../models/User");

    * require in user controller
    #userController.js
    const userManager = require("../managers/userManager");


    * add register method
    #userManager.js

        exports.register = async () => {
        };

    * add login method
    #userManager.js

        exports.login = async () => {
        };

    * validate if user already exists
    #userManager.js
 
     exports.register = async (userData) => {
        const user = await User.findOne({ username: userData.username });
        if (user) {
            throw new Error("Username already exists");
        }
        return User.create(userData);
        }

14. Hash password
    * install bcrypt => *npm i bcrypt

    * hash password
    #User.js
    userSchema.pre("save", async function () {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    });

15. Login

    * Find user by username

    #userManager.js

    exports.login = async (username, password) => {
    const user = await User.findOne({ username });
    if (!user) {
        throw new Error("Invalid user or password");
    }
    };
     
    * Validate password with hash
    #userManager.js

    const bcrypt = require("bcrypt");
    exports.login = async (username, password) => {
    const user = await User.findOne({ username });
    if (!user) {
        throw new Error("Invalid user or password");
    }
    await bcrypt.compare(password, user.password);

    const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            throw new Error("Invalid user or password");
        }
    };


16. Generate jwt token
    * install jsonwebtoken => *npm i jsonwebtoken

        Create a lib folder in the src folder and in it create a jwt.js

    * promisify jsonwebtoken (optional)
        #jwt.js
        const util = require("util");
        const jsonwebtoken = require("jsonwebtoken");

        const jwt = {
            sign: util.promisify(jsonwebtoken.sign),
            verify: util.promisify(jsonwebtoken.verify),
        };
        module.exports = jwt;

    * create SECRET => 09ad1d6b-23b0-4399-a112-f2187ac607c5
        Create a config folder in the src folder and in it create a config.js

        #userManager.js
        const { SECRET } = require("../config/config");

        #config.js
        exports.SECRET = "09ad1d6b-23b0-4399-a112-f2187ac607c5"
         exports.TOKEN_KEY = 'token'


    * generate token in manager.login

        #userManager.js
        const jwt = require("../lib/jwt");

        exports.login = async (username, password) => {
        const user = await User.findOne({ username });
        if (!user) {
            throw new Error("Invalid user or password");
        }
        await bcrypt.compare(password, user.password);

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            throw new Error("Invalid user or password");
        }
        const token = generateToken(user);
        return token;
        };

        async function generateToken(user) {
        const payload = {
            _id: user._id,
            username: user.username,
            email: user.email,
        };
        const token = await jwt.sign(payload, SECRET, { expiresIn: "2d" });
        return token;
        }


17. Return token in cookie
    * install cookie parser => *npm i cookie-parser
    * config cookie parser
    #index.js
        const cookieParser = require("cookie-parser");
        app.use(cookieParser());

    * set cookie with token
    #userController.js
        router.post("/login", async (req, res, 
        ) => {
            const { username, password } = req.body;
            const token = await userManager.login(username, password);
            res.cookie('token', token);
            res.redirect("/");
        });


        router.post("/register", async (req, res) => {
        const { username, email, password, repeatPassword } = req.body;
        try {
            const token = await userManager.register({ username, email, password, repeatPassword });
            res.cookie(TOKEN_KEY, token)
            res.redirect("/");
        } catch (err) {
            res.render("users/register", { error: getErrorMessage(err),  username, email, });
        }
        });

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