//1
let number = 0;
while (number <= 10) {
    console.log(number);
    number ++;
}


//2
const min = 2;
const max = 20;
for (let i = 0; i <= max; i ++) {
    if (i % 2 === 1) {
        continue;
    } 
    console.log(i);
}


//3
for (let i = 0; i <= 10; i++) {
    console.log(i * 7)
}

//4



//5
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i <= numbers.length; i++) {
    if (i === 7) {
        break;
    } 
    console.log(i)
}


//6
const n = 14;
for (let i = 0; i < n; i++) {
    if(i === n) {
        break;
    }
    console.log(i)
}


//7
let i = 0;
while (i < 20) {
    i += 1;
    if (i % 3 === 0) {
    continue;
    }
    console.log(i);
}