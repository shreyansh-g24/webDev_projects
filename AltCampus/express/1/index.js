// importing modules
let express = require("express");
let path = require("path");
let cookieParser = require("cookie-parser");

// declaring variables
const PORT = 4000;
const HOSTNAME = "localhost" || "127.0.0.1";

// calling express and mounting the methods on a variable, express automatically starts a server in the background
let app = express();

// creating a logger middleware
app.use((req, res, next) => {
    // logging request url
    console.log(req.url);
    next();
});

// parsing the data
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// specifying the path to static assets
app.use(express.static(path.join(__dirname, "public")));

// cookie-parser
app.use(cookieParser());
app.use((req, res, next) => {
    res.cookie("name", "someName");
    next();
});

// specifying viewing engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

/*
NEXT MIDDLEWARE:->
HANDLING ROUTES-
app.post, app.put, app.get
(path, handler)
*/
app.post("/", (req, res) => {
    console.log(req);
    // sending back the parsed data as is
    res.send(req.body);
});
app.get("/", (req, res) => {
    // cannot use sendFile as we are using an ejs template.
    // res.sendFile(__dirname + "/public/index.html");
    // Since we have defined that our templates are ejs, it will define append .ejs to any file we specify. Also cannot use sendFile, templates are rendered.
    res.render("index");
});

// listening on specified port on localhost
app.listen(PORT, HOSTNAME, () => {
    console.log("Server listening on port: ", PORT);
});

