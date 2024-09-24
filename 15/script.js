// reduce
// const numbers =[15, 60, 5, 31, 87];
// const sum = numbers.reduce((acc, value) => acc + value, 0);
// console.log(sum);


// const tweets = [
//     {id: '00', likes: 100, tags: ['js', 'react'] },
//     {id: '01', likes: 25, tags: ['html', 'css'] },
//     {id: '02', likes: 88, tags: ['js', 'react', 'nodejs', 'vue'] },
//     {id: '03', likes: 211, tags: ['sass', 'css'] },
//     {id: '04', likes: 157, tags: ['html', 'css', 'react'] },
// ];
// const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
// console.log(likes);


// const sumLikes = tweets => tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
// console.log(sumLikes(tweets));

// const tags = tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);
//     return allTags;
// }, []);
// console.log(tags);

// const newTags = tweets => tweets.reduce((allTags, tweet) => {
//     allTags.push(tweet.tags);
//     return allTags;
// }, [])


const tweets = [
        {id: '00', likes: 100, tags: ['js', 'react'] },
        {id: '01', likes: 25, tags: ['html', 'css'] },
        {id: '02', likes: 88, tags: ['js', 'react', 'nodejs', 'vue'] },
        {id: '03', likes: 211, tags: ['sass', 'css'] },
        {id: '04', likes: 157, tags: ['html', 'css', 'react'] },
    ];
const newTags = tweets => tweets.reduce((allTags, tweet) => {
    allTags.push(tweet.tags);
    return allTags;
}, [])
const tags = newTags(tweets);
const getTags = (acc, tag) => {
    if(!acc.hasOwnProperty(tag)) {
        acc[tag] = 0
    }
    acc[tag] += 1;

    return acc;
}

const countTags = tags => tags.reduce(getTags, {});
const tagCount = countTags(tags);
console.log(tagCount);




//sort
// const numbers = [5, 4, 1, 9, 2, 7];
// console.log(numbers.sort());
// const letters = ['D', 'A', 'b', 'o', 'r'];
// console.log(letters.sort());

// const users = ['Nick', 'Bob', 'John'. 'Anna']
// console.log(users.sort());


// const users = [
//     { name: 'Bob', daysActive: 14 },
//     { name: 'July', daysActive: 3 },
//     { name: 'Nick', daysActive: 30 },
//     { name: 'John', daysActive: 1 },
// ]
// const sortByDays = (a, b) => b.daysActive - a.daysActive;
// console.log(users.sort(sortByDays));

// const goods = ['orange', 'apple', 'kiwi', 'banana'];
// goods.sort(function (a, b) {
//     return a.localeCompare(a)
// })
// console.log(goods);



// const numbers = [1, 5, 2, 3, 4, 7, 6, 9]
// const even = numbers.filter(x => x % 2 === 0);
// const doubled = even.map(x => x * 2);
// const reversed = doubled.reverse();
// console.log(reversed);



const numbers = [1, 5, 2, 3, 4, 7, 6, 9]
const result = numbers
    .filter(x => x % 2 === 0)
    .map(y => y * 2)
    .reverse();
console.log(result);