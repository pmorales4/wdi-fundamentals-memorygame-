


const cardsInPlay = [];

const cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

//function "checkForMatch" validates match of cards
function checkForMatch() {

	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again");
	}

};


function flipCard() {


	var cardID = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardID].cardImage);

	console.log("User flipped " + cards[cardID].rank);
	console.log(cards[cardID].cardImage);
	console.log(cards[cardID].suit);
	cardsInPlay.push(cards[cardID].rank);

	checkForMatch();

};


function createBoard(){
	for (var i = 0; i < cards.length; i++) {
	//console.log(i); // testing here
	var cardElement = document.createElement('img');
	//console.log(cardElement);  // testing here as well.
	cardElement.setAttribute('src', 'images/back.png');
	cardElement.setAttribute('data-id', i);
	cardElement.addEventListener('click', flipCard);
	document.getElementById('game-board').appendChild(cardElement);

}
};

createBoard();