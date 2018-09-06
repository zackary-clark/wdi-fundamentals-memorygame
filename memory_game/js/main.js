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

var createBoard = function() {
	for (let i = 0; i < cards.length*4; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id',i%4);
		cardElement.addEventListener('click', flipCard);
		document.getElementById("game-board").appendChild(cardElement);
	}
}

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}

var flipCard = function() {
	let cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
}

createBoard();