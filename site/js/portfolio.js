 
const avatar = document.querySelector('.avatar');

avatar.addEventListener('click',() => {
avatar.src = 'image/avatar.svg';
avatar.alt = 'un avatar qui sourie';
});

const inser = document.querySelector('.pink-bg');
const button = document.createElement('button');
button.textContent = 'User'


inser.appendChild(button);
button.addEventListener('click',() =>{
let name = prompt("Veuillez entrer votre Nom:");
if ( name != "" || name != null){
    const firstName = document.querySelector("#firstname");
    firstName.textContent = name;
}
});