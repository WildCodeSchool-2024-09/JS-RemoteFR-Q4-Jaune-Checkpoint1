const avatars = [
	{
		img: "https://www.pngarts.com/files/5/User-Avatar-Free-PNG-Image.png",
	},
	{
		img: "https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png",
	},
];

const avatar = document.querySelector(".avatarjs");

avatar.addEventListener("click", () => {
	const newImg =
		"https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png";
	avatar.src = newImg;
});
