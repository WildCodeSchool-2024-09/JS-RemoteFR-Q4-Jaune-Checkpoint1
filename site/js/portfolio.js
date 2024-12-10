const avatars = [
	{
		img: "https://www.pngarts.com/files/5/User-Avatar-Free-PNG-Image.png",
	},
	{
		img: "https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png",
	},
];

//step1
const avatar = document.querySelector(".avatarjs");
//step 2
const button = document.getElementById("button");
const firstNameElem = document.getElementById("firstname");

// step 1
avatar.addEventListener("click", () => {
	const newImg =
		"https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png";
	avatar.src = newImg;
});

// step 2
button.addEventListener("click", () => {
	const userName = prompt("Enter your name :");

	if (userName) {
		firstNameElem.textContent = userName;
		firstNameElem.style.color = "white";
	}
});
