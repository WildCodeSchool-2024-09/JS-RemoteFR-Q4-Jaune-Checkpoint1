// Changement de l'avatar
const avatarImg = document.querySelector(".avatar-img");

avatarImg.addEventListener("click", () => {
  avatarImg.src = "/site/image/avatar.svg";
});

// Changement du prénom et couleur du background
const changeName = document.getElementById("firstname");
const button = document.querySelector(".change-name");
const changeBg = document.querySelector(".description");

button.addEventListener("click", () => {
  const changeBgColor = prompt("Enter your color");
  const userName = prompt("What's your name ?");
  changeBg.style.backgroundColor = changeBgColor;
  button.style.backgroundColor = changeBgColor;
  changeName.textContent = userName;
  changeName.style.color = "white";
});
