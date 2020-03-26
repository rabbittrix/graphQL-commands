const {perfis} = require('../data/db')

module.exports = {
  /*salary(user){
      return user.salary_real
    }*/
    perfil(user){
      const sels = perfis.filter(p => p.id === user.perfil_id)
      return sels ? sels[0] : null
    }
}