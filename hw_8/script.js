//1
const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];

let string = friends.join(', ');
console.log(string);

//2
const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
    ] ;

const cardToremove = cards.splice(2, 1);
console.log(cardToremove);

const cardToInsert = cards.splice(5, 0, 'Карточка-6');
console.log(cardToInsert);

const cardToUpdate = cards.splice(2, 1, 'card-4');
console.log(cardToUpdate);

console.log(cards);