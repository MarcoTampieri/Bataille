let bottone = document.querySelector("#start");

function battle() {

    let deck = [];

    class Card {
        constructor(name, value) {
            this.name = name;
            this.value = value;
        }
    }

    let card1 = new Card("Ace of Spades", 1);
    let card2 = new Card("Ace of Hearts", 1);
    let card3 = new Card("Ace of Clubs", 1);
    let card4 = new Card("Ace of Diamonds", 1);
    let card5 = new Card("Two of Spades", 2);
    let card6 = new Card("Two of Hearts", 2);
    let card7 = new Card("Two of Clubs", 2);
    let card8 = new Card("Two of Diamonds", 2);
    let card9 = new Card("Three of Spades", 3);
    let card10 = new Card("Three of Hearts", 3);
    let card11 = new Card("Three of Clubs", 3);
    let card12 = new Card("Three of Diamonds", 3);
    let card13 = new Card("Four of Spades", 4);
    let card14 = new Card("Four of Hearts", 4);
    let card15 = new Card("Four of Clubs", 4);
    let card16 = new Card("Four of Diamonds", 4);
    let card17 = new Card("Five of Spades", 5);
    let card18 = new Card("Five of Hearts", 5);
    let card19 = new Card("Five of Clubs", 5);
    let card20 = new Card("Five of Diamonds", 5);
    let card21 = new Card("Six of Spades", 6);
    let card22 = new Card("Six of Hearts", 6);
    let card23 = new Card("Six of Clubs", 6);
    let card24 = new Card("Six of Diamonds", 6);
    let card25 = new Card("Seven of Spades", 7);
    let card26 = new Card("Seven of Hearts", 7);
    let card27 = new Card("Seven of Clubs", 7);
    let card28 = new Card("Seven of Diamonds", 7);
    let card29 = new Card("Eight of Spades", 8);
    let card30 = new Card("Eight of Hearts", 8);
    let card31 = new Card("Eight of Clubs", 8);
    let card32 = new Card("Eight of Diamonds", 8);
    let card33 = new Card("Nine of Spades", 9);
    let card34 = new Card("Nine of Hearts", 9);
    let card35 = new Card("Nine of Clubs", 9);
    let card36 = new Card("Nine of Diamonds", 9);
    let card37 = new Card("Ten of Spades", 10);
    let card38 = new Card("Ten of Hearts", 10);
    let card39 = new Card("Ten of Clubs", 10);
    let card40 = new Card("Ten of Diamonds", 10);
    let card41 = new Card("Jack of Spades", 11);
    let card42 = new Card("Jack of Hearts", 11);
    let card43 = new Card("Jack of Clubs", 11);
    let card44 = new Card("Jack of Diamonds", 11);
    let card45 = new Card("Queen of Spades", 12);
    let card46 = new Card("Queen of Hearts", 12);
    let card47 = new Card("Queen of Clubs", 12);
    let card48 = new Card("Queen of Diamonds", 12);
    let card49 = new Card("King of Spades", 13);
    let card50 = new Card("King of Hearts", 13);
    let card51 = new Card("King of Clubs", 13);
    let card52 = new Card("King of Diamonds", 13);

    //for (i = 1; i < 53; i++) {
    //deck.push('card' + i);
    //}

    deck.push(card1, card10, card11, card12, card13, card14, card15, card16, card17, card18, card19,
        card2, card20, card21, card22, card23, card24, card25, card26, card27, card28, card29,
        card3, card30, card31, card32, card33, card34, card35, card36, card37, card38, card39,
        card4, card40, card41, card42, card43, card44, card45, card46, card47, card48, card49,
        card5, card50, card51, card52, card6, card7, card8, card9);
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