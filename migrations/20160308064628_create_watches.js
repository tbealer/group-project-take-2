
exports.up = function(knex, Promise) {
  return knex.schema.createTable('watches', function(table){
    table.increments('id').primary();
    table.string('name');
    table.string('image_url');
    table.decimal('price');
    
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('watches');
};