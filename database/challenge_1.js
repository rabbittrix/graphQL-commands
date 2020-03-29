const db = require('../config/db')

async function saveUser(name, email, password){
  let user = await db('users')
      .where({email}).first()
  if(!user){
    let [id] = await db('users')
        .insert({name, email, password})
    user = await db('users')
        .where({id}).first()
  }else{
    await db('users')
        .where({id: user.id})
        .update({name, email, password})
    user = {...user, name, email, password}
  }
  return user
}

async function savePerfil(name, label){
  let perfil = await db('perfis')
      .where({name}).first()
  if(!perfil){
    let [id] = await db('perfis')
        .insert({name, label})
    perfil = await db('perfis')
        .where({id}).first()
  }else{
    await db('perfis')
        .where({id: perfil.id})
        .update({name, label})
    perfil = {...perfil, name, label}
  }
  return perfil

}

async function addPerfil(user, ...perfis){
  const user_id = user.id
  await db('users_perfis')
      .where({user_id})
      .delete()
  for(perfil of perfis){
    const perfil_id = perfil.id
    await db('users_perfis')
        .insert({user_id, perfil_id})
  }
  
}

async function run(){
  const user = await saveUser('Jessica', 'jessica@gmail.com', '123456')
  const perfilA = await savePerfil('rh_1', 'Personal')
  const perfilB = await savePerfil('fin_1', 'finance')

  console.log(user)
  console.log(perfilA)
  console.log(perfilB)

  await addPerfil(user, perfilA, perfilB)
}
run()
    .catch(err => console.log(err))
    .finally(() => db.destroy())