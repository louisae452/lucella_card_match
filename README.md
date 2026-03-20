# Lucella game card.

[View the finished project here.](https://louisae452.github.io/lucella_card_match/)

The buzzword of the neurological world this days is neuroplasticity. Long gone are the days where we thought that once you reach your forties, fifties at best, the only way is downhill. It is now a recognized fact that your brain is continuously developing, creating new neurological connexions and pruning unused pathways. 

But keeping your brain in top working condition requires some work. While the idea of learning a new language, playing a new instrument or even starting coding later in life is certainly aspirational, finding the time in today’s busy world may not be easily achievable.

That is where simple, easy brain  games can make a difference. In particular, memory games that require the player to concentrate and pay attention can help to improve and maintain cognitive abilities. They target short term memory which, in turn, can help maintain long term memory.

Lucella card match is a basic card matching game. A set of cards will be laid down on the board and, turning only one pair of cards at a time, the player needs to eliminate cards by matching pairs correctly. The game finishes when all the board is empty.

Although the game will use cards based on the characters of the series “Piggy before the infection started” to appeal to the series’ followers, it will be just as easily played by anybody, young and old alike.

## Contents.
1. [Business goals.](#1-business-goals)

2. [User needs](#2-user-needs)

3. [User stories.](#3-user-stories)

4. [Design.](#4-design)

5. [Typograpy and colour scheme.](#5-typography-and-colour-scheme)

6. [Changes to the design.](#6-changes-to-the-design)

7. [Features.](#7-features)

8. [The logic behind the game.](#8-the-logic-behind-the-game)

9. [Testing.](test-log.md)

    1. [Navigation.](test-log.md#1-navigation)
    
    2. [Functionality.](test-log.md#2-functionality)
    
    3. [User stories.](test-log.md#3-user-stories)
    
    4. [User experience.](test-log.md#4-user-experience)
    
    5. [Responsiveness.](test-log.md#5-responsiveness)
    
    6. [Validation.](test-log.md#6-validation)
    
    7. [Lighthouse.](test-log.md#7-lighthouse)
    
    8. [Bugs.](test-log.md#8-bugs)

10. [Deployment.](#10-deployment)

11. [Languages used.](#11-languages-used)

12. [Frameworks, libraries and programs.](#12-frameworks-libraries-and-programs)

13. [Media.](#13-media)

13. [Acknowledgements.](#14-acknowledgements)

## 1. Business goals.

- To create a game that is easily taken up and entertains.
- To create a game that appeals to Piggy Before the Infection Started followers.
- To increase the visibility of the Piggy Before the Infection Started franchise.
- To provide a game that helps improve cognitive functions.
- To provide a game that provides increasing challenge.

## 2. User needs.

- To have a game that can be taken up easily during a short interval of free time.
- To be able to understand easily how the game works.
- To be able to choose the right level of challenge.
- To get quick and easy to understand feedback on the results of the game.
- To be able to see progress in gaming ability.
- To be able to conect to the 'Piggy Before the Infection Started' home page easily.

## 3. User stories.

- As the developer:

    - I want a game that is easy to understand so that users can take it up easily.
    - I want a game that provides different levels of challenge so the game difficulty does not discourage players and players can see progression on their ability.
    - I want a game that is not repetitive so that players don't become easily bored.
    - I want a game that appeals to Piggy Before the Infection Started so that they feel cared for by the series' creator.
    - I want a game that enhances visibility for the Piggy Before the Infection Started series so that new users may get interested in watching it.
    - I want a link to the Piggy Before The infection Started home page so that new users can easily find information and watch the series.
    - I want all pages to navigate back to the main game page so that users don't need to waste time navigating.
    - I want for users to have a way to provide feedback so that I can use it to inform future upgrades to the game.

- As a user:

    - I want a game that I can take up easily so that I can play when I just have a few free minutes.
    - I want a game that doesn't get repetitive so that if I have more time, I don't get bored playing it.
    - I want a game which provides increasing challenge so that I can challenge myself to get better. 
    - I want to be able to rate the game so that I know that my opinion matters.

- As a Piggy Before the Infection Started follower:

    - I also want a game that portrays my favourite characters so that I can feel closer to the series.

## 4. Design.

Lucella card matching is a simple card matching games. The player will be able to choose a board made of 4 x 3, 4 x 4 or 5 x 5 cards turned upside down. By uncovering two cards at a time, the player needs to find matching pairs of cards. Each time a pair is matched, it disappears until the board is empty. 

On loading the game, the player will be presented with a home page.  By clicking on the play button, an option to choose the appropriate level of challenge will appear. This will lead to the desired game page.

The game pages will contain the main board for the game. A link to go back to the home page will be provided, as well as a toggle to get rid of sound effects. A timer will count the time it takes for the board to be emptied. A reset button will be provided.
Once the board is empty, a congratulations message will appear. 

All pages will contain a section with a link to the Piggy Before the Infection Started home page and a rate the game feature.

On clicking on the rate the game, a window will appear so that players can rate the game and give feedback.

[Home page wireframe for larger screens](/assets/images/readme_images/wireframes/home-page-wireframe-%20large.jpg)

[Home page wireframe for small screens](/assets/images/readme_images/wireframes/home-page-wireframe-small.jpg)

[Game page wireframe](/assets/images/readme_images/wireframes/game-page-wireframe.jpg)


## 5 Typography and colour scheme.

As the game will be used to promote the Piggy Before the Infection Started series, it will use the same colour scheme as the series’ webpage. It will also use the same favicon.

![Piggy Before The Infection Started series colour pallete](/assets/images/readme_images/colour_pallete.jpg)

It will also use the bangers and risque fonts from google fonts.

## 6. Changes to the design.

Throrough the development, some changes were made to the original design.

In the home page, the footer was styled with the same colour as the main area. A simple link to the Piggy Before the Infection Started webpage was provided.

The level buttons in small screens ended up having the samae disposition as in the larger screens, although less width was given to them.

In larger screens, some of the Piggy characters were added to fill thte screen up.


![Home page](/assets/images/readme_images/features/home-page.jpg)

The rate the game feature was moved to the game pages.

In the game pages, both the footer and header were styled in the main game area colour.

The footer, once again, contained only the link to the Piggy Before The Infection Started.

In the header, icons linking to the home page and offering reset, rate the game and instructions were added.

The timer was eliminated in favour of evaluating the success in the game by providing the number of moves needed to clear the board at the end of the game.

![Game page](/assets/images/readme_images/features/game-page-full.jpg)

In smaller screens, it was found that hte medium and hard levels neede the cards to be too small to be seen comfortably on the portrait orientation. A message prompting to turn the device appears. On the landscape orientation, the board shows 6 x 2, 8 x 2 and 10 x 2 cards.

A new green colour, #dffce0 was added to fill th4e ack of the csrds and the rate, info and congratulations boxes.

The font Henny Penny was added to be used for the title.


## 7. Features.

The game consists of a  home page and three games pages to provide levels easy, medium and hard.

The home page contains a start button which, when pressed, shows three buttons labelled easy, medium and hard that link to each of the game pages.

![Home page](/assets/images/readme_images/features/home-page.jpg)

Each of the game pages features a menu area at the top of the page with the following icons:

- Home, to return to the home page.

- Reset, to reset the game at the current level.

- Rate provides a pop- up box which allows the user to rate the game.

- Info produces a pop-up box with the game instructions.

![Menu area](/assets/images/readme_images/features/icons.jpg)

The game area shows the cards displayed on the board. The display shows 4 x 3, 4 x 5 and 5 x 4 cards on medium and large screens.

![Easy board, large screens](/assets/images/readme_images/features/board-easy-large.jpg)
![Medium board, large screens](/assets/images/readme_images/features/board-medium-large.jpg)
![Hard board, large screeens](/assets/images/readme_images/features/board-hard-large.jpg)


In small phones used in portrait orientation, the game area shows 3 x 4 cards on the easy level and a message to turn the phone round on levels medium and hard.

![Easy board, portrait](/assets/images/readme_images/features/board-easy-portrait.jpg) 
![Medium board, portrait](/assets/images/readme_images/features/board-medium-portrait.jpg)

When used in landscape orientation, the game area shows 6 x 2, 8 x 2 and 10 x 2 cards.

![Easy board, landscape](/assets/images/readme_images/features/board-easy-landscape.jpg)
![Medium board, landscape](/assets/images/readme_images/features/board-medium-landscape.jpg)
![Hard board, landscape](/assets/images/readme_images/features/board-hard-landscape.jpg)

On complection of the game, a congratulations message tells the user the number of moves that were required to finish the game.

![Congratulations message](/assets/images/readme_images/features/congratulations.jpg)

At the bottom of each page, a link leads to he Piggy Before the Infection Started series webpage.

![Piggy link](/assets/images/readme_images/features/piggy-link.jpg)

## 8. The logic behind the game.

On loading the game page, the following things happen:

- The board is populated with random card-pairs using the populate_board() function;

- An event listener is used to turn only two cards on click using the setevent() function.

 - An event listener is used to reset the game. This resets the card board to a newly populated board, resets the number of cards turned on the board and the number of moves, clears the congratulations message if it was loaded and re-starts the game with the setevent() function.

 - An event listener to rate the game which makes the rate-box visible, sets the rating with the rate_game() function and sets event listeners to submit the rating and exit the box.

 - An event listener to show and hide instructions.

 The setevent()function, which runs the main game, uses the turncard2() function to allow for only two cards at a time to be turned, and then uses the check_answer() function to check if the two cards are equal, in which case they are removed with the remove_cards() function or not so they are turned back. The number of moves is then increased by one and the setevent() function is run again.

 The remove_cards() function, as well as removing the matching cards from the board, checks wether the board is empty and if it is, shows a congratulations message indicating the number of moves that were needed to complete the game.

## 9. Testing.

The log of all the tests done can be found here. [Lucella card match test log](test-log.md)

## 10. Deployment.

The project was deployed in [GitHub](https://github.com/).

The process followed was:

- On GitHub, navigate to the project page: https://github.com/louisae452/lucella_card_match.
- Go to settings.
- On the general menu on the left, go to pages.
- Select main branch and save.
- To access the deployed site, click on the deployments section on the right side of the main project page.

The site can be accessed from: https://louisae452.github.io/lucella_card_match/

### Local deployment.

To fork the project:

- On Github, mavigate to the project page: https://github.com/louisae452/lucella_card_match.
- Click on the fork icon.
- Select new branch.
- Give the branch a name and save.

To clone the project:

- On Github, navigate to the project page: https://github.com/louisae452/lucella_card_match.
- Click on the code button.
- Copy the address shown.
- Open your code editor.
- On the terminal, navigate to the desired directory.
- Type 'git clone' followed by the address you copied.
- Press enter.

## 11. Languages used.

HTML, CSS, JavaScript.

## 12. Frameworks, libraries and programs.

To deploy the game: [GitHub](https://github.com/).

To choose additional green colour: [Canva](https://www.canva.com/colors/color-wheel/).

To choose title font: [Google Fonts](https://fonts.google.com/).

To choose icons: [Font Awesome](https://fontawesome.com/).

To manipulate pictures: Microsoft photos.

To convert pictures: Pixillion Image Converter.

To write the readme file: [Markdown Guide: Basic Syntax.](https://www.markdownguide.org/basic-syntax/)

To make favicon: [favicon.io](https://favicon.io/).

To test the site: Google Dev Tools.

To test the HTML: [w3 HTML validator](https://validator.w3.org/#validate_by_upload)

To test the CSS: [w3 CSS validator](https://jigsaw.w3.org/css-validator)

To test the JS: [JSLint](https://www.jslint.com/)

For general information: [w3schools](https://www.w3schools.com/).

To choose image sizes: [Website image size guidelines for 2026.](https://www.shopify.com/blog/image-sizes)

Flex-box: [Flexbox froggy](https://flexboxfroggy.com/)

To handle orientation : [Sling Academy](https://www.slingacademy.com/article/enhance-mobile-uis-by-checking-orientation-in-javascript/)

## 13. Media.

All images used on the site were created by SuperJakeJoseCat.

## 14. Acknowledgements.

This project would not have been possible without the following people:

My tutor, Kevin Loughrey who helped and encouraged me through  the development of the project.

My friend and colleague, Veronica Teodorof for always being supportive and sharing very valuable tips.

My sister, Tere Roncero for pointing out that the reset button was not working properly.

My family for their unconditional support.

SuperJakeJoseCat who provided all the images and listened to me rambling on non stop.