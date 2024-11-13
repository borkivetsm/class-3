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
// const temp = document.getElementById('temp').value;
// console.log(temp)
// const resultTemp = document.getElementById('resultTemp');

const weather = {
    temperature: 0,
    humidity: 10,
    windSpeed: 10,

    isCold: function() {
        if(this.temperature < 0) {
            return "The temperature is below zero.";
        } else {
            return "The temperature is zero or above.";
        }
    },

    setTemperature: function(tempInput) {
        this.temperature = tempInput;
    }
};

weather.setTemperature(-5);

console.log(weather.isCold());

