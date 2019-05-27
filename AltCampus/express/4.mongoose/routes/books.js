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

var express = require('express');
var router = express.Router();
var BookModel = require("./../models/Book");
var AuthorModel = require("./../models/Author");
var mongoose = require("mongoose");

// DeprecationWarning: Mongoose: `findOneAndUpdate()` and `findOneAndDelete()` without the `useFindAndModify` option set to false are deprecated.
// mongoose.set("useFindAndModify", false);

/* GET books listing. */
// displaying books
router.get('/', function(req, res, next) {
  BookModel.find({}, (err, booksList) => {
    if(err) return next(err);
    console.log("Books found!");
    res.render("books", {books: booksList});
  });
});
// rendering book form
router.get("/new", function(req, res, next){
  console.log("Loading book form");
  let authors = AuthorModel.find({}, (err, authorList) => {
    if (err) return next(err);
    console.log("Authors loaded for bookForm");
    console.log(authorList);
    res.render("bookForm", {
      bookInfo: undefined,
      authors: authorList,
    });
  });
});
// receving new book
router.post("/new", (req, res, next) => {
  tags = req.body.tags.split(" ");
  req.body.tags = tags;
  BookModel.create(req.body, (err, newBook) => {
    if(err) return next(err);
    console.log("New book created");
    // updating the author
    AuthorModel.findByIdAndUpdate(newBook.author, {$push:{books: newBook._id}}, function(err, result){
      if(err) return next(err);
      console.log("New book: Author updated");
      res.redirect("/books");
    });
  });
});
// searching for a specific book by id
// add it after /new route handler, otherwise /new won't be accessed at all
router.get("/:id", function(req, res, next){
  BookModel.findById(req.params.id).populate("author").exec((err, bookSearched) => {
    if(err) return next(err);
    console.log("Book Searched");
    res.render("bookSearch", {bookResult: bookSearched});
  });
});
// handling route for editing a book's info
router.get("/:id/edit", function(req, res, next){
  BookModel.findById(req.params.id, function(err, bookToUpdate, next){
    if(err) return next(err);
    console.log("Book to be updated searched.");
    // removing the book from the previous authors' books []
    AuthorModel.findByIdAndUpdate(bookToUpdate.author, {$pull: {books: req.params.id}}, function(err, updatedAuthor){
      if(err) return next(err);
      console.log("Book Edit: Previous Author updated");
      let authors = AuthorModel.find({}, (err, authorList) => {
        res.render("bookForm", {
          bookInfo: bookToUpdate,
          authors: authorList,  
        });
      });
    });
  });
});
// updating the book info
router.post("/:id/edited", function(req, res, next){
  tags = req.body.tags.split(" ");
  req.body.tags = tags;
  // finding and updating the book
  BookModel.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, result){
    if(err) return next(err);
    console.log("Book updated.");
    // updating the author
    AuthorModel.findByIdAndUpdate(result.author, {$push:{books: result._id}}, function(err, updatedAuthor){
      if(err) return next(err);
      console.log("Book Update: Author updated");
      res.redirect("/books");
    });    
  });
});

// deleting a book
router.get("/:id/delete", function(req, res, next){
  BookModel.findByIdAndDelete(req.params.id, function(err, result){
    if(err) return next(err);
    console.log("Book Deletion successful.");
    // removing the book from the author's works
    let authorId = result.author;
    let bookId = result._id;
    AuthorModel.findByIdAndUpdate(authorId, {$pull: {books: bookId}}, function(err, updatedAuthor){
      if(err) return next(err);
      res.redirect("/books");
    });
  });
});

module.exports = router;
