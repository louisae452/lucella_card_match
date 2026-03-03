// Wait for document to load befor running the script.
let number_turns=0; //Counts how many cards are turned.
let number_moves=0; // Counts the number of move the player has made. For score.
let turncard = document.querySelectorAll(".card-inner");
document.addEventListener("DOMContentLoaded", function() {

    ////Event listenter to turn card back on click. 
    setevent();
                  
});
// Function to set eventlistener to turn cards round when clicked.
function setevent() {
    turncard.forEach(turncard => {     
    turncard.addEventListener("click", turncard2);
   });   
}
   
// Function to turn cards on click. (stops after 2 cards have been turned).
function turncard2(e) {               
    let card = e.currentTarget;
    if (card.classList.contains("upturned")) {
        console.log("already used");//Add alert message (quick animatios oops?)
    } else {                 
    card.classList.add("upturned");

    number_turns++;
    console.log(number_turns); // DELETE LATER
    };

    // Remove event listener after 2 cards have been turned .            
    if (number_turns == 2) {
        turncard.forEach(turncard => { 
            turncard.removeEventListener("click", turncard2);
        });                     
        check_answer();  
        number_moves++;
        console.log(number_moves); //Add to counter element in html.           
    };
} 

// Checks if the 2 cards turned are a match.
function check_answer() {
     
            let cardsup = document.querySelectorAll(".upturned");
            //get src attribute of the first card.
            let card1 = cardsup[0];
            console.log(card1.classList);
            let card1_image = card1.getElementsByClassName("image")[0].getAttribute("src");
            console.log(card1_image);
            //ger src attribuate of the second card.
            let card2 = cardsup[1];
            console.log(card2);
            let card2_image = card2.getElementsByClassName("image")[0].getAttribute("src");
            console.log(card2_image);
        
            // Check if cards match.
            if (card1_image === card2_image) {
                console.log("match");
                //Remove cards form board.
                setTimeout(function() {    
                    card1.classList.add("card-match");
                    card2.classList.add("card-match");     
                    console.log(card2.classList);    
                },2000);
                // remove cards from nodelist.
                setTimeout(function() {
                    remove_cards(card1, card2);  
                },3000);
            } else {
                console.log(" no match");     
            }
            // Turn back upturned class
            setTimeout(function(){      
                card1.classList.remove("upturned");
                card2.classList.remove("upturned");
            }, 1000);
            // Set event listener back.
            setTimeout(function(){
                setevent();
            }, 4000);
            // Reset number of upturned cards on board.
            number_turns = 0;
            return number_turns; 

}
//Function to remove matching cards from nodelist.
function remove_cards(card1, card2) {
    card1.classList.remove("card-inner");
    card2.classList.remove("card-inner");
    turncard= document.querySelectorAll(".card-inner");
    console.log(turncard);
    let cards_left = turncard.length;
    console.log(cards_left);
    if (cards_left == 0) {
        let congrat_message_box = document.getElementById("congratulations");
        congrat_message_box.classList.remove("hidden");
        let congrat_message = document.getElementById("message");
        congrat_message.innerText =`CONGRATULATIONS! YOU CLEARED THE BOARD IN ${number_moves} MOVES!`;
    };
    return turncard;
}

       


    
