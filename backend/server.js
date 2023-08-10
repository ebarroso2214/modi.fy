//Dependencies
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express()

//Middleware
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.json());
app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, x-access-token, X-Requested-With, Content-Type, Accept, Authorization");
    next();
})
//Controllers
app.use('/users', require('./controllers/user'))
app.use('/posts', require('./controllers/post'))

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