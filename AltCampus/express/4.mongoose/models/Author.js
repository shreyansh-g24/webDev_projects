// AUTHOR MODEL

let mongoose = require("mongoose");
var Schema = mongoose.Schema;

// defining a schema for author
let authorSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        requried: true,
        unique: true,
    },
    age: Number,
    books: [{
        type: Schema.Types.ObjectId,
        ref: "Book",
    }],
});

// requiring the author model
let AuthorModel = mongoose.model("Author", authorSchema);

// exporting the author model
module.exports = AuthorModel;
