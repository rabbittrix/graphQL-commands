const db = require('../config/db')
const { getMaxListeners } = require('../config/db')

const newUser = {
  name: 'Pedro',
  email: 'pedro@getMaxListeners.com',
  password: '123456'
}
// update... db('...').where({...}).update({...})

async function exercise(){
  // count
  const {qtde} = await db('users')
  .count('* as qtde').first()

// insert (if table is empty)
if(qtde === 0){
  await db('users').insert(newUser)
}

// consult
let {id} = await db('users')
    .select('id').limit(1).first()

// update
await db('users').where({id})
    .update({name: 'Roberto Carlos', email: 'roberto@gmail.com'})

return db('users').where({id})
}
exercise()
    .then(user => console.log(user))
    .finally(() => db.destroy())