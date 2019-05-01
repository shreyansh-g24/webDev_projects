// INDEX.JS

// importing modules
let express = require("express");
let path = require("path");

// declaring variables
const PORT = 4000;
const HOSTNAME = "localhost" || "127.0.0.1";

// calling express and mounting the methods on a variable
let app = express();

// specifying the path to static assets
app.use(express.static(path.join(__dirname, "public")));

// specifying the viewing engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// handling routes on root page
app.get("/", (req, res) => {
    res.render("index");
});
app.get("/about", (req, res) => {
    res.render("about");
});
app.get("/blog", (req, res) => {
    res.render("blog");
});
app.get("/contact", (req, res) => {
    res.render("contact");
});
app.get("/shopnow", (req, res) => {
    res.render("shopnow");
});
app.get("/singlepage", (req, res) => {
    res.render("singlepage");
});

// listening on the specified port on localhost
app.listen(PORT, HOSTNAME, () => {
    console.log("Server listening on port: ", PORT);
});
