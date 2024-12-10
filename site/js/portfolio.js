// Step 1
const avatar = document.getElementById("avatar");
avatar.addEventListener("click", function() {
    avatar.src = "./image/avatar.svg"
});


// Step 2 - 3 - 4 - 5
const modifyButton = document.getElementById("modify");
modifyButton.addEventListener("click", function () {

    const background = prompt("Enter a colour:");
    const description = document.getElementById("presentation");

    const userName = prompt("Enter your name:");
    const naming = document.getElementById("firstname");

    const pinkText = document.getElementsByClassName("pink-text");
    const end = document.getElementById("end");
    
    const links = document.getElementsByTagName("a");

    naming.textContent = userName;
    naming.style.color = "white";
    description.style.backgroundColor = background;
    end.style.backgroundColor = background;
    
    for (let pink of pinkText) {
        pink.style.color = background;
    }

    for (let link of links) {
        link.style.color = background;
    }
})