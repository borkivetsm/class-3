'use strict'
//1
const c = 20;
const f = 1.8 * c + 32;
console.log(f);


//2
const days = 30;
const hours = days * 24;
const minutes = hours * 60;
console.log(hours, minutes);


//3
let h = 100;
let e = 100;
h -= 25;
e -= 30;
console.log(h, e);


//4
let price = 100;
// const sum = price - price * 0.1;
let sum = price / 100 * 90;
console.log(sum)


//5
const n = 3.14;
console.log(Math.floor(n));


//6
const v = '5.741x11';
console.log(parseFloat(v));


//7
const x = '3.93475pppd31';
console.log(parseInt(x));


//8
const a = 2;
console.log(Math.sqrt(a));


//9
const string = '15ksdjnf839';
const num = 20;
console.log(parseInt(string));
console.log(num.toString());
console.log(typeof num.toString());
