
exports.up = function(knex, Promise) {
  return knex.schema.createTable('customers', function(table){
    table.increments('id').primary();
    table.string('name');
    table.string('password');
    table.string('email').unique();
    
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('customers');
};




