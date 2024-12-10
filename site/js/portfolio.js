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

const allLink = document.querySelectorAll("a");
allLink.forEach((link) => {
  link.style.color = "#750ff7";
});

const btnModify = document.querySelector(".btn-modify");
const devToolsListli = document.querySelectorAll("#front-dev-tools li");
const newTools = ["VSCode", "Github", "Terminal"];

btnModify.addEventListener("click", () => {
  devToolsListli.forEach((li, i) => {
    li.textContent = newTools[i];
  });
});

const form = document.getElementById("form");
const newDevTool = document.getElementById("newdevtool");
const listdevtools = document.querySelector(".listdevtools");
form.onsubmit = function (e) {
  e.preventDefault();
  const newLi = document.createElement("li");
  newLi.textContent = newDevTool.value;
  listdevtools.appendChild(newLi);
};
