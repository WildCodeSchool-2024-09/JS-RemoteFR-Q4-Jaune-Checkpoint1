// Step 1
const avatar = document.getElementById("avatar");
avatar.addEventListener("click", function() {
    avatar.src = "./image/avatar.svg"
});


// Step 2 - 3 - 4
const modifyButton = document.getElementById("modify");
modifyButton.addEventListener("click", function () {

    const background = prompt("Enter a colour:");
    const description = document.getElementById("presentation");

    const userName = prompt("Enter your name:");
    const naming = document.getElementById("firstname");
    
    naming.textContent = userName;
    naming.style.color = "white";
    description.style.backgroundColor = background;
})