//step1
const avatar = document.querySelector(".avatarjs");
//step 2
const button = document.getElementById("button");
const firstNameElem = document.getElementById("firstname");
//step 3
const pinkText = document.querySelector(".pink-text");
const pinkBg = document.querySelector(".pink-bg");

// step 1
avatar.addEventListener("click", () => {
	const newImg =
		"https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png";
	avatar.src = newImg;
});

// step 2 et 3
button.addEventListener("click", () => {
	const couleur = prompt("Enter a color :");
	const userName = prompt("Enter your name :");

	// if (couleur) {
	// 	for (const elem of pinkBg) {
	// 		elem.style.backgroundColor = couleur;
	// 	}
	// }

	// for (const elem of pinkText) {
	// 	elem.style.color = couleur;
	// }

	if (userName) {
		firstNameElem.textContent = userName;
		firstNameElem.style.color = "white";
	}
});
