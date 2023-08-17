//Post Schema
const mongoose = require ('mongoose');


const postSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true
    },
    title:{
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
    pic: {
        type: String
    },
    itemsList: {
        item: {type:String},
        amount: {type:Number},
    }


});

module.exports = mongoose.model('Post', postSchema);