
var cart =[
  {
    id: 'woodAnalog21',
    name: 'Carlton',
    material: 'wood',
    style: 'analogue',
    price: 349,
    quantity: 0
  },
  {
    id: 'woodAnalog23',
    name: 'Pendelton',
    material: 'wood',
    style: 'analogue',
    price: 399,
    quantity: 0
  },
  {
    id: 'woodAnalog25',
    name: 'Hamilton',
    material: 'wood',
    style: 'analogue',
    price: 449,
    quantity: 0
  },
  {
    id: 'woodDigital21',
    name: 'Arlington',
    material: 'wood',
    style: 'digital',
    price: 349,
    quantity: 0
  },
  {
    id: 'woodDigital23',
    name: 'Remington',
    material: 'wood',
    style: 'digital',
    price: 349,
    quantity: 0
  },
  {
    id: 'woodDigital25',
    name: 'Livingston',
    material: 'wood',
    style: 'digital',
    price: 349,
    quantity: 0
  },
  {
    id: 'metalDigital21',
    name: 'Tyler',
    material: 'wood',
    style: 'digital',
    price: 349,
    quantity: 0
  },
  {
    id: 'metalDigital23',
    name: 'Kevin',
    material: 'metal',
    style: 'digital',
    price: 349,
    quantity: 0
  },
  {
    id: 'metalDigital25',
    name: 'Lena',
    material: 'metal',
    style: 'digital',
    price: 349,
    quantity: 0
  },
  {
    id: 'metalAnalogue21',
    name: 'Kaeylyn',
    material: 'metal',
    style: 'Analogue',
    price: 349,
    quantity: 0
  },
  {
    id: 'metalAnalogue23',
    name: 'Louisa',
    material: 'metal',
    style: 'digital',
    price: 349,
    quantity: 0
  },
  {
    id: 'metalAnalogue27',
    name: 'Dennis',
    material: 'wood',
    style: 'digital',
    price: 349,
    quantity: 0
  }
]


localStorage.watch1 = JSON.stringify(cart[0]);

var watch1 = JSON.parse(localStorage.watch1);

alert(watch1.price);

