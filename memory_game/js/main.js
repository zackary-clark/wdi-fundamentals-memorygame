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
var cardsInPlayImage = [];
var cardsInPlayId = [];
var cardsAvailable = [];
var attempts = 0;

var createBoard = function(lines) {
	var myNode = document.getElementById("game-board");
	var rand = 0;
	for (i = 0; i < cards.length; i++) {
		cardsAvailable[i] = lines;
	}
	while (myNode.firstChild) {
    	myNode.removeChild(myNode.firstChild);
	}
	attempts = 0;
	cardsInPlayImage = [];
	cardsInPlayId = [];
	for (i = 0; i < cards.length*lines; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		do {
			rand = Math.floor((Math.random())*cards.length);
		} while (cardsAvailable[rand] === 0);
		cardsAvailable[rand]--;
		cardElement.setAttribute('data-id',rand);
		cardElement.setAttribute('id-number',i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById("game-board").appendChild(cardElement);
	}
}

var checkForMatch = function() {
	if (cardsInPlayImage[0] === cardsInPlayImage[1]) {
		alert("You found a match!");
	} else {
		if (confirm("Sorry, try again.")) {resetCards()};
	}
}

var flipCard = function() {
	let cardsId = this.getAttribute('data-id');
	if (!cardsInPlayId.includes(this.getAttribute('id-number'))) {
		this.setAttribute('src', cards[cardsId].cardImage);
		console.log("User flipped " + cards[cardsId].rank + " of " + cards[cardsId].suit);
		cardsInPlayImage.push(cards[cardsId].cardImage);
		cardsInPlayId.push(this.getAttribute('id-number'));
		if (cardsInPlayImage.length === 2) {
			setTimeout(checkForMatch, 50);
		}
	} else {
		console.log("This Card is already flipped.")
	}
}

var resetCards = function() {
	console.log("Cards Reset");
	attempts++;
	for (i = 0; i < cardsInPlayId.length; i++) {
		var cardElements = document.getElementById("game-board").childNodes;
		cardElements[cardsInPlayId[i]].src = "images/back.png";
	}
	cardsInPlayImage = [];
	cardsInPlayId = [];
	console.log("Attempts: " + attempts);
}

for (let i = 0; i < 9; i++) {
	var buttonElement = document.createElement('input');
	buttonElement.setAttribute('type', 'button');
	buttonElement.setAttribute('data-id',i);
	buttonElement.setAttribute('value', i+2);
	buttonElement.addEventListener("click", function(){createBoard(i+2)});
	document.getElementById("button-board").appendChild(buttonElement);
}

document.getElementById("resetButton").addEventListener("click", resetCards);

createBoard(2);