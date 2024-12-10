const img = document.querySelector(".avatar2");

img.addEventListener("click", () => {
	img.src = "image/avatar.svg";
});

const section = document.querySelector(".description");
const button = document.createElement("button");
button.textContent = "Change the color and text";
section.appendChild(button);

const fisrtName = document.querySelector("#firstname");

button.addEventListener("click", () => {
	const userName = prompt;
	if (userName() === "alex") {
		fisrtName.innerHTML = "alex";
		document.querySelector("#firstname").style.color = "white";
	}
});
