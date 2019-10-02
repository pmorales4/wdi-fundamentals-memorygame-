//console.log("Up and running!");

//var cardOne = "queen";
//var cardTwo = "king";
//var cardThree = "queen";
//var cardFour = "king";

//console.log("User flipped " + cardOne);


var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];


function checkForMatch() {

if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again..........................");
}

};


function flipCard(cardID) {

//var cardOne = cards[0];
//var cardTwo = cards[2];


console.log("User flipped " + cards[cardID]);
//console.log("User flipped " + cards[cardID]);

//cardsInPlay.push(cardOne);
cardsInPlay.push(cards[cardID]);
//cardsInPlay.push(cardTwo);


/*
if (cardsInPlay.length === 2) 
	console.log ("The Comparison equals to 2 cards at a length of 2 as well!");

if (cardsInPlay[0] === cardsInPlay[2]){
   alert("you found a match!");
} else {
   alert("Sorry, try again!");
}
*/
checkForMatch();

};





flipCard(0);
flipCard(2);




//testing line 
//console.log(cardTwo);



//console.log("User flipped queen - " + cardOne);

//console.log("User flipped king - " + cardTwo);


