// const depositAmount = document.getElementById('depositInput').value;
const depositBtn10 = document.getElementById('depositBtn10')
// const withdrawalAmount = document.getElementById('withdrawalInput').value;
const withdrawalBtn10 = document.getElementById('withdrawalBtn10');
const resultMessage = document.getElementById('resultMessage');

const bankAccount = {
    ownerName: 'Rick',
    accountNumber: 1,
    balance: 999,

    deposit(number) {
        this.balance = this.balance + number;
        resultMessage.textContent = `Your balance is ${this.balance}`;
    },

    withdrawal(number) {
        this.balance = this.balance - number;
        resultMessage.textContent = `Your balance is ${this.balance}`;
    }
};

// console.log(bankAccount.deposit(depositAmount));

depositBtn10.addEventListener('click', () => {
    bankAccount.deposit(10);
})

withdrawalBtn10.addEventListener('click', () => {
    bankAccount.withdrawal(10);
})


//2
const resultTemperature = document.getElementById('resultTemperature');

const weather = {
    temperature: 0,
    humidity: 0,
    windSpeed: 20,

    isCold() {
        if(this.temperature < 0) {
            resultTemperature.textContent = 'температура нижче 0 градусів Цельсія';
        } else {
            resultTemperature.textContent = 'температура вище 0 градусів Цельсія';
        }
    },
};

weather.temperature = 2;
weather.isCold();


//3
const inputEmail = document.getElementById('inputEmail').value;
const inputPassword = document.getElementById('inputPassword').value;

const user = {
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    password: 'securepassword123',

    login(inputEmail, inputPassword) {
        return this.email === inputEmail && this.password === inputPassword;
    }
}

const login = function() {
    const result = user.login(inputEmail, inputPassword);

    alert(result ? 'Thanks for logging in!' : 'Email or password invalid');
};


//4
const movie = {
    title: 'Fairy',
    director: 'John Doe',
    year: 2000,
    rating: 10,

    goodRating() {
        if (this.rating > 8) {
            return true;
        } else {
            return false;
        }
    }
}

const movieStats = document.getElementById('movieStats');
movieStats.textContent = `Movie "${movie.title}" from ${movie.director} released in ${movie.year}`;
const movieRating = document.getElementById('movieRating');
movieRating.textContent = `Rating: ${movie.rating}`

const ratingColor = function() {
    if(movie.goodRating() == true) {
        movieRating.style.color = 'green';
    }
}

