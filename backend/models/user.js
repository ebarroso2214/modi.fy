//User Schema
const mongoose = require ('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        minlength: 6,
        required: true
    },

    posts: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    },
    bio: String,
    pic: String
});

module.exports = mongoose.model('User', userSchema);