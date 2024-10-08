const baseSalary = 10000;
const overtime = 8;
const rate = 10;

const getWage = (baseSalary, overtime, rate) => {
    return baseSalary + overtime * rate
};

getWage(baseSalary, overtime, rate);



//OOП
// const employee = {
//     baseSalary: 10000,
//     overtime: 8,
//     rate: 10,
//     getWage() {
//         return this.baseSalary + this.overtime * this.rate;
//     }
// }

// employee.getWage()



// const animal = {
//     legs: 4,
// }
// const dog = Object.create(animal);
// dog.name = 'Bobik';
// console.log(dog);
// console.log(animal.isPrototypeOf(dog));

// console.log(dog.hasOwnProperty('name'));
// console.log(dog.hasOwnProperty('legs'));


// const animal = {
//     eats: true,
// }
// const dog = Object.create(animal);
// dog.barks = true;

// // for (const key in dog) {
// //     if(dog.hasOwnProperty(key)) continue;
// //     console.log(key);
// // }

// const dogKey = Object.keys(dog);
// console.log(dogKey);




// class User{
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
// }
// }



// class User{
//     name;
//     #email;
//     constructor({name, email}) {
//         this.name = name;
//         this.#email = email;
//     }
//     getEmail() {
//         return this.#email;
//     }
//     changeEmail(newEmail) {
//         this.#email = newEmail;
//     }
// }


// const bob = new User('Bob', 'bob@ukr.net');
// console.log(bob);

// const alex = new User('Alex', 'alex@gmail.com');
// console.log(alex)

// const bob = new User({
//     name: 'Bob',
//     email: 'bob@ukr.net',
// })
// bob.changeEmail('newBob@ukr.net');
// console.log(bob.getEmail());



// class User{
//     name;
//     #email;
//     constructor({name, email}) {
//         this.name = name;
//         this.#email = email;
//     }
//     get email() {
//         return this.#email;
//     }
//     set email(newEmail) {
//         this.#email = newEmail;
//     }
// }
// const bob = new User({
//     name: 'Bob',
//     email: 'bob@ukr.net',
// })
// console.log(bob.email);
// bob.email = 'newBob@ukr.net';
// console.log(bob.email)


// class User{

//     static Roles = {
//         ADMIN: 'admin',
//         EDITOR: 'editor',
//     }

//     #email;
//     #role;

//     constructor({ email, role }) {
//         this.#email = email;
//         this.#role = role;
//     }
//     get role() {
//         return this.#role;
//     }
//     set role(newRole) {
//         this.#role = newRole;
//     }
// }

// const bob = new User({
//     role: User.Roles.ADMIN,
//     email: 'bob@ukr.net',
// })
// console.log(bob.Roles)
// console.log(User.Roles);

// console.log(bob.role)






// class User{
//     static #takenEmails = [];

//     static isEmailTaken(email) {
//         return User.#takenEmails.includes(email);
//     }
//     #email;

//     constructor({ email }) {
//         this.#email = email;
//         User.#takenEmails.push(email);
//     }
// }

// const bob = new User({ email: 'bob@ukr.net' });
// console.log(bob);
// console.log(User.isEmailTaken('newBob@ukr.net'));

// class Child extends Parent {

// }

// class User{
//     #email;
//     constructor(email) {
//         this.#email = email;
//     }
//     get email() {
//         return this.#email;
//     }
//     set email(newEmail) {
//         this.#email = newEmail;
//     }
// }

// class Admin extends User{

// }
// const admin = new Admin('admin@ukr.net');
// console.log(admin);





// class User {
//     #email
//     constructor(email) {
//         this.#email = email;
//     }

//     get email() {
//         return this.#email
//     }

//     set email(newEmail) {
//         this.#email = newEmail;
//     }
// }

// class Admin extends User {
//     constructor({ email, posts}) {
//         super(email);
//         this.posts = posts;
//     }
//     addPosts(post) {
//         this.posts.push(post);
//     }
// }

// const admin = new Admin({email: 'admin@ukr.net', posts: []});
// console.log(admin)
// // console.log(admin.email);
// admin.addPosts('New post');
// admin.addPosts('New post 2');
// console.log(admin.posts);



// Створіть клас Person, що містить властивості firstName та lastName. Додайте метод getFullName(), який повертає повне ім'я у форматі "firstName lastName".
// class Person {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// const person1 = new Person('John', 'Doe');
// console.log(person1.getFullName()); // John Doe

// const person2 = new Person('Margo', 'Borkivets');
// console.log(person2.getFullName());



// Створіть клас Calculator, який буде мати наступні методи: add(), subtract(), multiply(), divide(). 
//Кожен метод приймає два аргументи - числа, які необхідно обробити. 
//Результатом кожного методу має бути результат відповідної математичної операції.
// class Calculator {
//     add(x, y) {
//         return x + y;
//     };

//     subtract(x, y) {
//         return x - y;
//     }

//     multiply(x, y) {
//         return x * y;
//     }

//     divide(x, y) {
//         if(y === 0) {
//             return 'impossible';
//         }
//         return x / y;
//     }
// }


// const calculator = new Calculator();
// console.log(calculator.add(2, 3)); // 5
// console.log(calculator.subtract(5, 2)); // 3
// console.log(calculator.multiply(2, 4)); // 8
// console.log(calculator.divide(10, 2)); // 5
// console.log(calculator.divide(10, 0)); //impossible





// Створіть клас Animal, який має властивість name. Створіть клас Dog, який наслідується від Animal і має властивість breed. 
// Створіть об'єкт myDog класу Dog з ім'ям Buddy і породою Labrador Retriever.
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
// }

// class Dog extends Animal {
//     constructor(name, breed) {
//         super(name)
//         this.breed = breed;
//     }
// }

// const myDog = new Dog('Buddy', 'Labrador Retriever');
// console.log(myDog); // { name: 'Buddy', breed: 'Labrador Retriever' }




// Створіть клас Rectangle, що містить властивості width та height. 
// Додайте метод getArea(), який повертає площу прямокутника.
// class Rectangle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }

//     getArea() {
//         return this.width * this.height;
//     }
// }

// const rectangle1 = new Rectangle(10, 5);
// console.log(rectangle1.getArea()); // 50