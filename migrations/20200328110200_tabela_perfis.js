
// Evolves Tables in various ways (creates columns, increases size, etc...)
exports.up = function (knex, Promise) {
  return knex.schema.createTable('perfis', table =>{
    table.increments('id').primary()
    table.string('name').notNull().unique()
    table.string('label').notNull()
  }).then(function() {
      return knex('perfis').insert([
      {name: 'comum', label: 'Comum'},
      {name: 'admin', label: 'Administration'},
      {name: 'master', label: 'Master'},
    ])
  })
  
};
// Delete Tables returns version, does everything contrary to the up
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('perfis')
  
};
