require('dotenv').config()
const router = require('express').Router()
const {User} = require('../models')
const bcrypt = require('bcrypt')
const {createToken, validateToken} = require('../JWT')

//Find all users
router.get('/', async(req,res)=>{
    try{
        const foundUsers = await User.find()
        res.status(200).json({users: foundUsers })
    }
    catch(err){
        res.status(400).json({error: err})
    }
})

//Find a single user
router.get('/:id', async(req, res) => {
    try{
        const foundUser = await User.findById(req.params.id)
        res.status(200).json({foundUser})
    }
    catch(err){
        res.status(400).json({error:err})
    }
})

//Create user
router.post('/', async(req, res) => {
    const {username, password, confirmPassword} = req.body

    //Checking if username and password are provided for login
    if(!username || !password){
        return res.status(400).json({error: 'Username or Password not present'})
    }

    //Check if passwords match
    if(password !== confirmPassword){
        return res.status(400).json({error: "Passwords do not match!"})
    }

    //Check if password length meets requirements
    if(password.length < 6){
        res.status(400).json({error: 'password length less than 6 characters!'})
    }

    
    //Create the user
    try{
        const createdUser = await User.create({username, password})
        const id = createdUser._id.valueOf()
        const token = createToken(id)
        res.status(200).json({token: token, user: {
            _id: createdUser._id,
            username: createdUser.username
        }})
    }
    catch(err){
        res.status(400).json({error: err})
    }
})

//Login
router.post('/login', async(req,res) => {
    const { username, password } = req.body
    // Check if username and password is provided
    if (!username || !password) {
        return res.status(400).json({message: "Username or Password not present"})
    }

    try{
        const user = await User.findOne({username})
        
        if(!user) res.status(401).json({error: "Login not successful - user not found"})

        //Validate password
        const validPassword = await bcrypt.compare(password, user.password)

        if(!validPassword){
            res.status(401).json({error: "Login not successful - invalid password"})
        } else{
            const id = user._id.valueOf()
            const token = createToken(id)

            res.status(200).json({token: token, user: user})
        }
    }
    catch(err){
        res.status(400).json({
            auth: false,
            error: err
        })
    }
})

//Update user
router.put('/:id',validateToken, async(req,res) => {
    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({message: 'Updated User'})
    }
    catch(err){
        res.status(400).json({error: err})
    }
})

//Delete user
router.delete('/:id',validateToken , async(req,res) => {
    try{
        const deletedUser = await User.findByIdAndDelete(req.params.id)
        res.status(200).json({message: "Deleted User"})
    }
    catch(err){
        res.status(400).json({error: err})
    }
})



router.get('*', (req,res) => {
    res.status(404).json({error: "Not found"})
})



module.exports = router