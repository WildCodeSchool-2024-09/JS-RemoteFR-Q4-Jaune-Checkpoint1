// Step  1

const avatar = document.querySelector("#image");

avatar.addEventListener("click", () => {
	avatar.src = "image/avatar.svg";
});

// Step 2

// Creation de mon bouton
const firstArticle = document.querySelector("#change-text");
const button = document.createElement("button");
button.textContent = "Modify text and color";
button.type = "button";
firstArticle.appendChild(button);

// Ajout du click sur mon bouton pour changer le prenom et la couleur du texte
const firstname = document.getElementById("firstname");
button.addEventListener("click", () => {
	const newFirstname = prompt("Quel est votre prénom");
	firstname.textContent = newFirstname;
	const newColor = prompt("Quelle couleur souhaitez-vous?");
	firstname.style.color = newColor;

	// step 3

	const bgColor = document.getElementsByClassName("pink-bg");
	const newBgColor = prompt("Quelle couleur de fond souhaitez-vous?");

	for (const el of bgColor) {
		el.style.backgroundColor = newBgColor;
	}

	// step 4
	const textColor = document.getElementsByClassName("pink-text");

	for (const el of textColor) {
		el.style.color = newBgColor;
	}

	// step 5

	const linkColor = document.querySelectorAll("a");
	for (const el of linkColor) {
		el.style.color = newBgColor;
	}

	// step 6
});

const frontEnd = document.querySelector("#front-end");

const modifyButton = document.createElement("button");
modifyButton.textContent = "Modify skills";
modifyButton.type = "button";
frontEnd.appendChild(modifyButton);

modifyButton.addEventListener("click", () => {
	const listFront = document.querySelectorAll("#front-dev-tools li");
	for (const el of listFront) {
		const skill = prompt("Enter a skill");
		el.textContent = skill;
	}
});

//step 7

const backEnd = document.querySelector("#back-end");

const Input = document.createElement("input");
backEnd.appendChild(Input);
const backEndButton = document.createElement("button");
backEndButton.textContent = "Add back end skills";
backEnd.appendChild(backEndButton);

backEndButton.addEventListener("click", () => {
	const listBack = document.querySelector("#back-dev-tools");
	const li = document.createElement("li");
	li.textContent = Input.value;
	listBack.appendChild(li);
	Input.value = "";
});
