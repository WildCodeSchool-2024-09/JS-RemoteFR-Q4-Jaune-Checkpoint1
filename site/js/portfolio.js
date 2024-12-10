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
{/* <article>
<section class="description pink-bg">
  <h1>Hi, I’m <span id="firstname">Matt</span>. Nice to meet you.</h1>
  <p>Since the beginning of my journey as a freelance developer nearly 10 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one problem at a time.</p>
  <button class="modify" type="button">Modify text and color</button>
</section>
</article> */}

