const add = function(a, b, c){
    return a + b + c;
}

// const result = add(1, 2, 3);
// console.log(result);

console.log(add(1, 2, 3));


const count = function(countFrom = 1, countTo = 10, step = 1) {
    console.log(`Starting from ${countFrom} and ending with ${countTo}`)
    for (let i = countFrom; i<= countTo; i +=step) {
        console.log(i)
    }
}
count(1, 5);


// const withdraw = function(amount, balance) {
//     if (amount === 0) {
//         console.log('not possible');
//     } else if (amount > balance) {
//         console.log('insufficient funds');
//     } else {
//         console.log('succeed')
//     }
// }
// withdraw(1000, 10);
// console.log(withdraw);


const withdraw = function(amount, balance) {
 if (amount === 0) {
    console.log('not possible');
    return;
 } 
 if (amount > balance) {
    console.log('insufficient funds')
 }
 console.log('succeed')
}