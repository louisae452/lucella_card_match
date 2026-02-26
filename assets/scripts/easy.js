// Wait for document to load befor running the script.
let number_turns=0;
let turncard = document.querySelectorAll(".card-inner");
document.addEventListener("DOMContentLoaded", function() {

    ////Event listenter to turn card back on click.    
   turncard.forEach(turncard => {     
    turncard.addEventListener("click", turncard2);
   });   
    
            
});

// Function to turn cards on click. (stops after 2 cards have been turned).
function turncard2(e) {               
    let card = e.currentTarget;                
    card.style.transition = "transform 2s";
    card.style.transform = "rotateY(180deg)";
    card.style.transformStyle = "preserve-3d";
    number_turns++;
    console.log(number_turns); // DELETE LATER
    // Remove event listener after 2 cards have been turned .            
    if (number_turns == 2) {
        turncard.forEach(turncard => { 
            turncard.removeEventListener("click", turncard2);
        });                     
    }
}    
       


    
