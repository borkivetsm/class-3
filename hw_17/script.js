//1
const fieldValue = document.getElementById('textOne');
const changeBtn = document.getElementById('changeBtn');

function changeColor() {
    changeBtn.textContent = fieldValue.value;
}

//2
const img = document.getElementById('img');
img.src = 'https://www.iconpacks.net/icons/2/free-heart-icon-3510-thumb.png';

//3
const heartLink = document.getElementById('heartLink');
heartLink.href = 'https://www.google.com.ua/imgres?q=star&imgurl=https%3A%2F%2Fcdn-icons-png.flaticon.com%2F512%2F541%2F541415.png&imgrefurl=https%3A%2F%2Fwww.flaticon.com%2Fde%2Fkostenloses-icon%2Fstar_541415&docid=46IJx7h-r-D8-M&tbnid=_Afa2psOqYoVWM&vet=12ahUKEwjiisb-lOaJAxXy2AIHHRhqKw8QM3oECBEQAA..i&w=512&h=512&hcb=2&ved=2ahUKEwjiisb-lOaJAxXy2AIHHRhqKw8QM3oECBEQAA"';

const star = document.getElementById('star');
star.alt = 'star'

//4
const list = document.getElementById('list');
const firstChild = list.firstElementChild;
firstChild.textContent = 'this is the first element';