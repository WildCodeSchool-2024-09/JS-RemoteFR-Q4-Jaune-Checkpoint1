const imgAvatar = document.querySelector('.avatarImg');
// const title = document.querySelector('.title');

// We add a listener on the dog image, when the user clicks on the latter, it changes the src 
imgAvatar.addEventListener('click', function () {
    imgAvatar.src = "./image/avatar.svg";
    imgAvatar.alt = "avatar purple and happy";
});