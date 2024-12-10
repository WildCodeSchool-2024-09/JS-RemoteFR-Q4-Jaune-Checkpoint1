const avatar = document.querySelector(".avatar img");
avatar.addEventListener("click", () => {
	avatar.src = "./image/avatar.svg";
});

// change mon nom
const monBouton = document.querySelector("button");
const firstName = document.querySelector("#firstname");

// selectionner l'article p
const couleur = document.querySelector(".pink-bg");
// console.log(couleur);

monBouton.addEventListener("click", () => {
	const changeColor = prompt("choix de la couleur?");
	const monNom = prompt("Renseigne ton nom");
	if (monNom) {
		firstname.innerHTML = monNom;
		firstname.style.color = "white";
	}
	if (changecolor) {
		couleur.style.backgroundcolor = changeColor;
	}
});
