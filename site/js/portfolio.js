// Changement de l'avatar
const avatarImg = document.querySelector(".avatar-img");

avatarImg.addEventListener("click", () => {
  avatarImg.src = "/site/image/avatar.svg";
});

// Changement du prénom et couleur du background
const changeName = document.getElementById("firstname");
const button = document.querySelector(".change-name");
const changeBg = document.querySelector(".description");
const footer = document.getElementById("footer");
const changeTextColor = document.querySelectorAll(".pink-text");
const changeLinkNavColor = document.querySelectorAll("a");

button.addEventListener("click", () => {
  const changeBgColor = prompt("Enter your color");
  const userName = prompt("What's your name ?");
  changeName.textContent = userName;
  changeName.style.color = "white";
  changeBg.style.backgroundColor = changeBgColor;
  button.style.backgroundColor = changeBgColor;
  footer.style.backgroundColor = changeBgColor;

  /* Changement de couleur des h4 */
  for (const textColor of changeTextColor) {
    textColor.style.color = changeBgColor;
  }

  /* Changement de couleur des liens de la nav */
  for (const link of changeLinkNavColor) {
    link.style.color = changeBgColor;
  }
});
