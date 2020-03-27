
const {users, nextId} = require('../data/db')
//{name, email, age} if have many types use args
module.exports = {
  newUser(_, args){
    const emailExistent = users.some(u => u.email === args.email)
    if(emailExistent){
      throw new Error('Email exist')
    }
    const newu = {
      id: nextId(),
      ...args,
      perfil_id: 1,
      status: 'ACTIVE'
    }
    users.push(newu)
    return newu
  },
  deleteUser(_, {id}){
    const i = users.findIndex(u => u.id === id)
    if(i < 0) return null
    const excluid = users.splice(i, 1)
    return excluid ? excluid[0] : null
  },
  changeUser(_, args){
    const i = users.findIndex(u => u.id === args.id)
    if(i < 0 )return null
    const user = { ...users[i], ...args}

    users.splice(i, 1, user)
    return user
  }
  
}