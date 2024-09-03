// const hotel = {
//     name: 'Hilton',
//     stars: 5,
//     capacity: 150,
// }

// for (const key in hotel) {
//     console.log('Key:', key)
// }

// for (const key in hotel) {
//     console.log('value:', hotel[key]);
// }

// const keys = Object.keys(hotel);
// console.log(keys)

// const values = Object.values(hotel);
// console.log(values);

// const entries = Object.entries(hotel);
// console.log(entries)

// const keys = Object.keys(hotel);
// for (const key of keys) {
//     console.log('Value:', hotel[key])
// }

// const entries = Object.entries(hotel);
// for (const entry of entries) {
//     const key = entry[0];
//     const value = entry[1];
//     console.log(`${key}: ${value}`)
// }


// const goods = {
//     orange: 5,
//     kiwi: 12,
//     pples: 4,
//     banana: 2,
// }
// const values = Object.values(goods);

// let total = 0;
// for (const value of values) {
//     total += value;
// }
// console.log(total);

// const temp = [32, 28, 35, 29, 32, 30,27, 35];
// const min = Math.min(...temp);
// console.log(min)

// const names = ['Bob', 'Nick', 'Alex'];
// const copyNames = [...names];
// console.log(names);
// console.log(copyNames);
// console.log(names === copyNames);

// const names = ['Bob', 'Nick', 'Alex'];
// const sliceNames = names.slice();
// console.log(names);
// console.log(sliceNames);

// const names = ['Bob', 'Nick', 'Alex'];
// const completeNames = [...names, 'Piter'];
// console.log(completeNames)

// const names = ['Bob', 'Nick', 'Alex'];
// const newNames = ['Anna', 'Poll', 'Nika'];
// const copy = [...names, ...newNames];
// console.log(copy);

// const names = ['Bob', 'Nick', 'Alex', 'Anna', 'Poll', 'Nika'];
// const newArr = [...names.slice(0, 4), ...names.slice(5)];
// console.log(newArr);

// const a = { x: 1, y: 5 };
// const b = { x: 2, c: 5 };
// const c = Object.assign({}, a, b);
// console.log(c);

// const d = {...a, ...b};

// const t = {
//     x: 5, j: 2, ...a, s: 6, ...b,
// }
// console.log(t)

// let a = 5;
// let b = a;
// console.log(a);
// console.log(b);
// a = 10;
// console.log(a);
// console.log(b);

// const a = ['Bob'];
// const b = a;
// console.log(a);
// console.log(b);
// a.push('Poll');
// console.log(a);
// console.log(b);
// b.push('Nick');


const friends = [
    { name: 'Mango', online: false },
    { name: 'Kiwi', online: true },
    { name: 'Poly', online: false },
    { name: 'Ajax', online: false },
  ];

// function findFriendByName(friendsArray, friendsName) {
//     for ( const friend of friendsArray) {
//         if (friend.name === friendsName) {
//             return friend;
//         } 
//     } return null;
// }

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));

function getAllNames(friendsArray) {
    return Object.values(friendsArray).map(friend => friend.name)
}



console.log(getAllNames(friends));