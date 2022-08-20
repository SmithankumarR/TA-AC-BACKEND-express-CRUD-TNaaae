let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    name: {type: String, required: true},
    age: Number,
    email: {type: String, lowercase: true},
    bio: String
}, {timestamps: true});

module.exports = mongoose.model("User", userSchema);