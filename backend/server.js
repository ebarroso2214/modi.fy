//Dependencies
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express()

//Middleware
app.use(bodyParser.urlencoded({
    extended: true
}))

// console.log(process.env.MONGO_URI)

// const mongoose = require('mongoose');

// //Connect to MongoDB
// console.log(process.env.MONGO_URI)
// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(()=> console.log('MongoDB connected'))
// .catch(e=>console.log(e));

// module.exports.Post = require('./models/posts');
// module.exports.User = require('./models/user');



app.use(bodyParser.json());
app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, x-access-token, X-Requested-With, Content-Type, Accept, Authorization");
    next();
})
//Controllers
app.use('/users', require('./controllers/user'))

//Home route
app.get('/', (req, res) => {
    res.status(200).json({message: 'Welcome to Home Page'})
}) 

app.get('*', (req, res) => {
    res.status(404).json({error: 'error404'})
})

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})