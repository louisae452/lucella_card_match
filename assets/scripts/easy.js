// Wait for document to load befor running the script.
let number_turns=0; //Counts how many cards are turned.
let number_moves=0; // Counts the number of move the player has made. For score.
// Array of available cards.
const available_cards = ["billy.webp", "boris.webp","boris_superman.webp", "clowny.webp", "detective_zebra.webp", "elvis.webp", "felix.webp", "foxy.webp", "georgie.webp", "kristy.webp", "military_leader.webp", "monty.webp", "monty_space.webp", "p199y.webp", "parasee_draw.webp", "parasee_incognito.webp", "penny.webp", "penny_cardboard.webp", "penny_minnie.webp", "penny_summer.webp", "pony.webp", "superjakejosecat.webp", "superluisacat.webp", "tigry.webp","troll.webp"];
// Array of available positions.
const total_available_positions = ["image-1e", "image-2e", "image-3e", "image-4e", "image-5e", "image-6e", "image-7e", "image-8e", "image-9e", "image-10e", "image-11e", "image-12e", "image-13e", "image-14e", "image-15e", "image-16e", "image-17e", "image-18e", "image-19e", "image-20e"];

let turncard = document.querySelectorAll(".card-inner");
console.log("turncard length" + turncard.length);

document.addEventListener("DOMContentLoaded", function() {
    // Populate the board.
    populate_board();
    //Event listenter to turn card back on click. 
    setevent();
    //Event listener to reset the game.
    let reset = document.getElementById("reset-button");
    reset.addEventListener("click", function(){
        reset_cards();
        reset_number_turns();
        reset_number_moves();
        populate_board();
        setevent();
    });
    
                  
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
                },1000);
            } else {
                console.log(" no match");     
            }
            // Turn back upturned class
            setTimeout(function(){      
                card1.classList.remove("upturned");
                card2.classList.remove("upturned");
            }, 2000);
            // Set event listener back.
            setTimeout(function(){
                setevent();
            }, 2000);
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


//Function to populate board with random card-pairs in random positions.
function populate_board() {
    // Cut the number of positions to the number of cards.
    let available_positions =total_available_positions.slice(0, (turncard.length));
            console.log(available_positions);

    // Choose a random card (6 times).
    for (let i=0; i<(turncard.length/2); i++) {
            let random_card_index = Math.floor(Math.random() *(available_cards.length - 1));
            console.log(random_card_index);
            
            //Choose a random position (2 times)
            for (let n=0; n<2; n++) {
                
                let random_position_index = Math.floor(Math.random() * (available_positions.length -1));
                console.log(random_position_index);
                // Get position of card by id
                let position_chosen = document.getElementById(available_positions[random_position_index]);
                console.log(position_chosen);
                // set position's image
                position_chosen.setAttribute("src", `assets/images/cards/${available_cards[random_card_index]}`);
                console.log(position_chosen);
                // Remove position from available_positions.
                available_positions.splice(random_position_index, 1);
        };
        //Remove card from available_cards.
        available_cards.splice(random_card_index, 1);
    };
} 

// Function to reset the cards:
function reset_cards() {
    let cards_to_reset = document.querySelectorAll(".card-reset");
    console.log(cards_to_reset);
    cards_to_reset.forEach(cards_to_reset => {
        cards_to_reset.classList.add("card-inner");
        cards_to_reset.classList.remove("card-match");
        cards_to_reset.classList.remove("upturned");
    });
    console.log(cards_to_reset);
}
// Function to reset the number of turns.
function reset_number_turns() {
    number_turns = 0;
    return number_turns;
}
// Function to reset the number of moves.
function reset_number_moves() {
    number_moves = 0;
    return number_moves;
}

    
