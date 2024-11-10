// const a = function(message) {
//     console.log(message);
// };
// //...
// const b = function(calllback) {
//     const string = 'Hello!';
//     callback(string);
// }

// b(a);

// for (let i = 0; i <= 10; i++){
//     console.log(i);
// }

// const repeat = function (n) {
//     for (let i = 0; i <= n; i++) {
//         console.log(i)
//     }
// }
// repeat(5)

// const filter = function (array, test) {
//     const newFilter = [];
//     for(const element of array) {
//         test(element)
//     }
//     return newFilter
// }


// const filter = function (array, test) {
//     const newFilter = [];
//     for(const element of array) {
//         const passed = test(element);
//         if (passed) {
//             newFilter.push(element);
//         }
//     }
//     return newFilter;
// }

// const fruit = [
//     {name: 'kiwi', quantity: 300, isFresh: true},
//     {name: 'orange', quantity: 100, isFresh: false},
//     {name: 'apple', quantity: 88, isFresh: true},
// ];

// const freshFruit = filter (fruit, fruit => fruit.isFresh);
// console.log(freshFruit)



// console.log(value); //error
// const value = 5;
// console.log(value); //5

// if(true) {
//     console.log(value); //error
//     const value = 10;
//     console.log(value);
// };

// console.log(value); //5




// const add = function(a, b, c) {
//     return a + b + c;
// }

const add = (a, b, c) => a + b + c;

const a = x => x * 2;

const b = () => {
    console.log('Hello!');
}