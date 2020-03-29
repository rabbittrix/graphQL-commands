const db = require('../config/db')

// delete by id
db('users').where({id: 1})
    .delete()
    .then(res => console.log(res))
    .finally(() => db.destroy()) 

// delete all - be careful with this command
db('perfis')
    .delete()
    .then(res => console.log(res))
    .finally(() => db.destroy())