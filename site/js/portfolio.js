const imgAvatar = document.querySelector('.avatarImg');

imgAvatar.addEventListener('click',  () => {
    imgAvatar.src = "./image/avatar.svg";
    imgAvatar.alt = "avatar purple and happy";
});

  


const descriptionPink= document.querySelector("#pink-description");



const buttonModifyText = document.createElement("button");
buttonModifyText.classList.add(".buttonModify");
buttonModifyText.textContent = "modify text and color";
// buttonModifyText.style.textAlign ="center";
buttonModifyText.style.padding ="1rem";

descriptionPink.appendChild(buttonModifyText);

// Ajout d'un gestionnaire d'événement au bouton
buttonModifyText.addEventListener('click', () => {
    const userName = prompt("Enter your name :");
    const userColor = prompt("Enter your color :");
    if (userName) {

        const textElement = document.querySelector("#firstname");
        const pinkText = document.querySelector("#pinkText");
        const pinkFooter = document.querySelector("#footerBackground");
        textElement.innerHTML = userName;
        textElement.style.color = "#ffffff" ;
        descriptionPink.style.backgroundColor = "#750ff7";
        pinkText.style.color = userColor;
        pinkFooter.style.backgroundColor = userColor;
      }
    })




