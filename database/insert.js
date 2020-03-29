const db = require('../config/db')
/*
const newPerfil = {
  name: 'visitor',
  label: 'Visitor'
}
db('perfis').insert(newPerfil)
    .then(res => console.log(res))
    .catch(err => console.log(err.sqlMessage))
    .finally(()=> db.destroy())
    */

const perfilSU = {
  name: 'root' + Math.random(),
  label: 'Super User'
}
// insert into perfis(name, label)
//values('...', '...')
db.insert(perfilSU).into('perfis')
  .then(res => res[0])
  .then(id => `The generated code was: ${id}`)
  .then(string => console.log(string))
  .catch(err => console.log(err.sqlMessage))
  .finally(()=> db.destroy())