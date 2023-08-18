const db = require('../models')

db.Post.create({
    author: '64dd75ee38a2f84f4cc3b072',
    title:'Testing with List Items',
    content: 'My R35 is so nice',
    pic: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    itemsList:[
        { name: 'Invidia Catback Exhaust', price: 559.99},
        { name: 'Oil Catch Can', price: 190.99}
    ]
})

.then(()=>{
    console.log('success')
})
.catch(err => {
    console.log('failure', err)
    process.exit()
})