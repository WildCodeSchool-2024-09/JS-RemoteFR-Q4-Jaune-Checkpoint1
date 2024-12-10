const imgAvatar = document.querySelector(".avatar-img");

//ok fonctionne
// imgAvatar.addEventListener("click", () => {
//     imgAvatar.src = "./image/avatar-bis.png";
//   });

// test retour de l'image

imgAvatar.addEventListener("click", () => {
  if ((imgAvatar.src = imgAvatar.src.includes("avatar-bis.png"))) {
    imgAvatar.src = "./image/avatar.svg";
  } else {
    imgAvatar.src = "./image/avatar-bis.png";
  }
});

//STEP 2
const sectionButton = document.querySelector(".description");
console.log(sectionButton);

const button = document.createElement("button");
button.textContent = "Modify";
sectionButton.appendChild(button);

const modifiedName = document.getElementById("firstname");

button.addEventListener("click", () => {
  const textUser = prompt("entrez votre prénom");
  modifiedName.textContent = textUser;
  modifiedName.style.color = "white";
});
