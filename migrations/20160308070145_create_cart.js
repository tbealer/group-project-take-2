exports.up = function(knex, Promise) {
  knex.raw('SET foreign_key_checks = 0;');
  return knex.schema.createTable('cart', function(table){
    table.increments().primary();
    table.integer('customerId',11).unsigned().index().references(primary).inTable('customers');
    table.integer('watchId',11).unsigned().index().references(primary).inTable('watches');
    table.integer('order_num');
    
    
  });
   knex.raw('SET foreign_key_checks = 1;');
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cart');
  return knex.raw('SET foreign_key_checks = 0;');
    return knex.raw('SET foreign_key_checks = 1;');

};
