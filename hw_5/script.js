//1
const option = 'Tea';
switch(option) {
    case 'Coffee':
        console.log('You chose coffee!');
        break;
    case 'Tea':
        console.log('You chose tea!');
        break;
    case 'Juice':
        console.log('You chose juice!');
        break;
    default:
        console.log('Choose your drink');
}


//2
function checkDay() {
    let day = document.getElementById(day).value;
    switch(day) {
        case 'Monday':
            alert('Its a workday');
            break;
        case 'Tuesday':
            alert('Its a workday');
            break;
        case 'Wednsday':
            alert('Its a workday');
            break;
        case 'Thursday':
            alert('Its a workday');
            break;
        case 'Friday':
            alert('Its a workday');
            break;
        case 'Saturday':
            alert('Its weekend!');
            break;
        case 'Sunday':
            alert('Its weekend!');
            break;
        default:
            alert('not a weekday');
    }
};


//3
function checkMonth() {
    let month = document.getElementById(month).value;
    switch(month) {
        case 'January':
            alert('Its Winter');
            break;
        case 'February':
            alert('Its Winter');
            break;
        case 'March':
            alert('Its Spring');
            break;
        case 'April':
            alert('Its Spring');
            break;
        case 'May':
            alert('Its Spring');
            break;
        case 'June':
            alert('Its Summer');
            break;
        case 'July':
            alert('Its Summer');
            break;
        case 'August':
            alert('Its Summer');
            break;
        case 'September':
            alert('Its Autumn');
            break;
        case 'October':
            alert('Its Autumn');
            break;
        case 'November':
            alert('Its Autumn');
            break;
        case 'December':
            alert('Its Winter');
            break;
        default:
            alert('not a month');
    }
};


//4
function checkDaysNumber() {
    let month = document.getElementById(daysNumber).value;
    switch(month) {
        case 'January':
            alert('It has 31 days');
            break;
        case 'February':
            alert('It has 29 days');
            break;
        case 'March':
            alert('It has 31 days');
            break;
        case 'April':
            alert('It has 30 days');
            break;
        case 'May':
            alert('It has 31 days');
            break;
        case 'June':
            alert('It has 30 days');
            break;
        case 'July':
            alert('It has 31 days');
            break;
        case 'August':
            alert('It has 31 days');
            break;
        case 'September':
            alert('It has 30 days');
            break;
        case 'October':
            alert('It has 31 days');
            break;
        case 'November':
            alert('It has 30 days');
            break;
        case 'December':
            alert('It has 31 days');
            break;
        default:
            alert('not a month');
    }
};


//5
function checkColorMeaning() {
    let day = document.getElementById(color).value;
    switch(day) {
        case 'red':
            alert('stop');
            break;
        case 'yellow':
            alert('wait');
            break;
        case 'green':
            alert('go');
            break;
        default:
            alert('unknown color');
    }
};


//6
function doTheMath() {
    let firstNumber = document.getElementById(numberOne).value;
    let secondNumber = document.getElementById(numberTwo).value;
    let sign = document.getElementById(sign).value;
    if(sign === '*') {
        console.log(firstNumber * secondNumber);
    } else if(sign === '/') {
        console.log(firstNumber / secondNumber);
    } else if(sign === '-') {
        console.log(firstNumber - secondNumber);
    } else if(sign === '+') {
        console.log(firstNumber + secondNumber);
    } else {
        console.log('not a math sign')
    }
}