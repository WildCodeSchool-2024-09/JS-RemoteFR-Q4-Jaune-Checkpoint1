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
