let bottone = document.querySelector("#start");

function battle() {

    let deck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    alert("Shuffling deck.");
    let shuffledDeck = deck.sort(function (a, b) { return 0.5 - Math.random() });
    
    alert("Dealing cards.")
    let playerOneDeck = shuffledDeck.slice(0, 5);
    let playerTwoDeck = shuffledDeck.slice(5, 11);

    let playerOneWins = 0;
    let playerTwoWins = 0;

    let letsPlay = confirm("Ready to play?");

    if (letsPlay == false) {
       location.reload();
    } else {
        while (playerOneDeck.length > 0 || playerTwoDeck.length > 0) {

            let cardOfP1 = playerOneDeck[0];
            let cardOfP2 = playerTwoDeck[0];

            alert("Player 1 drew " + cardOfP1 + "\nPlayer 2 drew " + cardOfP2);

            if (cardOfP1 > cardOfP2) {
                playerOneWins += 1;
                alert("Player 1 wins this round.")
            } else if (cardOfP1 < cardOfP2) {
                playerTwoWins += 1;
                alert("Player 2 wins this round.")
            };
            
            playerOneDeck.shift();
            playerTwoDeck.shift();
        };

        if (playerOneDeck == 0 && playerTwoDeck == 0) {
            if (playerOneWins > playerTwoWins) {
                alert("Player 1 wins " + playerOneWins + " to " + playerTwoWins);
            } else if (playerOneWins < playerTwoWins) {
                alert("Player 2 wins " + playerTwoWins + " to " + playerOneWins);
            };
        };
    };
};
bottone.addEventListener("click", battle);
