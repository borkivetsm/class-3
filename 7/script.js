const arr = ['hello', 1, false, null, undefined];

// const names = ['Margo', 'Misha', 'Stas'];
// console.log(names);
// console.log(names[0]);
// names[0] = 'Marharyta';
// console.log(names[0]);
// names[8] = 'Artem';
// console.log(names);

//Iteration

// const names = ['Margo', 'Misha', 'Stas', 'Kiril'];
// for (let i = 0; i < names.length; i += 1){
//     console.log('Names', names[i]);
// }

// for (const name of names) {
//     console.log(name)
// }

// const string = 'Hello';
// for(const letter of string){
//     console.log(letter);
// }


// const names = ['Margo', 'Misha', 'Stas', 'Kiril'];
// const nameFind = 'Stas'
// let message;
// for (const name of names) {
//     if (name === nameFind) {
//         message = 'client found';
//         break;
//     }
//     message = 'client not found'
//  }
//  console.log(message)


//  const numbers = [20, 1, 35, 14, 84, 7, 3, 4, 34];
//  const newNum = 15;

//  for (let i = 0; i < numbers.length; i ++) {
//     if(numbers[i] < newNum) {
//         continue;
//     }
//     console.log(`Number is bigger than ${newNum}: ${numbers[i]}`);
//  }



const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
// console.log(matrix[1][2]);
let total = 0;

for (let i = 0; i < matrix.length; i += 1) {
    console.log('undermassive of matrix[i]:', matrix[i]);

    for (let x = 0; x < matrix[i].length; x += 1) {
        console.log('Element of undermassive of matrix matrix[i][x]:', matrix[i][x]);
        total += matrix[i][x];
    }
}
console.log(total);