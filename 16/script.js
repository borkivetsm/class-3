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

class User{
    #email;
    constructor(email) {
        this.#email = email;
    }
    get email() {
        return this.#email;
    }
    set email(newEmail) {
        this.#email = newEmail;
    }
}

class Admin extends User{

}
const admin = new Admin('admin@ukr.net');
console.log(admin);