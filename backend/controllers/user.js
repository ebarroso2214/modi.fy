require('dotenv').config()
const router = require('express').Router()
const {User} = require('../models')

router.get('/', async(req,res)=>{
    try{
        const foundUsers = await User.find()
        res.status(200).json({users: foundUsers })
    }
    catch(err){
        res.status(400).json({error: err})
    }
})

router.get('*', (req,res) => {
    res.status(404).json({error: "Not found"})
})

module.exports = router