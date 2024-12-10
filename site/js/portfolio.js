// consigne 1 : l'utilisateur peut changer d'avatar quand il clique dessus, ça passe
const avatar = document.querySelector(".avatar");
avatar.addEventListener("click", () => {
    const isAv1 = avatar.src.endsWith("png");
const isAv2 = avatar.src.endsWith("svg");
   if (isAv1){
        avatar.src ="image/avatar.svg";
    }
   if (isAv2) {avatar.src ="image/avatar-bis.png"}
});

//consignes n°2-3-4-5 : modif du nom et de la couleur
const modifyButton = document.querySelector(".modify");
const firstname = document.getElementById("firstname");
const coloredBackgrounds = document.querySelectorAll(".pink-bg");
const coloredTexts = document.querySelectorAll(".pink-text");
const navLinks = document.querySelectorAll("a");
modifyButton.addEventListener("click", () => {
    const userColor = prompt('Enter your color', '#750ff7');
    for (const element of coloredBackgrounds){
        element.style.backgroundColor = userColor;
    };
    for (const text of coloredTexts){
        text.style.color = userColor;
    };
    for (const link of navLinks){
        link.style.color = userColor;
    };
    const username = prompt('Enter your name');
    firstname.textContent=username;
    firstname.style.color = "white";
})
