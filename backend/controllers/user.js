require('dotenv').config()
const router = require('express').Router()
const {User} = require('../models')

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
    try{
        const createdUser = await User.create(req.body)
        res.status(200).json(createdUser)
    }
    catch(err){
        res.status(400).json({error: err})
    }
})

//Update user
router.put('/:id', async(req,res) => {
    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({message: 'Updated User'})
    }
    catch(err){
        res.status(400).json({error: err})
    }
})

//Delete user
router.delete('/:id', async(req,res) => {
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