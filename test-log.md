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
