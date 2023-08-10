//Dependencies
require ('dotenv').config();
const mongoose = require('mongoose');

//Connect to MongoDB
console.log(process.env.MONGO_URI)
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> console.log('MongoDB has connected'))
.catch(e=>console.log(e));

module.exports.User = require('./user.js');
module.exports.Post = require('./posts.js');

