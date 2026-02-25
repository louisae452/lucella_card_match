// Wait for document to load befor running the script.
document.addEventListener("DOMContentLoaded", function() {
    ////Event listenter to turn card back on click.
    let cardinner = document.getElementById("card-inner");
    let turncard = document.querySelectorAll(".card-inner");
    
    
    // Turn the cards as they are clicked on.
    turncard.forEach(turncard => {
        turncard.addEventListener ("click", function() {
            this.style.transition = "transform 2s";
            this.style.transform = "rotateY(180deg)";
            this.style.transformStyle = "preserve-3d";

        });
    });
    
    

});