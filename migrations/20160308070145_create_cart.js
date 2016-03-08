exports.up = function(knex, Promise) {
  
  return knex.schema.createTable('cart', function(table){
    table.increments('id').primary();
    
    table.integer('watchID').unsigned();
    table.foreign('watchID')
      .references('id')
      .inTable('watches'); 

    table.integer('customerID').unsigned();
    table.foreign('customerID')
      .references('id')
      .inTable('customers');

    table.integer('order_num');
    
    
  });
   
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cart');
 
};
