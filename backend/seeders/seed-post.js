const db = require('../models')
//Seeded data for the database. Other adjustments are made in the database itself.
db.Post.create({
    author: '64d19a59f6b58561b25228d3',
    content: 'this is test content'
})

.then(()=>{
    console.log('success')
})
.catch(err => {
    console.log('failure', err)
    process.exit()
})
