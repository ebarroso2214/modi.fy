const db = require('../models')
//Seeded data for the database. Other adjustments are made in the database itself.
db.Post.create({
    author: '64dad370c7c5b52fc2f4e8b8',
    title:'R35 GTR',
    content: 'My R35 is so nice',
    pic: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
})

.then(()=>{
    console.log('success')
})
.catch(err => {
    console.log('failure', err)
    process.exit()
})
