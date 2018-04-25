# Sparta DOM Dice Game
## Manipulating the DOM to make the dice roll.

I found this homework very tricky!

* I used the onclick attribute in my html to trigger the umbrella function that rolls the dice when the user clicks the button. This part was quite easy as I have done this before. I think this is a DOM Event..?
* I used Math.floor on Math.random to have the computer pick a random number 1 - 6 inclusive.
* I successfully implemented a switch statement this time to give the dice roll corresponding to the number picked by the computer

* Maybe I should have written more functions inside the main function but I wasn't sure how to apply it to this!

* The issue I had was in actually manipulating the DOM in the right way so that the dots of the .dot class would display on the relevant divs to create the dice roll! I tried to write this but it didn't run:


```JavaScript
switch (randomRoll) {
  case 1:
  diceSquares[10].className += ".dot";
    break;```
