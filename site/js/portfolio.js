const newImage = document.querySelector(".banner img");
newImage.addEventListener("click", function() {
    newImage.src ="/site/image/avatar.svg"
});

const addbutton = document.querySelector("article p");
const textButton = document.createElement("button");
textButton.classList.add("text-button");
textButton.textContent = "Modify Text and Color";
addbutton.appendChild(textButton);
const firstname = document.getElementById("firstname")
textButton.addEventListener("click", function () {
  const name = prompt("Enter your name");
firstname.textContent= name;
firstname.style.color = "white";
const article = document.querySelector("article");
article.style.backgroundColor = "#750ff7";
});


