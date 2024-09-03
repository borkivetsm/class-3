// let cost;
// const sub = 'premium';

// switch (sub) {
//     case 'free':
//         cost = 0;
//         break;
//     case 'pro':
//         cost = 100;
//         break;
//     case 'premium':
//         cost = 300;
//         break;
//     default:
//         console.log('invalid')
// }
// console.log(cost)

// if (true) {
//     const value = 10;
//     console.log(value);
// }

// console.log(value);

// let message;
// const option = 'самовивіз';

// switch (option) {
//     case 'самовивіз':
//         message = 'Ви зможете забрати товар завтра з 12:00 в нашому офісі';
//         break;
//     case 'кур"єр':
//         message = 'Кур"єр доставить замовлення завтра з 9:00 до 18:00';
//         break;
//     case 'пошта':
//         message = 'Посилка буде відправлена сьогоднi';
//         break;
//     default:
//         measage = 'Вам передзвонит менеджер';
// }

// console.log(message);

// let age = 101;
// let group;
// if (age <= 16) {
//     group = 'діти';
// } else if (age >= 17 && age <= 60) {
//     group = 'дорослі';
// } else if (age >= 61 && age <= 100) {
//     group = 'пенсіонери';
// } else {
//     group = 'too old'
// }

// console.log(group);

// const first = 'Віктор';
// const last = 'Сташко';

// if (first.length > 4 && last.length > 5) {
//     console.log(first.length + last.length);
// } else {
//     console.log('OOPS!');
// }

// let number = 3;
// let day;

// switch (number) {
//     case 1:
//         day = 'Monday';
//         break;
//     case 2:
//         day = 'Tuesday';
//         break;
//     case 3:
//         day = 'Wednesday';
//         break;
//     case 4:
//         day = 'Thursday';
//         break;
//     case 5:
//         day = 'Friday';
//         break;
//     case 6:
//         day = 'Saturday';
//         break;
//     case 7:
//         day = 'Sunday';
//         break;
//     default:
//         day = 'There"s only 7 days in a week';
// }

// console.log(day);

// let number = 11;
// let season;

// switch (number) {
//   case 12:
//   case 1:
//   case 2:
//     season = "winter";
//     break;
//   case 3:
//   case 4:
//   case 5:
//     season = "spring";
//     break;
//   case 6:
//   case 7:
//   case 8:
//     season = "summer";
//     break;
//   case 9:
//   case 10:
//   case 11:
//     season = "autumn";
//     break;
//   default:
//     season = 'wrong month number'
// }

// console.log(season);



// let type;
// const object = 'cucumber';

// switch (object) {
//     case 'apple':
//     case 'orange':
//     case 'banana':
//     case 'pear':
//         type = 'fruit';
//         break;
//     case 'cucumber':
//     case 'tomato':
//     case 'carrot':
//     case 'potato':
//         type = 'vegetable';
//         break;
//     default:
//         type = 'undefined';
// }

// console.log(type);



// let grade = 99;
// let type;
// if (grade <= 60) {
//     type = 'ausreichend';
// } else if (grade >= 61 && grade <= 74) {
//     type = 'begriefend';
// } else if (grade >= 75 && grade <= 89) {
//     type = 'gut';
// } else if (grade >= 90 && grade <= 100) {
//     type = 'sehr gut';
// } else {
//     type = 'not a grade'
// }

// console.log(type);


// const browser = 'edge';
// let p = document.createElement('p');

// switch (browser) {
//     case 'edge':
//         p.textContent = "You've got the Edge!";
//         break;
//     case 'chrome':
//     case 'safari':
//     case 'firefox':
//     case 'opera':
//         p.textContent = 'Ми підтримуємо і ці браузери';
//         break;
//     default:
//         p.textContent = 'Маємо надію, що ця сторінка виглядає добре!';
// }

// console.log(p.textContent);
// document.body.appendChild(p)



function checkNumber() {
    let number = document.getElementById('number').value;
    let result = document.getElementById('result');
    number = Number(number);
    if (number >= 55 && number <= 99) {
        result.textContent = 'Число потрапляє в діапазон';
    } else {
        result.textContent = 'Число не потрапляє в діапазон';
    }
}