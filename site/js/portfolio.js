// Step 1
const avatar = document.getElementById("avatar");
avatar.addEventListener("click", function() {
    avatar.src = "./image/avatar.svg"
});


// Step 2
const modifyButton = document.getElementById("modify");
modifyButton.addEventListener("click", function () {
    const userName = prompt("Enter your name:");
    const naming = document.getElementById("firstname");
    naming.textContent = userName;
    naming.style.color = "white";
})