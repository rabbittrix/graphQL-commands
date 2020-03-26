const users = [
  {
    id: 1,
    name: "James Smith",
    email: "james@gamil.com",
    age: 29,
    perfil_id: 1,
    status: "ACTIVE"
  },
  {
    id: 2,
    name: "Rafael filho",
    email: "rafael@gamil.com",
    age: 22,
    perfil_id: 2,
    status: "INACTIVE"
  },
  {
    id: 3,
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

module.exports = { users, perfis };
