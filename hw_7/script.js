//1
const Arr = [1, 2, 3];
console.log(Arr);
Arr[1] = 10;
console.log(Arr);

//2
const two = ['helllo', 'world', '!']
two[3] = '?';
console.log(two)

//3
const three = [5, 10, 15];
const sum = three[0]+ three[1] + three[2];
console.log(sum);

//4
const four = [3, 4, 5, 6, 7];
for (let num of four) {
    console.log(num);
}

//5
const five = ['hi', 'hello', 'world', 'planet', 'universe'];
for (word of five) {
    if (word.length > 5) {
        console.log(word)
    }
}

//6
const six = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let max = six[0];
for (let i = 0; i < six.length; i++) {
    if (six[i] > max) {
        max = six[i];
    }
}
console.log(max);

//7
const seven = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < seven.length; i++) {
    if (seven[i] % 2 === 0) {
        console.log(seven[i]);
    }
}