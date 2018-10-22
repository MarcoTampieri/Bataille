let bottone = document.querySelector("#start");

function battle() {

    class Card {
        constructor(name, value) {
            this.name = name;
            this.value = value;
        }
    }

    let deck = [
        new Card("Ace of Spades", 1),
        new Card("Ace of Hearts", 1),
        new Card("Ace of Clubs", 1),
        new Card("Ace of Diamonds", 1),
        new Card("Two of Spades", 2),
        new Card("Two of Hearts", 2),
        new Card("Two of Clubs", 2),
        new Card("Two of Diamonds", 2),
        new Card("Three of Spades", 3),
        new Card("Three of Hearts", 3),
        new Card("Three of Clubs", 3),
        new Card("Three of Diamonds", 3),
        new Card("Four of Spades", 4),
        new Card("Four of Hearts", 4),
        new Card("Four of Clubs", 4),
        new Card("Four of Diamonds", 4),
        new Card("Five of Spades", 5),
        new Card("Five of Hearts", 5),
        new Card("Five of Clubs", 5),
        new Card("Five of Diamonds", 5),
        new Card("Six of Spades", 6),
        new Card("Six of Hearts", 6),
        new Card("Six of Clubs", 6),
        new Card("Six of Diamonds", 6),
        new Card("Seven of Spades", 7),
        new Card("Seven of Hearts", 7),
        new Card("Seven of Clubs", 7),
        new Card("Seven of Diamonds", 7),
        new Card("Eight of Spades", 8),
        new Card("Eight of Hearts", 8),
        new Card("Eight of Clubs", 8),
        new Card("Eight of Diamonds", 8),
        new Card("Nine of Spades", 9),
        new Card("Nine of Hearts", 9),
        new Card("Nine of Clubs", 9),
        new Card("Nine of Diamonds", 9),
        new Card("Ten of Spades", 10),
        new Card("Ten of Hearts", 10),
        new Card("Ten of Clubs", 10),
        new Card("Ten of Diamonds", 10),
        new Card("Jack of Spades", 11),
        new Card("Jack of Hearts", 11),
        new Card("Jack of Clubs", 11),
        new Card("Jack of Diamonds", 11),
        new Card("Queen of Spades", 12),
        new Card("Queen of Hearts", 12),
        new Card("Queen of Clubs", 12),
        new Card("Queen of Diamonds", 12),
        new Card("King of Spades", 13),
        new Card("King of Hearts", 13),
        new Card("King of Clubs", 13),
        new Card("King of Diamonds", 13),
    ];

    console.log(deck);

    alert("Shuffling deck.");
    let shuffledDeck = deck.sort(function (a, b) { return 0.5 - Math.random() });

    alert("Dealing cards.")
    let playerOneDeck = shuffledDeck.slice(0, 26);
    let playerTwoDeck = shuffledDeck.slice(26, 52);

    let playerOneWins = 0;
    let playerTwoWins = 0;

    let letsPlay = confirm("Ready to play?");

    if (letsPlay == false) {
        location.reload();
    } else {

        while (playerOneDeck.length > 0 || playerTwoDeck.length > 0) {

            let cardOfP1 = playerOneDeck[0];
            let cardOfP2 = playerTwoDeck[0];

            alert("Player 1 drew " + cardOfP1.name + "\nPlayer 2 drew " + cardOfP2.name);

            if (cardOfP1.value > cardOfP2.value) {
                playerOneWins += 1;
                alert("Player 1 wins this round.")
            } else if (cardOfP1.value < cardOfP2.value) {
                playerTwoWins += 1;
                alert("Player 2 wins this round.")
            } else if (cardOfP1.value == cardOfP2.value) {
                console.log(playerOneDeck.length);
                console.log(playerTwoDeck.length);
                playerOneDeck.splice(1, 1);
                playerTwoDeck.splice(1, 1);
                console.log(playerOneDeck.length);
                console.log(playerTwoDeck.length);
                alert("Cards are of equal strenght, the round goes on.")
            };
            alert("Wins: \nPlayer 1: " + playerOneWins + "\nPlayer 2: " + playerTwoWins);
            playerOneDeck.shift();
            playerTwoDeck.shift();
        };

        if (playerOneDeck == 0 && playerTwoDeck == 0) {
            if (playerOneWins > playerTwoWins) {
                alert("Player 1 wins " + playerOneWins + " to " + playerTwoWins);
            } else if (playerOneWins < playerTwoWins) {
                alert("Player 2 wins " + playerTwoWins + " to " + playerOneWins);
            } else if (playerOneWins == playerTwoWins) {
                alert("The score is " + playerOneWins + " to " + playerTwoWins + "\nDraw.")
            };
        };
    };
};
bottone.addEventListener("click", battle);