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
function checkFieldJS() {
    const fieldValueText = document.getElementById("text-check").value;
    if (fieldValueText.includes("JavaScript")) {
        alert("Текст містить слово JavaScript");
    } else {
        alert("Текст не містить слово JavaScript");
    }
}