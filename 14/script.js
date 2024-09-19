// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = [];

// for (let i = 0; i < numbers.length; i += 1) {
//     if(numbers[i] > 3) {
//         filteredNumbers.push(numbers[i]);
//     }
// }

// console.log(filteredNumbers)


// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = numbers.filter(value => {
//     return value > 3;
// });
// console.log(filteredNumbers);


// const one = (array, value) => {
//     for (let i = 0; i < array.length; i += 1) {
//         array[i] = array[i] * value;
//     }
// }
// const numbers = [1, 2, 3, 4, 5];
// one(numbers, 2);
// console.log(numbers);


// const pure = (array, value) => {
//     const result = [];

//     for (let i = 0; i < array.length; i += 1) {
//         result.push(array[i] * value)
//     }
//     return result;
// }

// const numbers = [1, 2, 3, 4, 5];
// const newNumbers = pure(numbers, 2);

// console.log(numbers);
// console.log(newNumbers);






//FOR EACH

// const numbers = [1, 2, 3, 4, 5];

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i])
// }

// numbers.forEach(num => console.log(num));

// numbers.forEach((num, ind) => console.log(`${ind} - ${num}`))


//MAP
// const numbers = [1, 2, 3, 4, 5];
// const newNumbers = numbers.map(num => num * 5);
// console.log(newNumbers)

// const user = [
//     { name: 'Bob', isActive: true },
//     { name: 'Nick', isActive: false },
//     { name: 'Alex', isActive: true },
// ]
// const names = users.map( => user.name);
// console.log(names);


//FILTER
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numbers.filter(num => num < 5));
// console.log(numbers.filter(num => num > 5));
// console.log(numbers.filter(num => num === 5));

// const user = [
//     { name: 'Bob', isActive: true },
//     { name: 'Nick', isActive: false },
//     { name: 'Alex', isActive: true },
// ]
// const active = user.filter(user => user.isActive);
// console.log(active);

// const inactive = user.filter(user => !user.isActive)
// console.log(inactive)


// FIND
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numbers.find(num => num > 5));
// console.log(numbers.find(num => num < 5));

// const users = [
//     { id: '00', name: 'Bob', isActive: true },
//     { id: '01', name: 'Nick', isActive: false },
//     { id: '02', name: 'Alex', isActive: true },
//     { id: '03', name: 'Nicka', isActive: true },
//     { id: '04', name: 'John', isActive: true },
// ]

// const user = users.find(user => user.id === '03');
// console.log(user);

// const getUser = (arr, id) => arr.find(x => x.id === id);
// console.log(getUser(users, '01'));





// const big = val => val >= 10;
// console.log([15, 2, 44, 9, 65, 2].every(big));
// console.log([150, 21, 44, 90, 65, 20].every(big));

// console.log([15, 2, 44, 9, 65, 2].some(big));
// console.log([5, 2, 4, 9, 6, 2].some(big));


// const goods = [
//     { name: 'tomatoes', amount: 100 },
//     { name: 'apples', amount: 0 },
//     { name: 'kiwis', amount: 40 },
// ]

// const allGoods = goods.every(good => good.amount > 0);
// const someGoods = goods.some(goods => goods.amount > 0);
// console.log(someGoods);