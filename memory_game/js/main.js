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

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}

var flipCard = function(cardId) {
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
}

flipCard(0);
flipCard(1);