//1
function checkFields() {
    const fieldValueOne = document.getElementById("text-one").value;
    const fieldValueTwo = document.getElementById("text-two").value;
    if (fieldValueOne !== "" && fieldValueTwo !== "") {
        alert('both fields are filled');
    } else {
        alert('not all of the fields are filled');
    }
}

//2
function checkFieldsTwo() {
    const fieldNumberOne = parseFloat(document.getElementById("number-one").value);
    const fieldNumberTwo = parseFloat(document.getElementById("number-two").value);
    if (fieldNumberOne + fieldNumberTwo > 10) {
        alert('Sum is bigger than 10');
    } else {
        alert('Sum is lesser than or is 10');
    }
}

//3
function checkFieldThree() {
    const fieldValueText = document.getElementById("text-check").value;
    if (fieldValueText.includes("JavaScript")) {
        alert("Текст містить слово JavaScript");
    } else {
        alert("Текст не містить слово JavaScript");
    }
}

//4
function checkFieldsFour() {
    const enteredNumber = document.getElementById("entered-number").value;
    if (enteredNumber > 10 && enteredNumber < 20) {
        alert("Число входить в діапазон від 10 до 20");
    } else {
        alert("Число не входить в діапазон від 10 до 20");
    }
}

//5
function checkFieldFive() {
    const nameCheck = document.getElementById("name-check").value;
    const emailCheck = document.getElementById("email-check").value;
    const passwordCheck = document.getElementById("password-check").value;
    if (nameCheck.length > 3 || emailCheck.includes("@") || passwordCheck.length > 6) {
        alert("you're being redirected")
    } else {
        alert("there's a mistake")
    }
}