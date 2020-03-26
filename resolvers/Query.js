const {users, perfis} = require('../data/db')

module.exports = {
  hello(){
    return 'Good morning!!!'
  },
  CurrentTime(){
    return `${new Date}`
  },
  loggedUser() {
    return{
      id: 1,
      name: 'Ana da Silva',
      email: 'ana@gmail.com',
      age: 23,
      salary: 1234.56,
      vip: true

    }      
  },
  ProductDestaque(){
    return{
      name: 'Laptop Gamer',
      price: 4890.68,
      discount: 0.15
    }
  },
  numbersGames(){
    //return[4, 8, 13, 27, 33, 54]
    const growing = (a, b)=> a - b
    return Array(6).fill(0)
          .map(n => 
            parseInt(Math.random() * 60 + 1))
          .sort(growing)
  },
  users(){
    return users
  },
  user(_, {id}){
    const sels = users.filter(u => u.id === id)
    return sels ? sels[0] : null
  },
  perfis(){
    return perfis
  },
  perfil(_, {id}){
    const sels = perfis.filter(p => p.id === id)
    return sels ? sels[0] : null
  }
}