// consigne 1 : l'utilisateur peut changer d'avatar quand il clique dessus, je n'arrive pas à mettre toggle
const avatar = document.querySelector(".avatar");

avatar.addEventListener("click", () => {
//    if (avatar.src ==="image/avatar-bis.png"){
        avatar.src ="image/avatar.svg";
    // }
//    else {avatar.src ="image/avatar-bis.png"}
});

//consignes n°2-3-4 : modif du nom et de la couleur
const modifyButton = document.querySelector(".modify");
const firstname = document.getElementById("firstname");
const coloredBackgrounds = document.querySelectorAll(".pink-bg");
const coloredTexts = document.querySelectorAll(".pink-text");
modifyButton.addEventListener("click", () => {
    const userColor = prompt('Enter your color', '#750ff7');
    for (const element of coloredBackgrounds){
        element.style.backgroundColor = userColor;
    };
    for (const text of coloredTexts){
        text.style.color = userColor;
    };
    const username = prompt('Enter your name');
    firstname.textContent=username;
    firstname.style.color = "white";
})


