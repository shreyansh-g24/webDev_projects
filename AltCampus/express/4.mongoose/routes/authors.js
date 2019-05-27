/*
    Handled routes:
    => GET: /
    => GET: /new
    => POST: /new
    => GET: /:id
    => GET: /:id/edit
    => POST: /:id/edited
    => GET: /:id/delete
*/

// requiring modules
let express = require("express");
let router = express.Router();
let AuthorModel = require("./../models/Author");
let mongoose = require("mongoose");

// DeprecationWarning: Mongoose: `findOneAndUpdate()` and `findOneAndDelete()` without the `useFindAndModify` option set to false are deprecated.
// mongoose.set("useFindAndModify", false);

// GET authors listing
router.get("/", function(req, res, next){
    AuthorModel.find({}, (err, listOfAuthors) => {
        if(err) return next(err);
        console.log("Authors Found!");
        res.render("authors", {authors: listOfAuthors});
    });
});
// rendering author form
router.get("/new", function(req, res, next){
    console.log("Loading Author Form");
    res.render("authorForm", {authorInfo: undefined});
});
// receiving new author
router.post("/new", function(req, res, next){
    AuthorModel.create(req.body, (err, newAuthor) => {
        if(err) return next(err);
        console.log("New Author created");
        res.redirect("/authors");
    });
});
// searching for a specific author by id
// adding it after /new route handler otherwise /new won't be accessed at all
router.get("/:id", function(req, res, next){
    AuthorModel.findById(req.params.id).populate("books").exec((err, authorSearched) => {
        if(err) return next(err);
        console.log("Author Searched");
        console.log();
        res.render("authorSearch", {authorResult: authorSearched});
    });
});
// handling route for editing an author's info
router.get("/:id/edit", function(req, res, next){
    AuthorModel.findById(req.params.id, function(err, authorToUpdate, next){
        if(err) return next(err);
        console.log("Author to be updated found!");
        res.render("authorForm", {authorInfo: authorToUpdate});
    });
});
// updating the author info
router.post("/:id/edited", function(req, res, next){
    AuthorModel.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, result){
        if(err) return next(err);
        console.log("Author updated");
        res.redirect("/authors");
    });
});
// deleting an author
router.get("/:id/delete", function(req, res, next){
    AuthorModel.findByIdAndDelete(req.params.id, function(err, result){
        if(err) return next(err);
        console.log("Author deleted successfully");
    });
    res.redirect("/authors");
});

module.exports = router;
