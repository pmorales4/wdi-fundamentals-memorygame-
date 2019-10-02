//console.log("Up and running!");

//var cardOne = "queen";
//var cardTwo = "king";
//var cardThree = "queen";
//var cardFour = "king";

//console.log("User flipped " + cardOne);


var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var cardOne = cards[0];
var cardTwo = cards[2]

//testing line 
//console.log(cardTwo);

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

//console.log("User flipped queen - " + cardOne);

//console.log("User flipped king - " + cardTwo);

if (cardsInPlay.length === 2) 
	console.log ("The Comparison equals to 2 cards at a length of 2 as well!");

if (cardsInPlay[0] === cardsInPlay[2]){
   alert("you found a match!");
} else {
   alert("Sorry, try again!");
}