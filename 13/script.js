// const hotel = {
//     name: 'hilton',
//     stars: 4,
//     capacity: 150,
// }

// const {name, stars, status} = hotel;
// const {name = 'Hilton Resort', stars = 5, status = 'empty'} = hotel;
// console.log(name, stars, status);

// const {name: hotelName, stars, satus: hotelStatus = 'empty'} = hotel;
// console.log(hotelName, stars, hotelStatus)

// const {name, ...rest} = hotel;
// console.log(name);
// console.log(rest);

// let option = {
//     size: {
//         height: 150,
//         width: 150
//     },
//     items: ["Kiwi", "Apple"],
// }
// const {
//     size: {height, width},
//     items: [item1, item2],
//     title = "Menu"
// } = option;

// console.log(title);
// console.log(item1);
// console.log(item2);
// console.log(height);
// console.log(width);




// const rgb = [255, 150, 20];
// let red, green, blue;
// [red, green, blue] = rgb;
// const [red, green, blue, alpha = 0.5] = rgb;
// console.log(red, green, blue, alpha);

// const [red, ...colors] = rgb;
// console.log(`red: ${red}, colors: ${colors}`)




// const car = {
//     make: 'Toyota',
//     model: 'Camry',
//     year: 2020,
//     features: ['power windows', 'rear camera', 'navigation'],
//     safety: {
//       airbags: true,
//       antilock_brakes: true,
//       stability_control: true
//     }
//   }

// const {
//     make,
//     model,
//     year,
//     features: [feature1, feature2, feature3],
//     safety: {airbags, antilock_brakes, stability_control}
// } = car;

// console.log(make);
// console.log(model);
// console.log(year);
// console.log(feature1);
// console.log(feature2);
// console.log(feature3);
// console.log(airbags);
// console.log(antilock_brakes);
// console.log(stability_control);



// function calculateTotalCost(items) {
//     return items.reduce(())
// }

// const items = [
//     { name: 'Футболка', price: 250, quantity: 2 },
//     { name: 'Джинси', price: 800, quantity: 1 },
//     { name: 'Кросівки', price: 1200, quantity: 1 }
//   ];
 
//   console.log(calculateTotalCost(items)); // 250 * 2 + 800 * 1 + 1200 * 1 = 2500




function calculateAverageGrade({grades}) {
    const total = grades.reduce((sum, grade) => sum + grade, 0)
    return total / grades.length;
}

const student = {
    name: 'Bruce',
    surname: 'Lee',
    grades: [4, 5, 3]
  };
 
console.log(calculateAverageGrade(student));
