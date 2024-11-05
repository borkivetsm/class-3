'use strict';

// document.addEventListener("keydown", event => {
//     console.log("Keydown:", event);
// });

// document.addEventListener("keyup", event => {
//     console.log("Keyup:", event);
// });

// document.addEventListener("keydown", event => {
//     console.log("key:", event.key);
//     console.log("code:", event.code);
// });

// document.addEventListener("keydown", event => {
//     event.preventDefault();
//     if((event.ctrlKey || event.metaKey) && event.code === "KeyD") {
//         console.log("Ctrl+d or Command+d combo");
//    }
// })

//1
document.getElementById("input").addEventListener("keypress", event => {
    document.getElementById("message").textContent = document.getElementById("input").value
})