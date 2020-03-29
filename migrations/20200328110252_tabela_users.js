
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table =>{
    table.increments('id').primary()
    table.string('name').notNull()
    table.string('email').notNull().unique()
    table.string('password', 60).notNull()
    table.boolean('active').notNull().defaultTo(true)
    table.timestamp('create_date').defaultTo(knex.fn.now())
  })
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
