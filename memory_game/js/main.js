function Card(rank, suit, image) {
	this.rank = rank;
	this.suit = suit;
	this.cardImage = image;
}

var cards = [
new Card("queen","hearts","images/queen-of-hearts.png"),
new Card("queen","diamonds","images/queen-of-diamonds.png"),
new Card("king","hearts","images/king-of-hearts.png"),
new Card("king","diamonds","images/king-of-diamonds.png")
];
var cardsInPlay = [];

var createBoard = function(lines) {
	var myNode = document.getElementById("game-board");
	while (myNode.firstChild) {
    	myNode.removeChild(myNode.firstChild);
	}
	cardsInPlay = [];
	for (i = 0; i < cards.length*lines; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id',i%cards.length);
		cardElement.addEventListener('click', flipCard);
		document.getElementById("game-board").appendChild(cardElement);
	}
}

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		confirm("You found a match!");
	} else {
		confirm("Sorry, try again.");
	}
}

var flipCard = function() {
	let cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cardImage);
	console.log("User flipped " + cards[cardId].rank + " of " + cards[cardId].suit);
	cardsInPlay.push(cards[cardId].cardImage);
	console.log(cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
		setTimeout(checkForMatch, 10);
	}
}

for (let i = 0; i < 9; i++) {
	var buttonElement = document.createElement('input');
	buttonElement.setAttribute('type', 'button');
	buttonElement.setAttribute('data-id',i);
	buttonElement.setAttribute('value', i+2);
	buttonElement.addEventListener("click", function(){createBoard(i+2)});
	document.getElementById("button-board").appendChild(buttonElement);
}

createBoard(2);