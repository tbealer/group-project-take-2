exports.seed = function(knex, Promise) {
 return Promise.join(
   // Deletes ALL existing entries
   knex('customers').del(),

   // Inserts seed entries
   knex('customers').insert(
     {
       id: 1,
       name: 'Tommy Bealer',
       password: '12',
       email: 'tommyBealer@test.com'

     }

     ),

   knex('customers').insert(
     {
       id: 8,
       name: 'Shea V. Yerbush', 
       password: '89',
       email: 'sheaVYerbush@test.com',
       
     }
     )

  );
};