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
  // STEP 3
  const colorUSer = prompt("entrez une couleur # : ");
  modifiedName.textContent = textUser;
  modifiedName.style.color = "white";
  // STEP 3
  sectionButton.style.background = colorUSer;
});
