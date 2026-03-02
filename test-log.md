# Lucella card match test log.

## Page: easy.html

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
|02/03/16|The game logs the number of moves taken.|Play the game. Each time a pair of cards is turned, the number of moves should increase by one.|The number of moves logged onto the console increases by one each time a pair of cards is played.|Create element to display number of moves. Create message when the board has been emptied.|
| |Element displays number of moves| | | |
|02/03/26/The game logs a congratulations message when the board is cleared.|Play the game. When the board is emptied, a congratulations message should be logged onto the conlole.|A Congratulations message is logged onto the console.|Pass|Create element to display congratulations message. Populate the board with random cards.| 