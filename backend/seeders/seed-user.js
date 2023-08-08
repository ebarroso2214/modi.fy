const db = require('../models')

db.User.create({
    username: 'randomuser',
    email:'uniquename123@gmail.com',
    password:'password123'
})

.then(()=>{
    console.log('success')
})
.catch(err => {
    console.log('failure', err)
    process.exit()
})