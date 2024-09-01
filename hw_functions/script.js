// Завдання 1 
 
// Напиши функцію logItems(array), яка отримує масив і використовує цикл for, 
// який для кожного елемента масиву буде виводити в консоль повідомлення в форматі 
// [номер елемента] - [значення елемента]. 
 
// Нумерація повинна починатися з 1. Наприклад, для першого елемента масиву 
// ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено '1 - Mango', а для 
// індексу 2 виведе '3 - Ajax'. 
 
const logItems = function (array) { 
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} - ${array[i]}`);
  } 
}; 
 

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']); 
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]); 
 
// Завдання 2 
 
// Напиши скрипт підрахунку вартості гравіювання прикрас. Для цього створи функцію 
// calculateEngravingPrice(message, pricePerWord) приймаючу рядок (в рядку будуть 
// тільки слова і прогалини) і ціну гравіювання одного слова, і повертає ціну 
// гравіювання всіх слів в рядку. 
 
const calculateEngravingPrice = function (message, pricePerWord) { 
  const words = message.split(' '); 
  return words.length * pricePerWord;
}; 
 
 
console.log( 
  calculateEngravingPrice( 
    'Proin sociis natoque et magnis parturient montes mus', 
    10, 
  ), 
); // 80 
 
console.log( 
  calculateEngravingPrice( 
    'Proin sociis natoque et magnis parturient montes mus', 
    20, 
  ), 
); // 160 
 
console.log( 
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40), 
); // 240 
 
console.log( 
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20), 
); // 120 
 
 
// Завдання 3 
 
// Напиши функцію findLongestWord(string), яка приймає параметром довільний рядок 
// (в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому 
// рядку. 
 
const findLongestWord = function (string) { 
  const words = string.split(' ');
  longest = words[0];
  for(let i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest;
}; 
 
 
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped' 
 
console.log(findLongestWord('Google do a roll')); // 'Google' 
 
console.log(findLongestWord('May the force be with you')); // 'force'


// Завдання 4
 
// Напиши функцію formatString(string) яка приймає рядок і форматує його якщо необхідно. 
// Якщо довжина рядка не перевищує 40 символів, функція повертає її в початковому   вигляді. 
// Якщо довжина більше 40 символів, то функція обрізає рядок до 40-ка символів і додає в кінець рядка три крапки '...', після чого повертає   укорочену версію. 

const formatString = function (string) { 
  if (string.length <= 40) {
    return string;
  } else {
    return string.slice(0, 40) + '...';
  }
}; 
 

console.log(formatString('Curabitur ligula sapien, tincidunt non.')); 
// повернеться оригінальний рядок 
 
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.')); 
// повернеться форматований рядок 
 
console.log(formatString('Curabitur ligula sapien.')); 
// повернеться оригінальний рядок 
 
console.log( 
  formatString( 
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.', 
  ), 
); 
// повернеться форматований рядок


 
// Завдання 5
 
// Напиши функцію checkForSpam(message), приймаючу 1 параметр message - рядок. Функція перевіряє її на вміст слів spam і sale. Якщо знайшли заборонене слово, то функція повертає true, якщо заборонених слів немає функція повертає false. Слова в рядку можуть бути в довільному регістрі. 
 

const checkForSpam = function (message) { 
  const lowerMessage = message.toLowerCase();
  if (lowerMessage.includes('spam') || lowerMessage.includes('sale')) {
    return true
  }
  return false
}; 
 
/* 
 * Викличи функції для перевірки працездатності твоєї реалізації. 
 */ 
console.log(checkForSpam('Latest technology news')); // false 
 
console.log(checkForSpam('JavaScript weekly newsletter')); // false 
 
console.log(checkForSpam('Get best sale offers now!')); // true 
 
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true