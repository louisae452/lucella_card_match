# Lucella card match test log.

## Functionality.

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
|02/03/16|The game logs the number of moves taken.|Play the game. Each time a pair of cards is turned, the number of moves should increase by one.|The number of moves logged onto the console increases by one each time a pair of cards is played.|Pass|Create element to display number of moves. Create message when the board has been emptied.|
| |Element displays number of moves| | | |
|02/03/26|The game logs a congratulations message when the board is cleared.|Play the game. When the board is emptied, a congratulations message should be logged onto the conlole.|A Congratulations message is logged onto the console.|Pass|Create element to display congratulations message. Populate the board with random cards.| 
|02/03/26| Congratulations message appears when board is cleared.|Play the game. When the board is cleared, a congratulations message with the number of moves used should appear.|A congratulations message with the number of moves used appears when the board is cleared.|Pass|Populate the board with random cards.|
|03/03/26| The game gets populated with random card-pairs.|Play the game. The game should be populated by a set of six card-pairs in random positions.|The game gets populated by 6 random pairs of cards. All images appear at some point.|Pass|Set medium level page. Set hard level page.|
|05/03/26|The medium level game plays correctly.|Play the medium game. The board should be populated by 8 random pairs of cards. It should be possible to clear the board. A congratulations message appears.|The board is populated by 8 random pairs of cards. It is possible to clear the board. A congratulations message appears.|Pass|Set hard level game.|
|05/03/26|The hard game plays correctly.|Play the hard game. The board should be populated by 10 random pairs of cards in random positions. It should be possible to clear the board. A Congratulations message should appear.|The board is populated by 10 pairs of cards in random positions. It is possible to clear the board. A congratulations message appears.|Pass|Set reset button.|
|05/03/26|The reset button works (easy level).|Play the game easy level. Half way through the game, press the reset button. The board should get populated again.|The reset button re-populates the board when in the middle of the easy game.|Pass|Set reset button in medium level.|
|05/03/26|The reset button works (medium level).|Play the game medium level. Half way through the game, press the reset button. The board should get populated again.|The reset button re-populates the board when in the middle of the medium game.|Pass|Set the reset button in the hard level.|
|05/03/26|The reset button works (hard level).|Play the game hard level. Half way through the game, press the hard game. The board should get populated again.|The reset button re-populates the board when in the middle of the hard game.|Pass|Add the moves counter to the screen.|




## User experience.
|Date|Poblem|Solution|
|:----|:----|:----|
|05/03/26. |After a pair of exposed cards has been dealt with, it takes too long to be able to turn the next card on the board. That can be frustated.|The time function to get reset the eventListener was adjusted.|

## Responsiveness.
|Date|Feature|Expected result|Result|Pass/fail|
|:---|:-----|:----|:----|:----|
|11/03/26|Display on small devices changes to fit all cards on screen when device is rotated.|Switch small devices between portrait and landscape orientation in each of the levels. The disposition of the cards on the board should change so they fit evenly on the screen.|The position of the cards changes depending on whether the small device is used in portrait or landscape orientation.|Pass|
|11/03/26|Message to rotate the device appears on small devices asking to rotate device in medium and hard levels.|Start game in medium and hard levels in small devices in portrait orientation. A message to rotate the device should appear. The message should disappear when the device is rotated landscape.|A message appears when medium and hard levels are played in portrait on small devices. The message disappears when the device is rotated. It appears again when the device is rotated back to portrait.S|Pass|