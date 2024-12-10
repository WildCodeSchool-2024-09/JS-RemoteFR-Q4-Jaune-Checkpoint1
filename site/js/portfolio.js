// Changement de l'avatar
const avatarImg = document.querySelector(".avatar-img");

avatarImg.addEventListener("click", () => {
  avatarImg.src = "/site/image/avatar.svg";
});

// Changement du prénom
const changeName = document.getElementById("firstname");
const button = document.querySelector(".change-name");

button.addEventListener("click", () => {
  const userName = prompt("What's your name ?");
  changeName.textContent = userName;
  changeName.style.color = "white";
});
