const db = require('../config/db')
/*
db('perfis')
  .then(res => res.map(p => p.name))
  .then(names => console.log(names))
  .finally(() => db.destroy())

db('perfis').select('name', 'id')
  .then(res => console.log(res))
  .finally(() => db.destroy())
  
 db.select('name', 'id')
  .from('perfis')
  .limit(4).offset(0) //Limita a paginaçãp e o indice de busca
  .then(res => console.log(res))
  .finally(() => db.destroy())
  */
 db('perfis')
    .select('id', 'name')
    //.where({id: 2})
    //.where('id', '=', 2)
    //.where('name', 'like', '%m%')
    //.whereNot({id: 2})
    .whereIn('id', [1, 2, 3])
    //.first() //Traz o objeto não o array
    .then(res => console.log(res)) // Traz o (res.name), precisa do first()
    .finally(() => db.destroy())