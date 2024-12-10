const avatar = document.querySelector(".img-avatar");
// console.log(avatar);
avatar.addEventListener("click", () => avatar.src = "/site/image/avatar.svg")

const button = document.querySelector(".button-pink");
const matt = document.querySelector("#firstname");

button.addEventListener("click", () => prompt(matt.textContent = "username") && (matt.style.color = "white"))