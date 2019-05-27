// USER SCHEMA

let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let bcrypt = require("bcrypt");

// defining a schema for users
let userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
    },
}, {timestamps: true});

// defining a presave hook
userSchema.pre("save", function(next){
    console.log("Inside pre save hook");
    // hashing the password and saving the hashed password
    let salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password, salt);
    next();
});

// defining methods
userSchema.methods.validatePassword = function(password){
    return bcrypt.compareSync(password, this.password);
};

// requiring model
let UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
