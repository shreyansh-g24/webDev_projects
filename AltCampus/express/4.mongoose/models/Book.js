// BOOK MODEL

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// defining a schema for books
var bookSchema = new Schema({
    title: {
      type: String,
      required: true,
      minlength: 5,
    },
    description: String,
    pages: {
        type: Number,
        default: 0,
    },
    tags: [String],
    published: {
        type: Boolean,
        default: false,
    },
    author: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Author",
    }
  }, {timestamps: true});
  
  // requiring the model
  var BookModel = mongoose.model("Book", bookSchema);

  module.exports = BookModel;
  