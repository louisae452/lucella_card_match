// Wait for document to load befor running the script.
let number_turns=0; //Counts how many cards are turned.
let number_moves=0; // Counts the number of move the player has made. For score.
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
    card.classList.add("upturned");

    number_turns++;
    console.log(number_turns); // DELETE LATER
    // Remove event listener after 2 cards have been turned .            
    if (number_turns == 2) {
        turncard.forEach(turncard => { 
            turncard.removeEventListener("click", turncard2);
        }); 
                        
    
        check_answer() 
        
            
    };
} 

// Checks if the 2 cards turned are a match.
function check_answer() {
     
            let cardsup = document.querySelectorAll(".upturned");
            //get src attribute of the first card.
            let card1 = cardsup[0];
            console.log(card1);
            let card1_image = card1.getElementsByClassName("image")[0].getAttribute("src");
            console.log(card1_image);
            //ger src attribuate of the second card.
            let card2 = cardsup[1];
            console.log(card2);
            let card2_image = card2.getElementsByClassName("image")[0].getAttribute("src");
            console.log(card2_image);
        
            
            if (card1_image === card2_image) {
                console.log("match");


            } else {
                console.log(" no match");
            }
}

       


    
