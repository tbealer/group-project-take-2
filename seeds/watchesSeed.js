exports.seed = function(knex, Promise) {
 return Promise.join(
   // Deletes ALL existing entries
  knex('watches').del(),

  knex('watches').insert(
     {
       name: 'Tommy Bealer',
       image_url: '/img/metalAnalog21.png',
       price: 499.99
     }

     ),
  knex('watches').insert(
     {
       name: 'Tommy Bealer',
       image_url: '/img/metalAnalog23.jpg',
       price: 399.99
     }

     ),
  knex('watches').insert(
     {
       name: 'Tommy Bealer',
       image_url: '/img/metalAnalog27.jpg',
       price: 449.99
     }

     ),
  knex('watches').insert(
     {
       name: 'Tommy Bealer',
       image_url: '/img/metalDigital21.jpg',
       price: 499.99
     }

     ),
   knex('watches').insert(
     {
       name: 'Tommy Bealer',
       image_url: '/img/metalDigital23.jpg',
       price: 349.99
     }

     ),
   knex('watches').insert(
     {
       name: 'Tommy Bealer',
       image_url: '/img/metalDigital25.jpg',
       price: 479.99
     }

     )
   

   );
}