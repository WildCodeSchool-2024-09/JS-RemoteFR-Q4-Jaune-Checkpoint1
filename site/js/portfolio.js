document.getElementById("image").addEventListener("click", function() {
    if(this.scroll.includes("avatar-2191931_1280.png")) {
        this.src = "avatar-bis.png";
    }
    else {
        this.src = "avatar-2191931_1280.png";
    }
});
function changerCouleur() {     
    document.body.style.backgroundColor = "#750ff7";
    }