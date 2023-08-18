const db = require('../models')
//Creating seeded data for the database. Other adjusts are made directly in the database itself.
db.User.create({
    username: 'randomuser',
    // email:'uniquename123@gmail.com',
    password:'password123',
    
})

.then(()=>{
    console.log('success')
})
.catch(err => {
    console.log('failure', err)
    process.exit()
})