'use strict'

const message = "hello"+ " " + "JavaScript";
console.log(message);

const result = 6 + "6";
console.log(result);

const number = 5 + 5 + '5';
console.log(number);
console.log(typeof number);


const a = "My name is Margo ";
console.log(a.length);


const b = "Welcome to NYC";
console.log(b.toLowerCase());
console.log(b.toUpperCase());
console.log(b);

console.log(b.indexOf('to'));
console.log(b.indexOf('GoITeens'));

console.log(b.includes('To'));
console.log(b.includes('to'));

console.log(b.startsWith('Wel'));
console.log(b.endsWith('.'));

console.log(b.length);
console.log(b.padEnd(22, '!'));
console.log(b.padStart(21, '@'));



const name = 'Nick';
const age = 15;
const mood = 'happy';

const mes = 'My name is ' + name +', I`m ' + age + ' years old and ' + mood + '.';
console.log(mes);

const sameMes = `My name is ${name}, I'm ${age} years old and ${mood}.`;
console.log(sameMes);


console.log(`Your total is: ${121 + 58}`);

const userName = 'Margo Borkivets';
console.log(userName.length);
console.log(userName.indexOf(" "));

const x = 'Max';
const y = 'Qwertz';
const type = 'premium';
const num = 12;
console.log(`Guest ${x} ${y} checks in into a ${type} suite ${num}`)


const world = ' Hello world! ';
console.log(world.trim(" "));

const login = 'username@gmail.com';
console.log(login.includes("@"));




const blacklistedWord1 = 'спам';
const blacklistedWord2 = 'розпродаж';

const string1 = 'Привіт, я Ілон Маск, це не спам, пропоную тобі мільйон!';
const string2 = 'Найбільший РОЗПРОДАЖ цього тижня, не пропустіть!';
const string3 = 'Рекламна кампанія #jsIsAwesome';

console.log(string1.includes(blacklistedWord1));
console.log(string2.includes(blacklistedWord1));
console.log(string3.includes(blacklistedWord1));

console.log(string1.includes(blacklistedWord2));
console.log(string2.includes(blacklistedWord2));
console.log(string3.includes(blacklistedWord2));