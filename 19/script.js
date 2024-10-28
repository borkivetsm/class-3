// const button = document.querySelector(".btn");

// button.addEventListener("click", () => {
//     console.log("Event 'click'");
// }
// );

// button.removeEventListener("click", () => {
//     alert('Removing the listener');
// }
// );

// const addBtn = document.querySelector('button[data-action="add"]');
// const removeBtn = document.querySelector('button[data-action="remove"]');
// const btn = document.querySelector('#btn');

// const handleClick = () => {
//     alert('Click event listener');
// };

// addBtn.addEventListener("click", () => {
//     btn.addEventListener("click", handleClick);
// });

// removeBtn.addEventListener("click", () => {
//     btn.removeEventListener("click", handleClick)
// })

// const btn = document.querySelector('#btn');

// const handleClick = event => {
//     console.log("event: ", event);

//     console.log("event type: ", event.type);

//     console.log("this: ", this);

//     console.log("target: ", event.target);
// };

// btn.addEventListener('click', handleClick);





// const form = document.querySelector(".form");
// const loginInput = form.querySelector("input[type='text']");
// const passwordInput = form.querySelector("input[type='password']");

// form.addEventListener('submit', handleSubmit);

// function handleSubmit(event) {
//     event.preventDefault();

//     const login = loginInput.value.trim();
//     const password = passwordInput.value.trim()

//     if (login === '' || password === '') {
//         return alert("Enter correct data");
//     }

//     form.reset();

//     alert('Thanks for logging in!');
// }


//1
// const button = document.querySelector(".btn");
// button.addEventListener = ("click", () => {

//     if (button.style.backgroundColor === "lightblue") {
//         button.style.backgroundColor === "lightgreen"
//     } else {
//         button.style.backgroundColor === "lightblue";
//     }
// });


//2
const form = document.querySelector(".form");
form.addEventListener('submit', () => {
    event.preventDefault();
    alert("registration was successfull!");
})