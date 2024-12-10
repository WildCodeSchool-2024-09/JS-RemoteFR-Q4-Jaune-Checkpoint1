const logoBanner = document.querySelector(".logo-banner");
logoBanner.addEventListener("click", () => {
  logoBanner.src = "image/avatar.svg";
});

const btnName = document.querySelector(".change-name");
const firstName = document.getElementById("firstname");
const description = document.querySelector(".description");
const pinkBG = document.querySelectorAll(".pink-bg");
const pinkText = document.querySelectorAll(".pink-text");

btnName.addEventListener("click", () => {
  let newColor = prompt("enter a color");
  firstName.textContent = prompt("What's your name ?");
  firstName.style.color = "white";

  pinkBG.forEach((el) => {
    el.style.backgroundColor = newColor;
  });

  pinkText.forEach((el) => {
    el.style.color = newColor;
  });
});
