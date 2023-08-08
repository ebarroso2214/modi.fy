//Post Schema
const mongoose = require ('mongoose');


const postSchema = new mongoose.Schema({
    author: {
        type: userSchema,
        ref: 'User'
    }
});

module.exports = mongoose.model('Post', postSchema);