//1
class Account {
    constructor({ email, login }) {
        this.login = login;
        this.email = email;
    }
    getInfo() {
        return `Login: ${this.login}, Email: ${this.email}`;
    }
}
console.log(Account.prototype.getInfo); // function

const mango = new Account({
 login: 'Mangozedog',
 email: 'mango@dog.woof',
});

console.log(mango.getInfo()); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
 login: 'Poly',
 email: 'poly@mail.com',
});

console.log(poly.getInfo()); // Login: Poly, Email: poly@mail.com


//2
class User {
    constructor({ name, age, followers }) {
        this.name = name;
        this.age = age;
        this.followers = followers;
    }

    getInfo() {
        return `User ${this.name} is ${this.age} years old and has ${this.followers} followers.`
    }
}

const margo = new User({
    name: 'Margo',
    age: 2,
    followers: 20,
   });
   
console.log(margo.getInfo()); // User Mango is 2 years old and has 20 followers
   
const polly = new User({
name: 'Polly',
age: 3,
followers: 17,
});

console.log(polly.getInfo()); // User Poly is 3 years old and has 17 followers


//3
class Storage {
constructor(items) {
    this.items = items
}
getItem() {
    return this.items
}
addItem(item) {
    return this.items.push(item)
}
removeItem(item) {
    const itemIndex = this.items.indexOf(item)
    if (itemIndex !== -1) {
        this.items.splice(itemIndex, 1);
    }
}
}
const storage = new Storage([
'Нанітоіди',
'Пролонгер',
'Залізні жупи',
'Антигравітатор',
]);

const items = storage.getItem();
console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]

storage.addItem('Дроїд');
console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]


//4
class StringBuilder {
    constructor(str) {
        this._value = str;
    }
    get value() {
        return this._value;
    }
    append(str) {
        this._value += str
    }
    prepend(str) {
        this._value= str + this.value;
    }
    pad(str) {
        this._value = str + this._value + str
    }
}
const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='


//5
class Car {
    /*
     * Додай статичний метод `getSpecs(car)`,
     * який приймає об'єкт-машину як параметр і виводить
     * в консоль значення властивостей maxSpeed, speed, isOn, distance и price.
     */
   
    /*
     * Конструктор отримує об'єкт налаштувань.
     *
     * Додай властивості майбутнього екземпляра класу:
     * speed - поточна швидкість, початкова 0
     * price - ціна автомобіля
     * maxSpeed - максимальна швидкість
     * isOn - заведений автомобіль, значення true або false. Спочатку false
     * distance - загальний кілометраж, спочатку 0
     */
    constructor(speed, price, maxSpeed, isOn, distance) {
        this.speed = speed;
        this.price = price;
        this.maxSpeed = maxSpeed;
        this.isOn = isOn;
        this.distance = distance;
    }
   
    /*
     * Додай геттер і сеттер для властивості price,
     * який буде працювати з властивістю ціни автомобіля.
     */
    getPrice() {
        return this.price;
    }

    setPrice(newPrice) {
        newPrice = this.price;
        return this.price;
    }
    /*
     * Додай код для того, щоб завести автомобіль
     * Записує у властивість isOn значення true
     */
    turnOn() {
        this.isOn = true;
        return this.isOn;
    }
   
    /*
     * Додай код для того, щоб заглушити автомобіль
     * Записує у властивість isOn значення false,
     * і скидає поточну швидкість в 0
     */
    turnOff() {
        this.isOn = false;
        this.speed = 0;
        return this.isOn, this.speed;
    }
   
    /*
     * Додає до властивості speed отримане значення,
     * за умови, що результуюча швидкість
     * не більше, ніж значення властивості maxSpeed
     */
    accelerate(value) {
        let accSpeed = speed + value;
        if (accSpeed <= maxSpeed) {
            return accSpeed;
        } return 'too fast'

    }
   
    /*
     * Забирає від властивості speed отримане значення,
     * за умови, що результуюча швидкість не менше нуля
     */
    decelerate(value) {}
   
    /*
     * Додає в поле distance кілометраж (hours * speed),
     * але тільки в тому випадку, якщо машина заведена!
     */
    drive(hours) {}
   }
   
   const mustang = new Car({ maxSpeed: 200, price: 2000 });
   
   mustang.turnOn();
   mustang.accelerate(50);
   mustang.drive(2);
   
   Car.getSpecs(mustang);
   // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000
   
   mustang.decelerate(20);
   mustang.drive(1);
   mustang.turnOff();
   
   Car.getSpecs(mustang);
   // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000
   
   console.log(mustang.price); // 2000
   mustang.price = 4000;
   console.log(mustang.price); // 4000