const depositAmount = document.getElementById('depositInput').value;
const withdrawalAmount = document.getElementById('withdrawalInput').value;
const resultMessage = document.getElementById('resultMessage');

const bankAccount = {
    ownerName: 'Rick',
    accountNumber: 1,
    balance: 999,

    deposit(balance) {
        this.balance = balance + depositAmount;
        resultMessage.textContent = `Your balance is ${this.balance}`;
    },

    withdrawal(balance) {
        this.balance = balance + withdrawalAmount;
        resultMessage.textContent = `Your balance is ${this.balance}`;
    }
}