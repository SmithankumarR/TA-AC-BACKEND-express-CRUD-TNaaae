var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema(
    {
        name: { type: String },
        email: { type: String, lowercase: true },
        description: { type: String, minlength: 5, maxlength: 200 },
    },
    { timestamps: true }
);

var User = mongoose.model('User', userSchema);

module.exports = User;
