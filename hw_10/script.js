//1
const btn = document.querySelector('button');
const hello = btn.addEventListener('click', () => {
    console.log('Hello World!');
});


//2
const random = Math.floor(Math.random() * 100) + 1;
const userGuess = document.getElementById('guessField').value;
const result = document.getElementById('guessResult');

const checkGuess = (random, userGuess) => {
    if (userGuess === random) {
        result.textContent = "You're right!";
    } else {
        result.textContent = "You're wrong";
    };
};


//3
let click = 0;
const clickCounter = document.addEventListener('click', () => {
    for (let i = 0; i++;) {
        console.log(`You clicked ${i} times.`);
    };
    // console.log(`You clicked ${i} times.`);  
})


//4
const applyCallbackToEachElement = (arr, callback) => {
    const newArr = [];
    newArr.push(arr.map(callback));
    return newArr;

    // for(const element of arr) {
    //     const passed = callback(element);
    //     if (passed) {
    //         newArr.push(element);
    //     }
    // }
    // return newArr;

    // const newArr = []
    // for (const element of arr) {
    //     callback;
    //     newArr.push(element);
    // }
    // return newArr;
}
const arr = [1, 2, 3, 4, 5];
function squareCallback(num) {
    return Math.pow(num, 2);
};

const theResult = applyCallbackToEachElement(arr, squareCallback);
console.log(theResult); // [1, 4, 9, 16, 25]


//5
const calculateDiscountedPrice = (price, discount, callback) => {
    return callback(price, discount);
}
const showDiscountedPrice = (price, discount) => {
    return price - (price / 100 * discount);
}
console.log(calculateDiscountedPrice(100, 10, showDiscountedPrice)); // Discounted price: 90