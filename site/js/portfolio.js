const imgAvatar = document.querySelector('.avatarImg');

imgAvatar.addEventListener('click', function () {
    imgAvatar.src = "./image/avatar.svg";
    imgAvatar.alt = "avatar purple and happy";
});

// const imgAvatar = document.querySelector('.avatarImg');

// imgAvatar.addEventListener('click', function () {
//     imgAvatar.src = "./image/avatar.svg";
//     imgAvatar.alt = "avatar purple and happy";
// });


// We create the variables that we set to the DOM elements 
const descriptionPink= document.querySelector("#pink-description");



const buttonModifyText = document.createElement("button");
buttonModifyText.classList.add(".buttonModify");
buttonModifyText.textContent = "modify text and color";
// buttonModifyText.style.textAlign ="center";
buttonModifyText.style.padding ="1rem";

descriptionPink.appendChild(buttonModifyText);

// Ajout d'un gestionnaire d'événement au bouton
buttonModifyText.addEventListener("click", () => {
    const userName = prompt("Enter your name :");
    
    if (userName) {

        const textElement = document.getElementById("firstname");
        textElement.textContent = userName;
        textElement.style.color = "#ffffff" ;
        descriptionPink.style.backgroundColor = "#750ff7";
      }
    })




// // Onsubmit we will run a function
// form.onsubmit = function (event) {
//   // We want to prevent the page to reload
//   event.preventDefault();

//   // We create a variable that we set to a new li node
//   const newTodo = document.createElement("li");
//   // We add the text to the li
//   newTodo.innerHTML = inputTodo.value;
//   // We add the li to the ul 
//   todolist.appendChild(newTodo);
//   // We clear the value of the input
//   inputTodo.value = "";
// };