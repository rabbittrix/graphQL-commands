
let id = 1
function nextId(){
    return id++
}
const users = [
  {
    id: nextId(),
    name: "James Smith",
    email: "james@gamil.com",
    age: 29,
    perfil_id: 1,
    status: "ACTIVE"
  },
  {
    id: nextId(),
    name: "Rafael filho",
    email: "rafael@gamil.com",
    age: 22,
    perfil_id: 2,
    status: "INACTIVE"
  },
  {
    id: nextId(),
    name: "Jessica Lane",
    email: "jessica@gamil.com",
    age: 34,
    perfil_id: 1,
    status: "BLOCKED"
  }
];

const perfis = [
  { id: 1, name: "Customer" },
  { id: 2, name: "Admin" }
];

module.exports = { users, perfis, nextId };
