'use strict'

const result = 5 + 5 + '5';
console.log(result);
console.log(typeof result);


const email = 'margo.borkivets@gmail.com'
console.log(email.includes("@"));
console.log(email.length);


const my = 'my';
const name = 'name';
const is = 'is';

const fullName = `${my} ${name} ${is} Victor`;
console.log(fullName);


const userName = 'Олександр';
const payment = 300;
alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`);