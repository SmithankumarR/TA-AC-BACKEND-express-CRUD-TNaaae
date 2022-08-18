var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, lowercase: true },
    age: { type: Number, default: 18 },
    description: { type: String, minlength: 10, maxlength: 200 },
}, { timestamps: true });

var User = mongoose.model('User', userSchema);

module.exports = User;