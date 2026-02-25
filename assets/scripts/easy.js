// Wait for document to load befor running the script.
document.addEventListener("DOMContentLoaded", function() {
    ////Event listenter to turn card back on click.
    let cardinner = document.getElementById("card-inner");
    
    cardinner.addEventListener("click", function() {
        
        cardinner.style.transition = "transform 2s";
        cardinner.style.transform = "rotateY(180deg)";
        cardinner.style.transformStyle = "preserve-3d";
        
    });
    

});