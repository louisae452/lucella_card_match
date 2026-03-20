# Lucella card match test log.

## Contents.

1. [Navigation.](#1-navigation)

2. [Functionality.](#2-functionality)

3. [User stories.](#3-user-stories)

4. [User experience.](#4-user-experience)

5. [Responsiveness.](#5-responsiveness)

6. [Validation.](#6-validation)

7. [Lighthouse.](#7-lighthouse)

8. [Bugs.](#8-bugs)


## 1. Navigation.

|Date|Link|Expected result|Pass/Fail|
|:---|:----|:----|:---|
|**Home page.**| | | |
|19/03/26|Start button|Level buttons appear.|Pass|
|19/03/26|Easy button|Links to easy level game page.|Pass|
|19/03/26|Medium button|Links to medium level game page.|Pass|
|19/03/26|Hard button|Links to hard level game page.|Pass|
|19/03/26|Piggy link|Opens Piggy webpage on new window.|Pass|
|**Easy level game page.**| | | |
|19/03/26|Home icon.|Links to home page.|Pass|
|19/03/26|Rate icon.|Opens rate box.|Pass|
|19/03/26|Rate box submit button.|Opens thank you box.|Pass|
|19/03/26|Rate box exit button.|Clears rate box if rating available.|Pass|
|19/03/26|Thank you box exit button.|Clears the thank you box.|Pass|
|19/03/26|Info icon.|Opens info box.|Pass|
|19/03/26|Piggy link|Opens Piggy webpage on new window.|Pass|
|**Medium level game page.**| | | |
|19/03/26|Home icon.|Links to home page.|Pass|
|19/03/26|Rate icon.|Opens rate box.|Pass|
|19/03/26|Rate box submit button.|Opens thank you box.|Pass|
|19/03/26|Rate box exit button.|Clears rate box if rating available.|Pass|
|19/03/26|Thank you box exit button.|Clears the thank you box.|Pass|
|19/03/26|Info icon.|Opens info box.|Pass|
|19/03/26|Piggy link|Opens Piggy webpage on new window.|Pass|
|**Hard level game page.**| | | |
|19/03/26|Home icon.|Links to home page.|Pass|
|19/03/26|Rate icon.|Opens rate box.|Pass|
|19/03/26|Rate box submit button.|Opens thank you box.|Pass|
|19/03/26|Rate box exit button.|Clears rate box if rating available.|Pass|
|19/03/26|Thank you box exit button.|Clears the thank you box.|Pass|
|19/03/26|Info icon.|Opens info box.|Pass|
|19/03/26|Piggy link|Opens Piggy webpage on new window.|Pass|



## 2. Functionality.

|Date tested |Test | Expected result | Result | Pass/Fail |Next|
|:---- |:----|:----|:----|:----:|:----|
|26/02/26|All cards turn |All cards should turn round when clicked on | All cards turn round when clicked on | Pass|Only two cards can be turned in one play|
|26/02/26| Only two cards should turn round at a time| The third card clicked does not turn round | The third card does not turn round | Pass | Check if cards match. Remove if they do; reset if they do not.|
|27/02/26|Turn two matching cards up|"match" should be logged to the console. |"match" is logged to the console.|Pass|Check when cards do not match.|
|27/02/26|Turn two non-matching cards up.|"no match" should be logged to the console.|"no match" is logged to the console.| Pass|Turn cards back if cards do not match. Remove cards if they do.|
|27/02/26|Turn two un-matched cards. |Cards should turn back round after 2 seconds.| Cards turn round after 2 seconds.|Pass| Set eventlistener back so that a new pair can be turned.|
|27/02/26|Turn two un-matched cards. Turn another pair of cards after the first one turns back.|It should be possible to turn a second pair of cards.|A second pair of cards is turned on click|Pass|Remove pair of matched cards.|
|27/02/26|Turn two matching cards.| Matching cards should be removed.| Matching cards are removed.|Pass|Turn the next set of cards.|
|27/02/26|Turn another pair of cards after matching pair has disappeared.|A pair of cards should turn.|A pair of cards turns.|Pass|Empty the board.|
|27/02/26|Match all card pairs.|The board should empty.|The board empties.|Pass|Click on an already emptied space.|
|27/02/26|Click on an already emptied card.|It should be possible to still turn two cards.The two cards should react.|It is not possible to turn two cards. The card reacts according to the emptied card slot.|Fail.|Remove event listener from empty card slot.|
|02/03/26|Click on an already emptied card.|The empty slot should not react. It should still be possible to turn two cards.|The empthy slot does not react. Two new cards can be upturned.|Pass|Click on the same card twice.|
|02/03/26|Click on the same card twice.|The second card should not affect the game.| The second click crashes the game.| Fail|Stop the game being affected by the second click.|
|02/03/26|Click on the same card twice.|The second click should not crash the game.|the second click sends a message to the console.It is possible to click a second card.|Pass|Count number of moves taken.|
|02/03/16|The game logs the number of moves taken.|Play the game. Each time a pair of cards is turned, the number of moves should increase by one.|The number of moves logged onto the console increases by one each time a pair of cards is played.|Pass|Create message when the board has been emptied.|
|02/03/26|The game logs a congratulations message when the board is cleared.|Play the game. When the board is emptied, a congratulations message should be logged onto the conlole.|A Congratulations message is logged onto the console.|Pass|Create element to display congratulations message. Populate the board with random cards.| 
|02/03/26| Congratulations message appears when board is cleared.|Play the game. When the board is cleared, a congratulations message with the number of moves used should appear.|A congratulations message with the number of moves used appears when the board is cleared.|Pass|Populate the board with random cards.|
|03/03/26| The game gets populated with random card-pairs.|Play the game. The game should be populated by a set of six card-pairs in random positions.|The game gets populated by 6 random pairs of cards. All images appear at some point.|Pass|Set medium level page. Set hard level page.|
|05/03/26|The medium level game plays correctly.|Play the medium game. The board should be populated by 8 random pairs of cards. It should be possible to clear the board. A congratulations message appears.|The board is populated by 8 random pairs of cards. It is possible to clear the board. A congratulations message appears.|Pass|Set hard level game.|
|05/03/26|The hard game plays correctly.|Play the hard game. The board should be populated by 10 random pairs of cards in random positions. It should be possible to clear the board. A Congratulations message should appear.|The board is populated by 10 pairs of cards in random positions. It is possible to clear the board. A congratulations message appears.|Pass|Set reset button.|
|05/03/26|The reset button works (easy level).|Play the game easy level. Half way through the game, press the reset button. The board should get populated again.|The reset button re-populates the board when in the middle of the easy game.|Pass|Set reset button in medium level.|
|05/03/26|The reset button works (medium level).|Play the game medium level. Half way through the game, press the reset button. The board should get populated again.|The reset button re-populates the board when in the middle of the medium game.|Pass|Set the reset button in the hard level.|
|05/03/26|The reset button works (hard level).|Play the game hard level. Half way through the game, press the hard game. The board should get populated again.|The reset button re-populates the board when in the middle of the hard game.|Pass|Add the moves counter to the screen.|
|18/03/26| Reset button hides success message after completing the game.|Play the game until completed. Press reset button. Success message should disappear and a new game should load.|After pressing the reset button, the success message disappears and a new game is loaded.|Pass|
|18/03/26|Rate icon brings up a prompt to give the game stars.|Press the rate icon. A prompt to give the game stars should appear.|The prompt appears.|Pass|Test stars.||
|18/03/26|When a star is clicked on on the rate prompt, all the stars below it are highlighted.| Press the rate icon. Press one of the stars. That star and the stars to its left should be highlighted.|The required number of stars is highlighted.|Pass|Test submit button.|
|18/03/26|After pressing the submit button on the rate prompt, a thank you message appears if a rating has been given.| Press the rate icon. Highlight some stars. Press submit. A thank you message should appear.|A thank you message appears after submiting.|Pass|Submit whithout a rating.|
|18/03/26|If there is no rating, the submit button has no effect.|Press the rate icon. Press the submit button without highlighting any stars. Nothing should happen.|Nothing happens when the submit button is pressed before highlighting any stars.|Pass|Test exit button|
|18/03/26|The exit button makes the rate prompt disappear|Press the rate icon. Highlight some stars. Press the exit button. The rate prompt should disappear. When the rate icon is pressed again, the stars should not be highlighted.|The rate prompt disappears when the exit button is pressed. When the rate icon is pressed again, the stars are not highlighted.|Pass|Test the exit button on the thank you message.|
|18/03/26|The thank you message disappears when the exit button is pressed. The stars are reset.|Press the rate icon and highlight some stars. Press the submit button. Press the exit button on the thank you message that appears.The message should disappear. When the rate icon is pressed again, the stars should have been reset.|The message disappears after pressing exit on the thank you message. When the rate icon is pressed again, the stars are not highlighted.|Pass|
|18/03/26|When the info icon is pressed, a box with the game instructions appears.|Press the info icon. The instructions box should appear.|The instructions box appears after pressing the info icon.|Pass|Test the exit button.|
|18/03/26|When the exit button on the info box is pressed, the instructions box disappears.|Press the info icon. Press the exit button on the info box. The box should disappear.| The info box disappears when the exit button is pressed.|Pass.|

## 3. User stories.

- The game is easy to navigate by pressing the start button and then the required level button. The name of the game gives a clear indication of what the game is about and the info box gives clear instructions. 

![Info box](/assets/images/readme_images/testing/info-box.jpg)

- The game provides three different levels of challenge, easy, medium and hard so that users can choose the level of challenge they desire. I they start in an easy level, they can eventually progress onto the medium and hard levels.

- Players are also told how many moves they needed to empty the board so they can try to beat their own record.

- The game contains 20 different pairs of cards which are randomly selected each time the board is loaded. This makes sure that the users cannot learn the pattern, so the game does not become repetitive.

- The game uses the characters from the Piggy Before the Infection Started series. This will appeal to Piggy fans and will also enhance the visibility of the series so that new users may watch it. The link at the bottom of the page allows new users to easily find the series.

- Users can provide quick feedback by means of the rate box. This ensures that they feel listened to.

![Rate box](/assets/images/readme_images/testing/rate-box.jpg)
    
## 4. User experience.

|Date|Poblem|Solution|
|:----|:----|:----|
|05/03/26. |After a pair of exposed cards has been dealt with, it takes too long to be able to turn the next card on the board. That can be frustated.|The time function to get reset the eventListener was adjusted.|

## 5. Responsiveness.

The game was tested on the following devices:

Inspiron 16 laptop:

![Inspiron home page](/assets/images/readme_images/responsiveness/Inspiron-home.jpg)
![Inspiron game page](/assets/images/readme_images/responsiveness/inspiron-game.jpg)

Ipad Air 5th generation:

![Ipad home landscape](/assets/images/readme_images/responsiveness/ipad-home-landscape.png)
![Ipad home portrait](/assets/images/readme_images/responsiveness/ipad-home-portrait.png)

![Ipad game landscape](/assets/images/readme_images/responsiveness/ipad-game-landscape.png)
![Ipad game portrait](/assets/images/readme_images/responsiveness/ipad-game-portrait.png)

Samsung Galaxy S25 phone:

![S25 home landscape](/assets/images/readme_images/responsiveness/s26-home-landscape.jpg)
![S25 home portrait](/assets/images/readme_images/responsiveness/s26-game-portait.jpg)
![S25 game landscape](/assets/images/readme_images/responsiveness/s26-game-landscape.jpg)
![S25 game portrait](/assets/images/readme_images/responsiveness/s26-game-portait.jpg)

Iphone 16 pro max:

![Iphone home landscape](/assets/images/readme_images/responsiveness/iphone-home-landscape.jpg)
![Iphone home portrait](/assets/images/readme_images/responsiveness/iphone-home-portrait.jpg)
![Iphone game landscape](/assets/images/readme_images/responsiveness/iphone-home-landscape.jpg)
![Iphone game portrait](/assets/images/readme_images/responsiveness/iphone-game-portrait.jpg)

Some additional tests were made to ensure that all the features fit in small screens both in portrait and landscape orientations.

|Date|Feature|Expected result|Result|Pass/fail|
|:---|:-----|:----|:----|:----|
|11/03/26|Display on small devices changes to fit all cards on screen when device is rotated.|Switch small devices between portrait and landscape orientation in each of the levels. The disposition of the cards on the board should change so they fit evenly on the screen.|The position of the cards changes depending on whether the small device is used in portrait or landscape orientation.|Pass|
|11/03/26|Message to rotate the device appears on small devices asking to rotate device in medium and hard levels.|Start game in medium and hard levels in small devices in portrait orientation. A message to rotate the device should appear. The message should disappear when the device is rotated landscape.|A message appears when medium and hard levels are played in portrait on small devices. The message disappears when the device is rotated. It appears again when the device is rotated back to portrait.|Pass|
|12/03/26|Success message shows fully on landscape screen.|Play the game on landscape. The success message should show fully on the screen.|The success message shows fully on the screen on landscape.| Pass.| 
|19/03/26|Success message shows fully on portrait screen.|Play the game on portraitt. The success message should showfully on the screen.|The success message shows fully on the screen on portrait.|Pass|
|19/03/26|Rate box shows fully on portrait when the rate icon is clicked.|Go to the game page on portrait. Click on the rate icon. The rate box should show fully on the screen.|The rate box shows fully on the screen.|Pass|
|19/03/26|Rate box shows fully on landscape when the rate icon s clicked.|Go to the game age on landscape. Click on the rate icon. The rate box should show fully on the screen.|The rate box shows fully on the screen when on landscape.|Pass|
|19/03/26|Info box shows fully on portrait when the info icon is clicked.|Go to the game page on portrait. Click on the info icon. The info box should show fully on the screen.| The info box shows fully on portrait.|Pass|
|19/03/26|Info box shows fully on landscape when the info icon is clicked.|Got to the page game on landscape. Click on the info icon. The info box should show fully on the screen.|The info box shows fully on landscape.|Pass|

## 6. Validation.

The html files were validated using the [w3 HTML validator](https://validator.w3.org/#validate_by_upload).

No errors wer found on the index.html file.

![index.html validation](/assets/images/readme_images/validation/index-html.jpg)

However, the game pages showed some errors. Those relate to the src attribute on the cards images being empty. This is necessary, as the attribute will be decide by the populate_board() function on the game.js file..

![easy.html validation image 1](/assets/images/readme_images/validation/easy-html-1.jpg)

The last error refers to the congratulations message when the board is emptied. Again, the text on that message is produced by the game.js file when the number of moves needed is determined.

![easy.html validation image 2](/assets/images/readme_images/validation/easy-html-2.jpg)

Validation for the CSS code was done with the [w3 CSS validator](https://jigsaw.w3.org/css-validator/validator)

No errors were found.

![styyles.css validation](/assets/images/readme_images/validation/styles-css.jpg)

Validation for the js code was done with [js Lint] (https://www.jslint.com/)

The script.js file showed not errors.

![script.js validation](/assets/images/readme_images/validation/script-js.jpg)

The game.js file showed one warning. However, the js Lint documentation specifies that it does not allow for ES6 forms of for statements.

![game.js validation](/assets/images/readme_images/validation/game-js.jpg)

## 7. Lighthouse.

Lighthouse was run on all pages on Google Dev Tools. These are the results.

Scores for the home page on desktop and mobile.

![Home page desktop](/assets/images/readme_images/lighthouse/home-desktop.jpg)
![Home page mobile](/assets/images/readme_images/lighthouse/home-mobile.jpg)

Scores for the easy level page on desktop and mobile.

![Easy level desktop](/assets/images/readme_images/lighthouse/easy-desktop.jpg)
![Easy level mobile](/assets/images/readme_images/lighthouse/easy-mobile.jpg)

Scores for the medium level page on desktop and mobile.-

![Medium level desktop](/assets/images/readme_images/lighthouse/medium-desktop.jpg)
![Medium level mobile](/assets/images/readme_images/lighthouse/medium-mobile.jpg)

Scores for the hard level page on desktop and mobile.

![Hard level desktop](/assets/images/readme_images/lighthouse/hard-desktop.jpg)
![Hard level mobile](/assets/images/readme_images/lighthouse/hard-mobile.jpg)

## 8. Bugs.

- After testing the responsive design on Google Developer Tools, the game was tested on mobile phones. It was found that, although it worked on iphone, the display on Samsung phones did not correspond with the image produced by the Developer Tools.

![Image of early display on Samsung phones](/assets/images/readme_images/testing/s25-test1.jpg)

The problem was solved by reducing the size of the cards for small screens in landscape orientation.

- Later on, it was found that while the display in portrait orientation worked fine, if the Samsung phone was rotated from landscape to portrait, the display was not correct. This problem had not been highlighted by Google Developer Tools either.

![Image of display after rotating Samsung phones](/assets/images/readme_images/testing/s25-test2.jpg)

This was solved by adding *and(orientation:portrait)* on the appropriate media query.

[Back to Readme file](/README.md)